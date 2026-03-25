import { useState } from 'react'
import { checkerItems, type CheckerItem, type AudienceType } from '../data/violations'

export default function Checker() {
  const [audience, setAudience] = useState<AudienceType>('cyclist')
  const [selected, setSelected] = useState<CheckerItem | null>(null)
  const [showResult, setShowResult] = useState(false)

  const items = checkerItems.filter(
    i => i.audience === audience || i.audience === 'both'
  )

  const handleSelect = (item: CheckerItem) => {
    setSelected(item)
    setShowResult(true)
  }

  const handleBack = () => {
    setShowResult(false)
    setSelected(null)
  }

  if (showResult && selected) {
    return <ResultView item={selected} onBack={handleBack} />
  }

  return (
    <div className="pb-24 min-h-screen bg-slate-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white px-4 pt-12 pb-6"
        style={{ paddingTop: 'max(48px, env(safe-area-inset-top))' }}>
        <h1 className="text-xl font-black text-center">⚡ 即時違反チェック</h1>
        <p className="text-blue-200 text-sm text-center mt-1">この行為、アウト？セーフ？一発判定！</p>

        {/* タブ切替 */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setAudience('cyclist')}
            className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
              audience === 'cyclist'
                ? 'bg-white text-blue-700 shadow'
                : 'bg-blue-700 text-blue-200'
            }`}
          >
            🚲 自転車乗り
          </button>
          <button
            onClick={() => setAudience('driver')}
            className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
              audience === 'driver'
                ? 'bg-white text-orange-700 shadow'
                : 'bg-blue-700 text-blue-200'
            }`}
          >
            🚗 ドライバー
          </button>
        </div>
      </div>

      {/* 行為リスト */}
      <div className="px-4 mt-4">
        <p className="text-slate-400 text-xs font-bold mb-3">👇 あてはまる行為をタップ</p>
        <div className="flex flex-col gap-2">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              className="bg-white rounded-xl shadow-sm p-4 text-left flex items-center gap-3 border border-slate-100 active:scale-95 transition-transform"
            >
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-slate-800 text-sm font-bold">{item.label}</p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-1">
                {item.isNew && (
                  <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">NEW</span>
                )}
                <span className="text-slate-300 text-lg">›</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function ResultView({ item, onBack }: { item: CheckerItem; onBack: () => void }) {
  const isViolation = item.result === 'violation'
  const isSafe = item.result === 'safe'
  const isConditional = item.result === 'conditional'

  const bgClass = isViolation
    ? 'from-red-700 to-red-500'
    : isSafe
    ? 'from-green-700 to-green-500'
    : 'from-amber-600 to-amber-400'

  const resultEmoji = isViolation ? '🚨' : isSafe ? '✅' : '⚠️'
  const resultText = isViolation ? '違反！' : isSafe ? 'セーフ！' : '条件次第'
  const resultSub = isViolation
    ? '青切符の対象になります'
    : isSafe
    ? 'この行為は問題ありません'
    : '状況によって変わります'

  return (
    <div className="pb-24 min-h-screen bg-slate-50">
      {/* 判定ヘッダー */}
      <div className={`bg-gradient-to-br ${bgClass} text-white px-4 pt-12 pb-8 text-center`}
        style={{ paddingTop: 'max(48px, env(safe-area-inset-top))' }}>
        <button
          onClick={onBack}
          className="absolute left-4 top-12 text-white/70 text-sm font-bold"
          style={{ top: 'max(48px, env(safe-area-inset-top))' }}
        >
          ← 戻る
        </button>
        <div className="text-6xl mb-2 animate-bounce-in">{resultEmoji}</div>
        <h1 className="text-4xl font-black mb-1">{resultText}</h1>
        <p className="text-white/80 text-sm">{resultSub}</p>
      </div>

      <div className="px-4 mt-5">
        {/* 行為 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
          <p className="text-xs text-slate-400 font-bold mb-2">確認した行為</p>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{item.emoji}</span>
            <p className="font-bold text-slate-800 text-sm">{item.label}</p>
          </div>
        </div>

        {/* 反則金（違反の場合） */}
        {isViolation && item.fineText && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-4 animate-slide-up">
            <p className="text-red-600 font-black text-xs mb-1">💰 反則金</p>
            <p className="text-red-700 text-2xl font-black">{item.fineText}</p>
            {item.penalty && (
              <p className="text-red-500 text-xs mt-1">未納の場合：{item.penalty}</p>
            )}
          </div>
        )}

        {/* 条件（条件付きの場合） */}
        {isConditional && item.condition && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4 animate-slide-up">
            <p className="text-amber-700 font-black text-xs mb-1">⚠️ 条件</p>
            <p className="text-amber-800 text-sm font-medium">{item.condition}</p>
          </div>
        )}

        {/* 解説 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 animate-slide-up">
          <p className="text-slate-500 font-bold text-xs mb-2">📖 解説</p>
          <p className="text-slate-700 text-sm leading-relaxed">{item.explanation}</p>
          {item.isNew && (
            <div className="mt-3">
              <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">
                ★ 2026年4月改正対象
              </span>
            </div>
          )}
        </div>

        {/* Claudeコメント */}
        <div className="bg-slate-800 rounded-2xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm flex-shrink-0">🤖</div>
            <div>
              <p className="text-purple-300 text-xs font-bold mb-1">Claude のひとこと</p>
              <p className="text-slate-300 text-xs leading-relaxed">
                {isViolation
                  ? `これは明確な違反です。「知らなかった」という言い訳は法律上通用しません。カントの言葉を借りれば「義務は感情ではなく理性に基づく」——つまり、ルールを知った今、変えるのは行動です。`
                  : isSafe
                  ? `この行為は適法です。ただし、適法であることと安全であることは別の話。デカルトなら言うでしょう——「我安全に走る、ゆえに我あり」と。`
                  : `グレーゾーンです。「たぶん大丈夫」は最も危険な判断。パスカルの賭けと同じく、最悪のケースに備えることが合理的選択です。`}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onBack}
          className="w-full bg-blue-700 text-white font-black py-4 rounded-xl active:scale-95 transition-transform"
        >
          ← 別の行為を確認する
        </button>
      </div>
    </div>
  )
}
