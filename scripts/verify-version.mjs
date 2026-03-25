/**
 * package.json の version と src/version.ts の APP_VERSION が一致するか検証する。
 * ビルド前に実行し、ズレがあると最新版の追跡ができない状態を防ぐ。
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
const ts = readFileSync(join(root, 'src', 'version.ts'), 'utf8')
const m = ts.match(/APP_VERSION\s*=\s*['"]([^'"]+)['"]/)
const fromPkg = pkg.version
const fromTs = m?.[1]

if (!fromTs) {
  console.error('verify-version: src/version.ts に APP_VERSION が見つかりません')
  process.exit(1)
}
if (fromPkg !== fromTs) {
  console.error(
    `verify-version: バージョン不一致\n  package.json: ${fromPkg}\n  src/version.ts: ${fromTs}\n両方を同じ値に揃えてください。`
  )
  process.exit(1)
}

console.log(`verify-version: OK (${fromPkg})`)
