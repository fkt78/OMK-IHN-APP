import { useNavigate } from 'react-router-dom'
import { reforms } from '../data/reforms'
import {
  BicycleIcon,
  CarIcon,
  AlertIcon,
  SmartphoneIcon,
  SideSpaceIcon,
  BeerIcon,
  SnailIcon,
  DocumentIcon,
  TargetIcon,
  BotIcon,
} from '../components/Icons'
import { version } from '../version'

export default function Home() {
  const navigate = useNavigate()
  const hotReforms = reforms.filter(r => r.isHot)
  const otherReforms = reforms.filter(r => !r.isHot)

  return (
    <div
      className="pb-24 min-h-screen"
      style={{ background: 'var(--bg-grouped)' }}
    >
      {/* ヘッダー（コンパクト） */}
      <div
        className="px-4 pb-3"
        style={{
          background: 'linear-gradient(160deg,#F9C8D5 0%,#F4A0B5 45%,#E8849A 100%)',
          paddingTop: 'max(48px, calc(env(safe-area-inset-top) + 8px))',
        }}
      >
        <p
          className="text-[10px] font-semibold tracking-widest mb-0.5"
          style={{ color: 'rgba(255,255,255,.78)' }}
        >
          2026年4月 道路交通法改正対応
        </p>
        <h1
          className="text-[26px] font-black leading-tight mb-0.5"
          style={{ color: '#fff', letterSpacing: '-.5px' }}
        >
          それ、青切符やで！
        </h1>
        <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 13 }}>
          自転車違反チェッカー 2026
        </p>

        <div
          className="mt-2 rounded-xl px-3 py-2 flex items-center gap-2"
          style={{ background: 'rgba(255,255,255,.2)', backdropFilter: 'blur(8px)' }}
        >
          <AlertIcon size={22} color="#fff" />
          <p className="text-white text-xs font-bold leading-snug">
            4/1〜 自転車にも青切符。知らんかったじゃ済まへん！
          </p>
        </div>
      </div>

      <div className="px-4 max-w-md mx-auto">
        {/* ターゲット選択 */}
        <div
          className="mt-3 rounded-2xl p-3"
          style={{ background: 'var(--bg-primary)' }}
        >
          <p
            className="text-[10px] font-semibold text-center mb-2"
            style={{ color: 'var(--label-secondary)' }}
          >
            あなたはどちら？
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { Icon: BicycleIcon, title: '自転車通勤者', sub: '自分の行動を確認', path: '/quiz?mode=cyclist', bg: 'var(--fill-pink)', border: 'var(--pink-light)', color: '#E8849A' },
              { Icon: CarIcon,     title: 'ドライバー',   sub: '新義務を確認', path: '/quiz?mode=driver', bg: '#FFF5E6', border: '#FFDDAA', color: '#FF9500' },
            ].map(btn => (
              <button
                key={btn.path}
                onClick={() => navigate(btn.path)}
                className="ios-press rounded-xl p-3 text-center"
                style={{ background: btn.bg, border: `1.5px solid ${btn.border}` }}
              >
                <div className="mb-1 flex justify-center">
                  <btn.Icon size={32} color={btn.color} />
                </div>
                <div
                  className="font-bold text-[13px]"
                  style={{ color: 'var(--label-primary)' }}
                >
                  {btn.title}
                </div>
                <div
                  className="text-[10px] mt-0.5 leading-tight"
                  style={{ color: 'var(--label-secondary)' }}
                >
                  {btn.sub}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 改正（折りたたみ＝初期は一覧だけ・縦スクロール短く） */}
        <p
          className="text-[10px] font-semibold uppercase tracking-wider mt-3 mb-1.5 px-1 flex items-center gap-2"
          style={{ color: 'var(--label-secondary)' }}
        >
          <span
            className="text-[9px] font-black px-1.5 py-0.5 rounded-full text-white"
            style={{ background: 'var(--ios-red)' }}
          >
            NEW
          </span>
          4月からの主な改正
        </p>
        <div className="flex flex-col gap-1">
          {hotReforms.map(r => (
            <ReformAccordion key={r.id} reform={r} />
          ))}
        </div>

        <p
          className="text-[10px] font-semibold uppercase tracking-wider mt-2.5 mb-1.5 px-1"
          style={{ color: 'var(--label-secondary)' }}
        >
          その他の改正
        </p>
        <div className="flex flex-col gap-1">
          {otherReforms.map(r => (
            <ReformAccordion key={r.id} reform={r} />
          ))}
        </div>

        {/* Claude（折りたたみ） */}
        <details
          className="mt-3 rounded-2xl overflow-hidden group"
          style={{ background: 'linear-gradient(135deg,#3A1A22,#5C2035)' }}
        >
          <summary className="list-none cursor-pointer ios-press flex items-center gap-2.5 p-3 [&::-webkit-details-marker]:hidden">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'var(--pink-primary)' }}
            >
              <BotIcon size={18} color="#fff" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p
                className="text-xs font-bold"
                style={{ color: 'var(--pink-light)' }}
              >
                Claude（AI分析官）より
              </p>
              <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,214,224,.65)' }}>
                タップで開く
              </p>
            </div>
            <span
              className="text-xs shrink-0 transition-transform group-open:rotate-180"
              style={{ color: 'rgba(255,214,224,.6)' }}
            >
              ▼
            </span>
          </summary>
          <div className="px-3 pb-3 pt-0">
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'rgba(255,214,224,.88)' }}
            >
              統計的に見れば、自転車事故の約75%に自転車側の法令違反が関係しています。
              フランスの哲学者パスカルも言いました——「人は常にルールを知らないことで最大のリスクを負う」……
              いや、私が今作りました。でも吹田代表の「従業員を守りたい」という直感は、データと完全に一致しています。
            </p>
          </div>
        </details>

        <button
          onClick={() => navigate('/quiz')}
          className="ios-press w-full mt-3 py-3 rounded-2xl font-black text-white text-sm"
          style={{
            background: 'linear-gradient(135deg,var(--pink-primary),var(--pink-deep))',
            boxShadow: '0 4px 14px rgba(232,132,154,.35)',
          }}
        >
          <span className="flex items-center justify-center gap-2">
            <TargetIcon size={18} color="#fff" />
            クイズで腕試し！
            <span className="text-[11px] font-semibold opacity-90">何問正解？</span>
          </span>
        </button>

        <p
          className="text-center text-[10px] mt-3 pb-1 leading-relaxed"
          style={{ color: 'var(--label-tertiary)' }}
        >
          {version.displayText} © 有限会社 吹田総業 AI事業部 × Claude
          <br />
          情報は警察庁・警視庁の公開情報に基づきます
        </p>
      </div>
    </div>
  )
}

