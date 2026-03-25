import { useState } from 'react'
import { checkerItems, type CheckerItem, type AudienceType } from '../data/violations'

export default function Checker() {
  const [audience, setAudience] = useState<AudienceType>('cyclist')
  const [selected, setSelected] = useState<CheckerItem | null>(null)

  const items = checkerItems.filter(i => i.audience === audience || i.audience === 'both')

  if (selected) return <ResultView item={selected} onBack={() => setSelected(null)} />

  return (
    <div className="min-h-screen pb-24" style={{ background: 'var(--bg-grouped)' }}>
      {/* ヘッダー */}
      <div
        className="px-4 pb-4"
        style={{
          background: 'linear-gradient(160deg,#F9C8D5,#E8849A)',
          paddingTop: 'max(56px, calc(env(safe-area-inset-top) + 12px))',
        }}
      >
        <h1 className="font-black text-[28px] text-white mb-0.5">⚡ 即時チェック</h1>
        <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 14 }}>
          この行為、アウト？セーフ？一発判定！
        </p>

        {/* セグメントコントロール */}
        <div
          className="flex gap-1 mt-4 rounded-xl p-1"
          style={{ background: 'rgba(255,255,255,.2)' }}
        >
          {[
            { key: 'cyclist' as AudienceType, label: '🚲 自転車乗り' },
            { key: 'driver'  as AudienceType, label: '🚗 ドライバー' },
          ].map(opt => (
            <button
              key={opt.key}
              onClick={() => setAudience(opt.key)}
              className="ios-press flex-1 py-2 rounded-lg text-sm font-bold transition-all"
              style={{
                background: audience === opt.key ? '#fff' : 'transparent',
                color: audience === opt.key ? 'var(--pink-deep)' : 'rgba(255,255,255,.85)',
                boxShadow: audience === opt.key ? '0 1px 4px rgba(0,0,0,.12)' : 'none',
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* リスト */}
      <div className="px-4 mt-4 max-w-md mx-auto">
        <p
          className="text-[11px] font-semibold uppercase tracking-widest mb-2 px-1"
          style={{ color: 'var(--label-secondary)' }}
        >
          👇 あてはまる行為をタップ
        </p>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: 'var(--bg-primary)' }}
        >
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="ios-press w-full flex items-center gap-3 px-4 py-4 text-left"
              style={{
                borderBottom: idx < items.length - 1
                  ? '0.5px solid var(--separator)' : 'none',
              }}
            >
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <span
                className="flex-1 text-[15px] font-medium"
                style={{ color: 'var(--label-primary)' }}
              >
                {item.label}
              </span>
              <div className="flex items-center gap-2 flex-shrink-0">
                {item.isNew && (
                  <span
                    className="text-[10px] font-black px-1.5 py-0.5 rounded text-white"
                    style={{ background: 'var(--ios-red)' }}
                  >
                    NEW
                  </span>
                )}
                <ResultDot result={item.result} />
                <span style={{ color: 'var(--label-tertiary)', fontSize: 18 }}>›</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── 判定ドット ── */
function ResultDot({ result }: { result: CheckerItem['result'] }) {
  const color = result === 'violation' ? 'var(--ios-red)'
               : result === 'safe'     ? 'var(--ios-green)'
               :                        'var(--ios-orange)'
  return (
    <span
      className="w-2 h-2 rounded-full flex-shrink-0"
      style={{ background: color }}
    />
  )
}

/* ── 判定結果 ── */
function ResultView({ item, onBack }: { item: CheckerItem; onBack: () => void }) {
  const isViolation   = item.result === 'violation'
  const isSafe        = item.result === 'safe'

  const gradients = {
    violation:   'linear-gradient(160deg,#FF6B6B,#FF3B30)',
    safe:        'linear-gradient(160deg,#6BCB77,#34C759)',
    conditional: 'linear-gradient(160deg,#FFB347,#FF9500)',
  }
  const gradient = gradients[item.result]
  const resultEmoji = isViolation ? '🚨' : isSafe ? '✅' : '⚠️'
  const resultText  = isViolation ? '違反！' : isSafe ? 'セーフ！' : '条件次第'

  return (
    <div className="min-h-screen pb-24" style={{ background: 'var(--bg-grouped)' }}>
      {/* ヘッダー */}
      <div
        className="px-4 pb-8 text-center relative"
        style={{
          background: gradient,
          paddingTop: 'max(56px, calc(env(safe-area-inset-top) + 12px))',
        }}
      >
        <button
          onClick={onBack}
          className="ios-press absolute left-4 top-14 text-white font-semibold text-sm"
          style={{ top: 'max(56px, calc(env(safe-area-inset-top) + 12px))' }}
        >
          ‹ 戻る
        </button>
        <div className="text-6xl mb-3 animate-bounce-in">{resultEmoji}</div>
        <h1 className="text-4xl font-black text-white mb-1">{resultText}</h1>
        <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 14 }}>
          {isViolation ? '青切符の対象になります' : isSafe ? 'この行為は問題ありません' : '状況によって変わります'}
        </p>
      </div>

      <div className="px-4 mt-5 max-w-md mx-auto">
        {/* 確認した行為 */}
        <div
          className="rounded-2xl p-4 mb-3"
          style={{ background: 'var(--bg-primary)' }}
        >
          <p
            className="text-[11px] font-semibold mb-2 uppercase tracking-wide"
            style={{ color: 'var(--label-secondary)' }}
          >
            確認した行為
          </p>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{item.emoji}</span>
            <p
              className="font-semibold text-[15px]"
              style={{ color: 'var(--label-primary)' }}
            >
              {item.label}
            </p>
          </div>
        </div>

        {/* 反則金 */}
        {isViolation && item.fineText && (
          <div
            className="rounded-2xl p-4 mb-3 animate-slide-up"
            style={{ background: '#FFF5F5', border: '1px solid #FECDD3' }}
          >
            <p
              className="text-[11px] font-semibold mb-1"
              style={{ color: 'var(--ios-red)' }}
            >
              💰 反則金
            </p>
            <p
              className="text-3xl font-black"
              style={{ color: 'var(--ios-red)' }}
            >
              {item.fineText}
            </p>
            {item.penalty && (
              <p className="text-xs mt-1" style={{ color: '#E05060' }}>
                未納の場合：{item.penalty}
              </p>
            )}
          </div>
        )}

        {/* 条件 */}
        {item.result === 'conditional' && item.condition && (
          <div
            className="rounded-2xl p-4 mb-3 animate-slide-up"
            style={{ background: '#FFFBF0', border: '1px solid #FFE4A0' }}
          >
            <p
              className="text-[11px] font-semibold mb-1"
              style={{ color: 'var(--ios-orange)' }}
            >
              ⚠️ 条件
            </p>
            <p
              className="text-sm font-medium"
              style={{ color: '#92400E' }}
            >
              {item.condition}
            </p>
          </div>
        )}

        {/* 解説 */}
        <div
          className="rounded-2xl p-4 mb-3 animate-slide-up"
          style={{ background: 'var(--bg-primary)' }}
        >
          <p
            className="text-[11px] font-semibold mb-2 uppercase tracking-wide"
            style={{ color: 'var(--label-secondary)' }}
          >
            📖 解説
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--label-primary)' }}
          >
            {item.explanation}
          </p>
          {item.isNew && (
            <span
              className="inline-block mt-3 text-[10px] font-black px-2 py-1 rounded-full text-white"
              style={{ background: 'var(--ios-red)' }}
            >
              ★ 2026年4月改正対象
            </span>
          )}
        </div>

        {/* Claude コメント */}
        <div
          className="rounded-2xl p-4 mb-4"
          style={{ background: 'linear-gradient(135deg,#3A1A22,#5C2035)' }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
              style={{ background: 'var(--pink-primary)' }}
            >
              🤖
            </div>
            <div>
              <p
                className="text-[11px] font-bold mb-1"
                style={{ color: 'var(--pink-light)' }}
              >
                Claude のひとこと
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'rgba(255,214,224,.85)' }}
              >
                {isViolation
                  ? 'これは明確な違反です。「知らなかった」という言い訳は法律上通用しません。カントの言葉を借りれば「義務は感情ではなく理性に基づく」——ルールを知った今、変えるのは行動です。'
                  : isSafe
                  ? 'この行為は適法です。ただし適法であることと安全であることは別の話。デカルトなら言うでしょう——「我安全に走る、ゆえに我あり」と。'
                  : 'グレーゾーンです。「たぶん大丈夫」は最も危険な判断。パスカルの賭けと同じく、最悪のケースに備えることが合理的選択です。'}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onBack}
          className="ios-press w-full py-4 rounded-2xl font-black text-white text-[15px]"
          style={{
            background: 'linear-gradient(135deg,var(--pink-primary),var(--pink-deep))',
            boxShadow: '0 4px 16px rgba(232,132,154,.35)',
          }}
        >
          ← 別の行為を確認する
        </button>
      </div>
    </div>
  )
}
