const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processLogo() {
  const input = path.resolve('C:/Users/Lenovo/.gemini/antigravity-ide/brain/9ee99445-a04c-44e8-969a-efa484f6e829/.user_uploaded/media_1793166430196.png');
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  const alpha = new Float32Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Remove bottom right AI watermark sparkle (x > 930 && y > 385)
      if (x > 930 && y > 385) {
        alpha[y * width + x] = 0;
        continue;
      }

      // Hat inner opening (x: 175..248, y: 32..108):
      // The checkerboard here can have slight warm shadow bleed (r < 145)
      if (x >= 175 && x <= 248 && y >= 32 && y <= 108) {
        if (r < 145) {
          alpha[y * width + x] = 0;
          continue;
        }
      }

      const maxRGB = Math.max(r, g, b);
      const minRGB = Math.min(r, g, b);
      const chroma = maxRGB - minRGB;
      const ratio = b > 0 ? r / b : 99;

      // Pure or warm checkerboard: chroma <= 16 and maxRGB < 135
      if (chroma <= 16 && maxRGB < 135) {
        alpha[y * width + x] = 0;
        continue;
      }

      // Bright specular metallic highlights & white porcelain skin:
      if (r >= 220 && g >= 215 && b >= 205) {
        alpha[y * width + x] = 1.0;
        continue;
      }

      if (r >= 160 && g >= 150 && b >= 130 && r > b + 10) {
        alpha[y * width + x] = 1.0;
        continue;
      }

      // Metallic Gold / Warm Bronze tones:
      if (chroma >= 22 && ratio >= 1.28 && r >= 50 && r >= g) {
        alpha[y * width + x] = 1.0;
        continue;
      }

      if (chroma >= 30 && r >= 45 && r >= g) {
        alpha[y * width + x] = 1.0;
        continue;
      }

      // Black line work inside the woman illustration
      if (x >= 40 && x <= 390 && y >= 40 && y <= 450) {
        if (r < 35 && g < 35 && b < 35) {
          alpha[y * width + x] = 1.0;
          continue;
        }
      }

      // Deep bronze / shadow of gold:
      if (chroma >= 18 && ratio >= 1.35 && r > 45 && r > g) {
        alpha[y * width + x] = 0.8;
        continue;
      }

      alpha[y * width + x] = 0;
    }
  }

  // Edge anti-aliasing ONLY on foreground pixels (never bleed into background)
  const smoothAlpha = new Float32Array(width * height);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      if (alpha[idx] === 0) {
        smoothAlpha[idx] = 0;
        continue;
      }

      // If foreground pixel, check how many neighbors are also foreground
      let fgCount = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (alpha[(y + dy) * width + (x + dx)] > 0) fgCount++;
        }
      }

      if (fgCount >= 7) {
        smoothAlpha[idx] = alpha[idx];
      } else {
        // Soften outer boundary
        smoothAlpha[idx] = Math.max(0.3, alpha[idx] * (fgCount / 9));
      }
    }
  }

  // Find bounding box
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (smoothAlpha[y * width + x] > 0.05) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log('Bounds:', { minX, maxX, minY, maxY, width, height });

  const pad = 12;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(width - cropX, (maxX - minX) + pad * 2);
  const cropH = Math.min(height - cropY, (maxY - minY) + pad * 2);

  const outBuffer = Buffer.alloc(cropW * cropH * 4);
  for (let dy = 0; dy < cropH; dy++) {
    for (let dx = 0; dx < cropW; dx++) {
      const sx = cropX + dx;
      const sy = cropY + dy;
      const sIdx = (sy * width + sx) * 4;
      const dIdx = (dy * cropW + dx) * 4;
      const a = smoothAlpha[sy * width + sx];

      outBuffer[dIdx] = data[sIdx];
      outBuffer[dIdx + 1] = data[sIdx + 1];
      outBuffer[dIdx + 2] = data[sIdx + 2];
      outBuffer[dIdx + 3] = Math.round(a * 255);
    }
  }

  // Restore complete letter 'E' in "LIFESTYLE"
  // Expand buffer width by 35px to fit complete letter E and padding
  const fullW = cropW + 35;
  const fullBuffer = Buffer.alloc(fullW * cropH * 4);
  for (let y = 0; y < cropH; y++) {
    for (let x = 0; x < cropW; x++) {
      const sIdx = (y * cropW + x) * 4;
      const dIdx = (y * fullW + x) * 4;
      fullBuffer[dIdx] = outBuffer[sIdx];
      fullBuffer[dIdx + 1] = outBuffer[sIdx + 1];
      fullBuffer[dIdx + 2] = outBuffer[sIdx + 2];
      fullBuffer[dIdx + 3] = outBuffer[sIdx + 3];
    }
  }

  // Erase truncated E (at x >= 990 in crop coords)
  for (let y = 305; y <= 365; y++) {
    for (let x = 990; x < fullW; x++) {
      fullBuffer[(y * fullW + x) * 4 + 3] = 0;
    }
  }

  // Copy full pristine E from LIFE (x: 823..854)
  for (let y = 308; y <= 354; y++) {
    for (let x = 823; x <= 854; x++) {
      if (x <= 824 && y <= 315) continue;
      if (x >= 854 && y >= 344) continue;
      if (y < 330 && x >= 846) continue;

      const sIdx = (y * cropW + x) * 4;
      const a = outBuffer[sIdx + 3];
      if (a > 20) {
        const dstX = x + 173;
        const dIdx = (y * fullW + dstX) * 4;
        fullBuffer[dIdx] = outBuffer[sIdx];
        fullBuffer[dIdx + 1] = outBuffer[sIdx + 1];
        fullBuffer[dIdx + 2] = outBuffer[sIdx + 2];
        fullBuffer[dIdx + 3] = a;
      }
    }
  }

  // Write to public/logo-metallic.png and public/logo.png
  await sharp(fullBuffer, { raw: { width: fullW, height: cropH, channels: 4 } })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile('public/logo-metallic.png');

  fs.copyFileSync('public/logo-metallic.png', 'public/logo.png');

  // Test composite on dark
  await sharp({
    create: {
      width: fullW,
      height: cropH,
      channels: 4,
      background: { r: 10, g: 10, b: 10, alpha: 1 }
    }
  })
  .composite([{ input: 'public/logo-metallic.png' }])
  .png()
  .toFile('public/logo-test-dark.png');

  console.log('Successfully created public/logo-metallic.png with complete tagline E');
}

processLogo().catch(err => {
  console.error(err);
  process.exit(1);
});
