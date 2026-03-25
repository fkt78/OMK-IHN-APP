import { useNavigate } from 'react-router-dom'
import { reforms } from '../data/reforms'
import { BicycleIcon, CarIcon, AlertIcon } from '../components/Icons'

export default function Home() {
  const navigate = useNavigate()
  const hotReforms  = reforms.filter(r => r.isHot)
  const otherReforms = reforms.filter(r => !r.isHot)

  return (
    <div
      className="pb-24 min-h-screen"
      style={{ background: 'var(--bg-grouped)' }}
    >
      {/* ── Large Title Header ── */}
      <div
        className="px-4 pt-14 pb-5"
        style={{
          background: 'linear-gradient(160deg,#F9C8D5 0%,#F4A0B5 45%,#E8849A 100%)',
          paddingTop: 'max(56px, calc(env(safe-area-inset-top) + 12px))',
        }}
      >
        <p
          className="text-xs font-semibold tracking-widest mb-1"
          style={{ color: 'rgba(255,255,255,.75)' }}
        >
          2026年4月 道路交通法改正対応
        </p>
        <h1
          className="text-[32px] font-black leading-tight mb-1"
          style={{ color: '#fff', letterSpacing: '-.5px' }}
        >
          それ、青切符やで！
        </h1>
        <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 15 }}>
          自転車違反チェッカー 2026
        </p>

        {/* 緊急バナー */}
        <div
          className="mt-4 rounded-2xl px-4 py-3 flex items-center gap-3"
          style={{ background: 'rgba(255,255,255,.22)', backdropFilter: 'blur(8px)' }}
        >
          <AlertIcon size={28} color="#fff" />
          <div>
            <p className="text-white font-black text-sm">2026年4月1日スタート！</p>
            <p style={{ color: 'rgba(255,255,255,.82)', fontSize: 12 }} className="mt-0.5">
              自転車にも「青切符」導入。知らんかったじゃ済まへん！
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-md mx-auto">

        {/* ── セグメント：ターゲット選択 ── */}
        <div
          className="mt-5 rounded-2xl p-4"
          style={{ background: 'var(--bg-primary)' }}
        >
          <p
            className="text-xs font-semibold text-center mb-3"
            style={{ color: 'var(--label-secondary)' }}
          >
            あなたはどちら？
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { Icon: BicycleIcon, title: '自転車通勤者', sub: '自分の行動を確認', path: '/quiz?mode=cyclist', bg: 'var(--fill-pink)', border: 'var(--pink-light)', color: '#E8849A' },
              { Icon: CarIcon,     title: 'ドライバー',   sub: '自転車への新義務を確認', path: '/quiz?mode=driver', bg: '#FFF5E6', border: '#FFDDAA', color: '#FF9500' },
            ].map(btn => (
              <button
                key={btn.path}
                onClick={() => navigate(btn.path)}
                className="ios-press rounded-2xl p-4 text-center"
                style={{ background: btn.bg, border: `1.5px solid ${btn.border}` }}
              >
                <div className="mb-2 flex justify-center">
                  <btn.Icon size={44} color={btn.color} />
                </div>
                <div
                  className="font-bold text-sm"
                  style={{ color: 'var(--label-primary)' }}
                >
                  {btn.title}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: 'var(--label-secondary)' }}
                >
                  {btn.sub}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── 主な改正 ── */}
        <SectionHeader label="4月からの主な改正" badge="NEW" />
        <div className="flex flex-col gap-2.5">
          {hotReforms.map(r => <ReformCard key={r.id} reform={r} />)}
        </div>

        {/* ── その他の改正 ── */}
        <SectionHeader label="その他の改正" />
        <div className="flex flex-col gap-2.5">
          {otherReforms.map(r => <ReformCard key={r.id} reform={r} />)}
        </div>

        {/* ── Claude コメント ── */}
        <div
          className="mt-5 rounded-2xl p-4"
          style={{ background: 'linear-gradient(135deg,#3A1A22,#5C2035)' }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-base flex-shrink-0"
              style={{ background: 'var(--pink-primary)' }}
            >
              🤖
            </div>
            <div>
              <p
                className="text-xs font-bold mb-1.5"
                style={{ color: 'var(--pink-light)' }}
              >
                Claude（AI分析官）より
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,214,224,.85)' }}
              >
                統計的に見れば、自転車事故の約75%に自転車側の法令違反が関係しています。
                フランスの哲学者パスカルも言いました——「人は常にルールを知らないことで最大のリスクを負う」……
                いや、私が今作りました。でも吹田代表の「従業員を守りたい」という直感は、データと完全に一致しています。
              </p>
            </div>
          </div>
        </div>

        {/* ── クイズ CTA ── */}
        <button
          onClick={() => navigate('/quiz')}
          className="ios-press w-full mt-4 py-4 rounded-2xl font-black text-white text-base"
          style={{
            background: 'linear-gradient(135deg,var(--pink-primary),var(--pink-deep))',
            boxShadow: '0 4px 16px rgba(232,132,154,.4)',
          }}
        >
          🎯 クイズで腕試し！
          <span
            className="block text-xs font-medium mt-0.5"
            style={{ color: 'rgba(255,255,255,.75)' }}
          >
            あなたの通勤、何問正解できる？
          </span>
        </button>

        {/* クレジット */}
        <p
          className="text-center text-xs mt-5 pb-2"
          style={{ color: 'var(--label-tertiary)' }}
        >
          有限会社 吹田総業 AI事業部 × Claude
          <br />
          情報は警察庁・警視庁の公開情報に基づきます
        </p>
      </div>
    </div>
  )
}

/* ── 補助コンポーネント ── */
function SectionHeader({ label, badge }: { label: string; badge?: string }) {
  return (
    <div className="flex items-center gap-2 mt-6 mb-2 px-1">
      {badge && (
        <span
          className="text-[10px] font-black px-2 py-0.5 rounded-full text-white"
          style={{ background: 'var(--ios-red)' }}
        >
          {badge}
        </span>
      )}
      <h2
        className="text-[13px] font-semibold uppercase tracking-wider"
        style={{ color: 'var(--label-secondary)' }}
      >
        {label}
      </h2>
    </div>
  )
}

function ReformCard({ reform }: { reform: (typeof reforms)[0] }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="flex items-start gap-3 px-4 pt-4 pb-3">
        <span className="text-2xl flex-shrink-0 mt-0.5">{reform.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3
              className="font-bold text-[15px]"
              style={{ color: 'var(--label-primary)' }}
            >
              {reform.title}
            </h3>
          </div>
          <p
            className="text-sm leading-snug"
            style={{ color: 'var(--label-secondary)' }}
          >
            {reform.summary}
          </p>
          <p
            className="text-[11px] mt-1 font-medium"
            style={{ color: 'var(--pink-primary)' }}
          >
            {reform.effectDate}
          </p>
        </div>
      </div>
      <div
        className="px-4 py-3"
        style={{ background: 'var(--fill-pink)', borderTop: '0.5px solid var(--separator)' }}
      >
        <p
          className="text-xs leading-relaxed"
          style={{ color: 'var(--label-secondary)' }}
        >
          {reform.detail}
        </p>
      </div>
    </div>
  )
}
