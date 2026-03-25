/**
 * アプリケーションのバージョン情報
 *
 * 形式: Major.Minor.Patch（セマンティックバージョニング）
 * - Major: 大きな仕様変更・非互換な変更
 * - Minor: 機能追加（後方互換を維持）
 * - Patch: バグ修正・軽微な変更。**コードが少しでも変わったら最低でもここを1つ上げる**
 *
 * package.json の "version" と必ず同じ値にすること（ビルドで検証される）。
 * 上げ方: `node scripts/bump-version.mjs patch|minor|major`
 */

export const APP_VERSION = '1.1.2'
export const APP_NAME = 'それ、青切符やで！'
export const APP_SUBTITLE = '自転車違反チェッカー 2026'
export const APP_BUILD_DATE = new Date().toISOString().split('T')[0]

export const version = {
  app: APP_VERSION,
  name: APP_NAME,
  subtitle: APP_SUBTITLE,
  buildDate: APP_BUILD_DATE,
  displayText: `v${APP_VERSION}`,
}
