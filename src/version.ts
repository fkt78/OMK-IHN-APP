/**
 * アプリケーションのバージョン情報
 * セマンティックバージョニング（Major.Minor.Patch）を使用
 *
 * バージョンの上げ方：
 * - Patch: バグ修正のみ（例：1.0.0 → 1.0.1）
 * - Minor: 機能追加（後方互換性あり）（例：1.0.0 → 1.1.0）
 * - Major: 大規模な変更・非互換な変更（例：1.0.0 → 2.0.0）
 */

export const APP_VERSION = '1.1.0'
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
