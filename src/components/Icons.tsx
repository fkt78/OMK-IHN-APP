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

/* ── 改正・違反アイコンセット ── */

export function ProhibitIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 円 */}
      <circle cx="24" cy="24" r="18" />
      {/* 斜め線 */}
      <line x1="10" y1="10" x2="38" y2="38" strokeWidth="2" />
    </svg>
  )
}

export function StopSignIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 八角形 */}
      <path d="M 14 8 L 34 8 L 40 14 L 40 34 L 34 40 L 14 40 L 8 34 L 8 14 Z" />
    </svg>
  )
}

export function ArrowLeftIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 矢印 */}
      <line x1="32" y1="24" x2="10" y2="24" strokeWidth="2" />
      <path d="M 16 18 L 10 24 L 16 30" />
    </svg>
  )
}

export function MoonIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 月 */}
      <path d="M 12 24 Q 12 14 24 14 Q 34 14 34 24 Q 34 34 24 34 Q 20 34 16 30" />
    </svg>
  )
}

export function UmbrellaIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 傘 */}
      <path d="M 24 8 Q 12 8 8 16 Q 8 16 24 16 Q 40 16 40 16 Q 36 8 24 8" />
      <line x1="24" y1="16" x2="24" y2="36" strokeWidth="2" />
      <circle cx="24" cy="38" r="2" fill={color} />
    </svg>
  )
}

export function HeadphoneIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* ヘッドフォン */}
      <path d="M 10 24 Q 10 14 24 14 Q 38 14 38 24" />
      <rect x="8" y="24" width="6" height="12" rx="2" />
      <rect x="34" y="24" width="6" height="12" rx="2" />
    </svg>
  )
}

export function PeopleIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 左の人 */}
      <circle cx="16" cy="12" r="4" />
      <path d="M 16 18 L 16 28 M 12 22 L 20 22" />
      {/* 右の人 */}
      <circle cx="32" cy="12" r="4" />
      <path d="M 32 18 L 32 28 M 28 22 L 36 22" />
    </svg>
  )
}

export function CoupleIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 左の人 */}
      <circle cx="14" cy="11" r="3" />
      <path d="M 14 16 L 14 24 M 11 19 L 17 19" />
      {/* 右の人 */}
      <circle cx="26" cy="11" r="3" />
      <path d="M 26 16 L 26 24 M 23 19 L 29 19" />
      {/* 手つなぎ */}
      <line x1="17" y1="19" x2="23" y2="19" strokeWidth="2" />
    </svg>
  )
}

export function BeerIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* グラス */}
      <path d="M 14 10 L 16 30 Q 16 36 20 38 L 28 38 Q 32 36 32 30 L 34 10" />
      <line x1="14" y1="10" x2="34" y2="10" strokeWidth="2" />
      {/* 泡 */}
      <circle cx="20" cy="8" r="1.5" fill={color} />
      <circle cx="24" cy="7" r="1.5" fill={color} />
      <circle cx="28" cy="8" r="1.5" fill={color} />
    </svg>
  )
}

export function RefreshIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 矢印 */}
      <path d="M 12 24 Q 12 16 20 14 Q 28 12 32 18" />
      <path d="M 32 18 L 30 10 L 38 12" />
    </svg>
  )
}

export function BasketIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* かご */}
      <path d="M 10 14 L 14 38 Q 14 40 16 40 L 32 40 Q 34 40 34 38 L 38 14" />
      <line x1="8" y1="14" x2="40" y2="14" strokeWidth="2" />
      <line x1="16" y1="14" x2="16" y2="40" />
      <line x1="24" y1="14" x2="24" y2="40" />
      <line x1="32" y1="14" x2="32" y2="40" />
    </svg>
  )
}

export function SnailIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 殻 */}
      <circle cx="28" cy="18" r="10" />
      <path d="M 24 20 Q 22 18 20 20" />
      {/* 体 */}
      <path d="M 20 28 Q 18 32 16 36" />
      {/* 触角 */}
      <line x1="16" y1="34" x2="14" y2="30" strokeWidth="1.5" />
      <line x1="16" y1="34" x2="18" y2="30" strokeWidth="1.5" />
    </svg>
  )
}

export function HouseIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 屋根 */}
      <path d="M 10 28 L 24 10 L 38 28" />
      {/* 壁 */}
      <rect x="10" y="28" width="28" height="16" />
      {/* ドア */}
      <rect x="20" y="28" width="8" height="16" />
      {/* 窓 */}
      <rect x="14" y="18" width="5" height="5" />
      <rect x="29" y="18" width="5" height="5" />
    </svg>
  )
}

