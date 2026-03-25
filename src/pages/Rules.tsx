import { useState } from 'react'
import { ruleItems, type RuleCategory, type AudienceType } from '../data/violations'

const categoryLabels: Record<RuleCategory, string> = {
  signal: '🚦 信号・一時停止',
  smartphone: '📱 スマホ',
  alcohol: '🍺 飲酒',
  road: '🛣️ 道路通行',
  equipment: '🔦 装備',
  others: '🚲 その他',
  driver: '🚗 ドライバー向け',
}

export default function Rules() {
  const [audience, setAudience] = useState<AudienceType>('cyclist')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [showNewOnly, setShowNewOnly] = useState(false)

  const filtered = ruleItems.filter(r => {
    const audienceOk = r.audience === audience || r.audience === 'both'
    const newOk = showNewOnly ? r.isNew : true
    return audienceOk && newOk
  })

  const categories = [...new Set(filtered.map(r => r.category))] as RuleCategory[]

  return (
    <div className="pb-24 min-h-screen bg-slate-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white px-4 pt-12 pb-6"
        style={{ paddingTop: 'max(48px, env(safe-area-inset-top))' }}>
        <h1 className="text-xl font-black text-center">📚 ルール一覧</h1>
        <p className="text-blue-200 text-sm text-center mt-1">知らんかったじゃ済まへんルール集</p>

        {/* タブ切替 */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setAudience('cyclist')}
            className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
              audience === 'cyclist' ? 'bg-white text-blue-700 shadow' : 'bg-blue-700 text-blue-200'
            }`}
          >
            🚲 自転車乗り
          </button>
          <button
            onClick={() => setAudience('driver')}
            className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
              audience === 'driver' ? 'bg-white text-orange-700 shadow' : 'bg-blue-700 text-blue-200'
            }`}
          >
            🚗 ドライバー
          </button>
        </div>
      </div>

      {/* フィルター */}
      <div className="px-4 mt-4 flex items-center gap-3">
        <button
          onClick={() => setShowNewOnly(!showNewOnly)}
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold border-2 transition-all ${
            showNewOnly
              ? 'bg-red-500 text-white border-red-500'
              : 'bg-white text-slate-500 border-slate-200'
          }`}
        >
          <span>★ 2026年改正のみ</span>
        </button>
        <span className="text-slate-400 text-xs">{filtered.length}件</span>
      </div>

      {/* ルール一覧 */}
      <div className="px-4 mt-4 flex flex-col gap-6">
        {categories.map(cat => {
          const catItems = filtered.filter(r => r.category === cat)
          if (!catItems.length) return null
          return (
            <div key={cat}>
              <h2 className="text-slate-500 text-xs font-black mb-2 tracking-wider">
                {categoryLabels[cat]}
              </h2>
              <div className="flex flex-col gap-2">
                {catItems.map(rule => (
                  <div
                    key={rule.id}
                    className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedId(expandedId === rule.id ? null : rule.id)}
                      className="w-full p-4 text-left flex items-center gap-3"
                    >
                      <span className="text-2xl flex-shrink-0">{rule.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-slate-800 text-sm">{rule.title}</span>
                          {rule.isNew && (
                            <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">NEW</span>
                          )}
                        </div>
                        {rule.fine && (
                          <span className="text-xs text-red-500 font-bold">💰 {rule.fine}</span>
                        )}
                      </div>
                      <span className="text-slate-300 text-lg flex-shrink-0 transition-transform"
                        style={{ transform: expandedId === rule.id ? 'rotate(90deg)' : 'none' }}>
                        ›
                      </span>
                    </button>

                    {expandedId === rule.id && (
                      <div className="px-4 pb-4 animate-slide-up">
                        <div className="border-t border-slate-100 pt-3">
                          <p className="text-slate-600 text-sm leading-relaxed">{rule.description}</p>
                          {rule.penalty && (
                            <p className="text-red-500 text-xs mt-2 font-medium">
                              刑事罰：{rule.penalty}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* 免責 */}
      <div className="px-4 mt-6">
        <p className="text-slate-400 text-xs text-center leading-relaxed">
          本情報は警察庁・警視庁の公開情報に基づきます。<br />
          詳細は各都道府県警察にご確認ください。
        </p>
      </div>
    </div>
  )
}
