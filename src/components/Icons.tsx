/* Apple SF Symbols風 のシンプルなアイコンセット */

export function BicycleIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 前輪 */}
      <circle cx="12" cy="28" r="8" />
      {/* 後輪 */}
      <circle cx="36" cy="28" r="8" />
      {/* フレーム */}
      <path d="M 12 28 L 20 12 L 36 28" />
      <path d="M 20 12 L 36 28" />
      {/* シート */}
      <line x1="16" y1="10" x2="28" y2="10" strokeWidth="2" />
      {/* ハンドル */}
      <path d="M 12 20 Q 12 12 16 10" />
    </svg>
  )
}

export function CarIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 車体 */}
      <path d="M 8 28 L 10 20 Q 10 16 14 14 L 34 14 Q 38 16 38 20 L 40 28" />
      <line x1="8" y1="28" x2="40" y2="28" />
      {/* 前輪 */}
      <circle cx="14" cy="34" r="6" />
      {/* 後輪 */}
      <circle cx="34" cy="34" r="6" />
      {/* ウィンドウ */}
      <rect x="12" y="17" width="10" height="8" fill="none" />
      <rect x="26" y="17" width="10" height="8" fill="none" />
    </svg>
  )
}

export function AlertIcon({ size = 48, color = '#FF3B30' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 三角形 */}
      <path d="M 24 6 L 40 38 L 8 38 Z" />
      {/* 中央ドット */}
      <circle cx="24" cy="28" r="2" fill={color} />
      {/* 下線 */}
      <line x1="24" y1="32" x2="24" y2="36" strokeWidth="2" />
    </svg>
  )
}

export function CheckmarkIcon({ size = 48, color = '#34C759' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" />
      <path d="M 16 24 L 21 29 L 32 18" />
    </svg>
  )
}

export function QuestionIcon({ size = 48, color = '#FF9500' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" />
      <path d="M 20 18 Q 20 14 24 14 Q 28 14 28 18 Q 28 21 25 23 L 25 26" />
      <circle cx="25" cy="32" r="1.5" fill={color} />
    </svg>
  )
}

export function DocumentIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* ドキュメント */}
      <rect x="10" y="8" width="28" height="32" rx="2" />
      {/* テキスト行 */}
      <line x1="14" y1="16" x2="34" y2="16" />
      <line x1="14" y1="23" x2="34" y2="23" />
      <line x1="14" y1="30" x2="28" y2="30" />
    </svg>
  )
}

export function CoinIcon({ size = 48, color = '#FF9500' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 外側の円 */}
      <circle cx="24" cy="24" r="16" />
      {/* 内側の円 */}
      <circle cx="24" cy="24" r="12" fill="none" />
      {/* 通貨記号（Y）*/}
      <path d="M 20 16 L 24 21 L 28 16" />
      <line x1="24" y1="21" x2="24" y2="32" />
    </svg>
  )
}

export function SmartphoneIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* スマートフォン */}
      <rect x="12" y="8" width="24" height="32" rx="3" />
      {/* スクリーン */}
      <rect x="14" y="12" width="20" height="22" rx="1" fill="none" />
      {/* ホームボタン */}
      <circle cx="24" cy="36" r="2" fill={color} />
    </svg>
  )
}

export function TrafficLightIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* フレーム */}
      <rect x="18" y="8" width="12" height="32" rx="2" />
      {/* 赤 */}
      <circle cx="24" cy="14" r="3" fill="#FF3B30" />
      {/* 黄 */}
      <circle cx="24" cy="24" r="3" fill="#FF9500" />
      {/* 緑 */}
      <circle cx="24" cy="34" r="3" fill="#34C759" />
    </svg>
  )
}

export function NavHomeIcon({ size = 24, isActive = false }) {
  const color = isActive ? '#E8849A' : 'rgba(60,60,67,.45)'
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 4 12 L 12 4 L 20 12 V 20 Q 20 22 18 22 L 6 22 Q 4 22 4 20 Z" />
    </svg>
  )
}

export function NavQuizIcon({ size = 24, isActive = false }) {
  const color = isActive ? '#E8849A' : 'rgba(60,60,67,.45)'
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M 12 8 Q 12 7 13 7 Q 14 7 14 8 Q 14 9 12 10 L 12 12" />
      <circle cx="12" cy="15.5" r="0.5" fill={color} />
    </svg>
  )
}

export function NavCheckerIcon({ size = 24, isActive = false }) {
  const color = isActive ? '#E8849A' : 'rgba(60,60,67,.45)'
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 3 12 L 9 18 L 21 6" />
    </svg>
  )
}

export function NavRulesIcon({ size = 24, isActive = false }) {
  const color = isActive ? '#E8849A' : 'rgba(60,60,67,.45)'
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 5 3 L 5 21 L 19 21 L 19 7 Q 19 3 15 3 Z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="14" y2="16" />
    </svg>
  )
}

export function NavFinesIcon({ size = 24, isActive = false }) {
  const color = isActive ? '#E8849A' : 'rgba(60,60,67,.45)'
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M 12 6 L 12 12 L 15 15" />
    </svg>
  )
}