export function FlashlightIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* ボディ */}
      <rect x="16" y="10" width="8" height="16" rx="2" />
      {/* ボタン */}
      <circle cx="20" cy="12" r="1.5" fill={color} />
      {/* ライト */}
      <circle cx="20" cy="30" r="6" fill="none" />
      <path d="M 16 36 L 24 36" strokeWidth="1.5" />
    </svg>
  )
}

export function SideSpaceIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 左の車線 */}
      <line x1="8" y1="12" x2="8" y2="36" strokeWidth="2" strokeDasharray="4,4" />
      {/* 自転車 */}
      <circle cx="18" cy="20" r="2" />
      <line x1="18" y1="24" x2="18" y2="32" />
      {/* 車 */}
      <path d="M 30 14 L 40 14 L 40 28 L 30 28 Z" />
      {/* 間隔矢印 */}
      <path d="M 24 20 L 28 20" strokeWidth="2" />
      <path d="M 24 18 L 24 22" strokeWidth="1.5" />
      <path d="M 28 18 L 28 22" strokeWidth="1.5" />
    </svg>
  )
}

/* ── 追加アイコンセット ── */

export function LightbulbIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 18 36 L 18 33 Q 10 29 10 22 Q 10 10 24 10 Q 38 10 38 22 Q 38 29 30 33 L 30 36 Z" />
      <line x1="18" y1="36" x2="30" y2="36" />
      <line x1="20" y1="40" x2="28" y2="40" />
      <line x1="22" y1="44" x2="26" y2="44" />
    </svg>
  )
}

export function TrophyIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 15 10 L 33 10 L 33 26 Q 33 36 24 36 Q 15 36 15 26 Z" />
      <path d="M 15 14 L 8 14 Q 8 24 15 24" />
      <path d="M 33 14 L 40 14 Q 40 24 33 24" />
      <line x1="20" y1="36" x2="20" y2="42" />
      <line x1="28" y1="36" x2="28" y2="42" />
      <line x1="16" y1="42" x2="32" y2="42" />
    </svg>
  )
}

export function CelebrationIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 24 6 L 27.5 18 L 40 18 L 30 26 L 33.5 38 L 24 30 L 14.5 38 L 18 26 L 8 18 L 20.5 18 Z" />
    </svg>
  )
}

export function ClockIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" />
      <path d="M 24 13 L 24 24 L 31 30" strokeWidth="2" />
    </svg>
  )
}

export function ClipboardIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="14" width="24" height="28" rx="2" />
      <path d="M 19 14 L 19 10 Q 19 8 21 8 L 27 8 Q 29 8 29 10 L 29 14" />
      <line x1="16" y1="22" x2="32" y2="22" />
      <line x1="16" y1="28" x2="32" y2="28" />
      <line x1="16" y1="34" x2="26" y2="34" />
    </svg>
  )
}

export function LightningIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 28 6 L 14 26 L 24 26 L 20 42 L 34 22 L 24 22 Z" />
    </svg>
  )
}

export function BotIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="18" width="28" height="22" rx="4" />
      <circle cx="19" cy="27" r="3" fill={color} stroke="none" />
      <circle cx="29" cy="27" r="3" fill={color} stroke="none" />
      <line x1="19" y1="34" x2="29" y2="34" />
      <line x1="24" y1="18" x2="24" y2="12" strokeWidth="2" />
      <circle cx="24" cy="10" r="2.5" fill={color} stroke="none" />
      <line x1="10" y1="32" x2="6" y2="36" />
      <line x1="38" y1="32" x2="42" y2="36" />
    </svg>
  )
}

export function BookOpenIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 24 14 Q 16 10 8 12 L 8 38 Q 16 36 24 40" />
      <path d="M 24 14 Q 32 10 40 12 L 40 38 Q 32 36 24 40" />
      <line x1="24" y1="14" x2="24" y2="40" />
    </svg>
  )
}

export function TargetIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="10" />
      <circle cx="24" cy="24" r="3" fill={color} stroke="none" />
    </svg>
  )
}

/** 歩行者・歩道など */
export function PersonWalkIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="11" r="4" />
      <path d="M 22 15 L 22 28" />
      <path d="M 22 18 L 14 22" />
      <path d="M 22 18 L 30 22" />
      <path d="M 16 38 L 20 28 L 24 28 L 28 38" />
    </svg>
  )
}

/** フィルター・ハイライト用の星（線画） */
export function StarIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 24 6 L 27.5 18 L 40 18 L 30 26 L 33.5 38 L 24 30 L 14.5 38 L 18 26 L 8 18 L 20.5 18 Z" />
    </svg>
  )
}

/** 不正解マーク（クイズ選択肢など） */
export function XMarkIcon({ size = 48, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 16 16 L 32 32 M 32 16 L 16 32" />
    </svg>
  )
}
