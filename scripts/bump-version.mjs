/**
 * セマンティックバージョン（Major.Minor.Patch）を1段階上げ、
 * package.json と src/version.ts を同時に更新する。
 *
 * 使い方: node scripts/bump-version.mjs patch|minor|major
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const kind = process.argv[2]
if (!['patch', 'minor', 'major'].includes(kind)) {
  console.error('使い方: node scripts/bump-version.mjs patch|minor|major')
  process.exit(1)
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pkgPath = join(root, 'package.json')
const versionPath = join(root, 'src', 'version.ts')

const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
const current = pkg.version
const parts = current.split('.').map((n) => parseInt(n, 10))
if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) {
  console.error(`bump-version: 想定外のバージョン形式: ${current}（Major.Minor.Patch のみ）`)
  process.exit(1)
}

let [maj, min, pat] = parts
if (kind === 'major') {
  maj += 1
  min = 0
  pat = 0
} else if (kind === 'minor') {
  min += 1
  pat = 0
} else {
  pat += 1
}

const next = `${maj}.${min}.${pat}`
pkg.version = next
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8')

let ts = readFileSync(versionPath, 'utf8')
if (!/APP_VERSION\s*=\s*['"][^'"]+['"]/.test(ts)) {
  console.error('bump-version: src/version.ts に APP_VERSION が見つかりません')
  process.exit(1)
}
ts = ts.replace(/APP_VERSION\s*=\s*['"][^'"]+['"]/, `APP_VERSION = '${next}'`)
writeFileSync(versionPath, ts, 'utf8')

console.log(`bump-version: ${current} → ${next} (${kind})`)
