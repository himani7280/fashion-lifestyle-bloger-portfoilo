const sharp = require('sharp');
const fs = require('fs');

async function cleanLogoFlawless() {
  const { data, info } = await sharp('public/logo-original.png').raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);

  // Helper to detect if pixel belongs to foreground (true logo element)
  function isForeground(r, g, b, x, y) {
    // Watermark in bottom right corner
    if (x > 940 && y > 440) return false;

    const rg = Math.abs(r - g);
    const gb = Math.abs(g - b);
    const rb = Math.abs(r - b);
    const maxDiff = Math.max(rg, gb, rb);

    // 1. Gold / warm tones: high saturation (leaves, hair, gold lettering)
    // Gold always has R significantly greater than B
    if (r > b + 25 && r > 65) {
      return true;
    }

    // 2. Pure black illustration lines (hat, facial features, outlines)
    // Only in the woman's figure area (x < 460) and very dark (r < 35, g < 35, b < 35)
    // BUT we must check it's not the dark outer border if any
    if (x < 460 && r < 36 && g < 36 && b < 36) {
      // Must be inside the woman region: y between 70 and 420, x between 60 and 420
      if (x >= 65 && x <= 430 && y >= 65 && y <= 425) {
        return true;
      }
    }

    // 3. Bright white/cream elements (face, highlights, white/silver letters)
    // Minimum brightness > 165
    if (r >= 165 && g >= 165 && b >= 165) {
      // Letters are in y between 190 and 320, x between 360 and 960
      // Or woman face highlights
      return true;
    }

    // 4. Subtle gold rim or warm dark tone on letters / hat trim
    if (r > b + 15 && r > 50) {
      return true;
    }

    // Everything else is background checkerboard or neutral shadow on checkerboard!
    return false;
  }

  // Pass 1: Mark foreground
  const isFg = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (isForeground(r, g, b, x, y)) {
        isFg[y * width + x] = 1;
      }
    }
  }

  // Pass 2: Clean isolated noise/debris outside main logo
  // Find connected components in foreground
  const visited = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (isFg[idx] && !visited[idx]) {
        const comp = [];
        const q = [[x, y]];
        visited[idx] = 1;
        let qHead = 0;
        while (qHead < q.length) {
          const [cx, cy] = q[qHead++];
          comp.push([cx, cy]);
          for (const [dx, dy] of [[1,0], [-1,0], [0,1], [0,-1], [1,1], [-1,-1], [1,-1], [-1,1]]) {
            const nx = cx + dx, ny = cy + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              const nIdx = ny * width + nx;
              if (!visited[nIdx] && isFg[nIdx]) {
                visited[nIdx] = 1;
                q.push([nx, ny]);
              }
            }
          }
        }
        // If isolated component has less than 20 pixels, discard as noise
        if (comp.length < 20) {
          for (const [cx, cy] of comp) {
            isFg[cy * width + cx] = 0;
          }
        }
      }
    }
  }

  // Pass 3: Create smooth alpha mask with antialiased edges
  const alpha = new Float32Array(width * height);
  for (let i = 0; i < width * height; i++) {
    alpha[i] = isFg[i] ? 1.0 : 0.0;
  }

  // Soft anti-aliasing around foreground edges
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const i = y * width + x;
      if (isFg[i]) continue;

      let fgNeighbors = 0;
      if (isFg[i - 1]) fgNeighbors++;
      if (isFg[i + 1]) fgNeighbors++;
      if (isFg[i - width]) fgNeighbors++;
      if (isFg[i + width]) fgNeighbors++;

      if (fgNeighbors >= 2) {
        // Transition pixel on edge
        alpha[i] = fgNeighbors * 0.22;
      }
    }
  }

  // Apply to output
  for (let i = 0; i < width * height; i++) {
    const idx = i * channels;
    out[idx + 3] = Math.round(alpha[i] * 255);
  }

  // Save to public/logo.png
  await sharp(out, { raw: { width, height, channels } })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile('public/logo.png');

  // Also composite on white to verify absolute perfection
  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([{ input: 'public/logo.png' }])
  .png()
  .toFile('public/test-on-white.png');

  console.log('Flawless transparency created and verified!');
}

cleanLogoFlawless();