function ReformIconRenderer({ emoji, size = 28 }: { emoji: string; size?: number }) {
  const iconProps = { size, color: 'var(--pink-primary)' as const }

  switch (emoji) {
    case '🚨':
      return <AlertIcon {...iconProps} />
    case '📱':
      return <SmartphoneIcon {...iconProps} />
    case '↔️':
      return <SideSpaceIcon {...iconProps} />
    case '🍺':
      return <BeerIcon {...iconProps} />
    case '🐢':
      return <SnailIcon {...iconProps} />
    case '📚':
      return <DocumentIcon {...iconProps} />
    default:
      return <AlertIcon {...iconProps} />
  }
}

function ReformAccordion({ reform }: { reform: (typeof reforms)[0] }) {
  return (
    <details
      className="rounded-xl overflow-hidden border"
      style={{ background: 'var(--bg-primary)', borderColor: 'var(--separator)' }}
    >
      <summary className="list-none cursor-pointer ios-press flex items-start gap-2.5 p-2.5 [&::-webkit-details-marker]:hidden">
        <div className="flex-shrink-0 mt-0.5">
          <ReformIconRenderer emoji={reform.emoji} size={22} />
        </div>
        <div className="flex-1 min-w-0 text-left">
          <h3
            className="font-bold text-[13px] leading-snug"
            style={{ color: 'var(--label-primary)' }}
          >
            {reform.title}
          </h3>
          <p
            className="text-[10px] mt-0.5 font-medium"
            style={{ color: 'var(--pink-primary)' }}
          >
            {reform.effectDate}
          </p>
        </div>
        <span
          className="text-[10px] shrink-0 mt-1"
          style={{ color: 'var(--label-tertiary)' }}
        >
          ▼
        </span>
      </summary>
      <div
        className="px-3 pb-2.5 pt-0 border-t"
        style={{ background: 'var(--fill-pink)', borderColor: 'var(--separator)' }}
      >
        <p
          className="text-[11px] leading-snug pt-2 mb-1.5"
          style={{ color: 'var(--label-secondary)' }}
        >
          {reform.summary}
        </p>
        <p
          className="text-[10px] leading-relaxed"
          style={{ color: 'var(--label-secondary)' }}
        >
          {reform.detail}
        </p>
      </div>
    </details>
  )
}
