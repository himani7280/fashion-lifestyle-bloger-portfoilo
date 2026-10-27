const sharp = require('sharp');
const fs = require('fs');

async function processLogo() {
  // Keep original backup if not yet backed up
  if (!fs.existsSync('public/logo-original.png')) {
    fs.copyFileSync('public/logo.png', 'public/logo-original.png');
  }

  const { data, info } = await sharp('public/logo-original.png').raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);

  function isCheckerboard(r, g, b) {
    const diffRG = Math.abs(r - g);
    const diffGB = Math.abs(g - b);
    const diffRB = Math.abs(r - b);
    const maxDiff = Math.max(diffRG, diffGB, diffRB);

    // Achromatic neutral grey tiles
    if (maxDiff <= 7) {
      if ((r >= 85 && r <= 112) || (r >= 120 && r <= 152)) {
        return true;
      }
      if (maxDiff <= 4 && r >= 78 && r <= 158) {
        return true;
      }
    }
    return false;
  }

  // 1. Mark checkerboard and watermark
  const isBg = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      
      // Bottom-right watermark spark
      if (x > 940 && y > 440) {
        isBg[y * width + x] = 1;
        continue;
      }

      if (isCheckerboard(r, g, b)) {
        isBg[y * width + x] = 1;
      }
    }
  }

  const alpha = new Float32Array(width * height);
  for (let i = 0; i < width * height; i++) {
    alpha[i] = isBg[i] ? 0 : 1;
  }

  // 2. Feather edges smoothly
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const i = y * width + x;
      if (isBg[i]) continue;

      const idx = i * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));

      let bgNeighbors = 0;
      if (isBg[i - 1]) bgNeighbors++;
      if (isBg[i + 1]) bgNeighbors++;
      if (isBg[i - width]) bgNeighbors++;
      if (isBg[i + width]) bgNeighbors++;

      if (bgNeighbors > 0) {
        if (maxDiff <= 8 && r >= 75 && r <= 165) {
          alpha[i] = 0;
        } else if (maxDiff <= 14 && r >= 70 && r <= 160) {
          alpha[i] = Math.max(0, 1 - (bgNeighbors * 0.28));
        }
      }
    }
  }

  // 3. Remove isolated debris (< 25 pixels)
  const visited = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (alpha[idx] > 0.1 && !visited[idx]) {
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
              if (!visited[nIdx] && alpha[nIdx] > 0.1) {
                visited[nIdx] = 1;
                q.push([nx, ny]);
              }
            }
          }
        }
        // If tiny speck (< 25 pixels), set alpha to 0
        if (comp.length < 25) {
          for (const [cx, cy] of comp) {
            alpha[cy * width + cx] = 0;
          }
        }
      }
    }
  }

  // 4. Set final alpha channel
  for (let i = 0; i < width * height; i++) {
    const idx = i * channels;
    out[idx + 3] = Math.round(alpha[i] * 255);
  }

  // Save to public/logo.png (the active site logo)
  await sharp(out, { raw: { width, height, channels } })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile('public/logo.png');

  console.log('Successfully saved studio-quality transparent logo to public/logo.png');
}

processLogo();
