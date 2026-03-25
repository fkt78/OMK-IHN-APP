/**
 * public/pwa-icon-source.svg から PWA / Apple 用 PNG を生成する。
 * 実行: node scripts/generate-pwa-icons.mjs
 */
import sharp from 'sharp'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const svgPath = join(root, 'public', 'pwa-icon-source.svg')
const svg = readFileSync(svgPath)

const targets = [
  { file: 'pwa-512x512.png', size: 512 },
  { file: 'pwa-192x192.png', size: 192 },
  { file: 'apple-touch-icon.png', size: 180 },
]

for (const { file, size } of targets) {
  const out = join(root, 'public', file)
  await sharp(svg).resize(size, size).png({ compressionLevel: 9 }).toFile(out)
  console.log(`wrote ${file} (${size}×${size})`)
}
