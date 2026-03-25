import { useState } from 'react'
import { ruleItems, type RuleCategory, type AudienceType } from '../data/violations'

const categoryLabels: Record<RuleCategory, string> = {
  signal:    '🚦 信号・一時停止',
  smartphone:'📱 スマホ',
  alcohol:   '🍺 飲酒',
  road:      '🛣️ 道路通行',
  equipment: '🔦 装備',
  others:    '🚲 その他',
  driver:    '🚗 ドライバー向け',
}

export default function Rules() {
  const [audience, setAudience]   = useState<AudienceType>('cyclist')
  const [expandedId, setExpanded] = useState<string | null>(null)
  const [showNewOnly, setNewOnly] = useState(false)

  const filtered = ruleItems.filter(r => {
    const audOk = r.audience === audience || r.audience === 'both'
    const newOk = showNewOnly ? r.isNew : true
    return audOk && newOk
  })
  const categories = [...new Set(filtered.map(r => r.category))] as RuleCategory[]

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
        <h1 className="font-black text-[28px] text-white mb-0.5">📚 ルール一覧</h1>
        <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 14 }}>
          知らんかったじゃ済まへんルール集
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

      {/* フィルター */}
      <div className="px-4 mt-4 flex items-center gap-3 max-w-md mx-auto">
        <button
          onClick={() => setNewOnly(!showNewOnly)}
          className="ios-press flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
          style={{
            background: showNewOnly ? 'var(--ios-red)' : 'var(--bg-primary)',
            color: showNewOnly ? '#fff' : 'var(--label-secondary)',
            borderColor: showNewOnly ? 'var(--ios-red)' : 'var(--separator)',
          }}
        >
          ★ 2026年改正のみ
        </button>
        <span
          className="text-xs font-medium"
          style={{ color: 'var(--label-tertiary)' }}
        >
          {filtered.length}件
        </span>
      </div>

      {/* ルール一覧 */}
      <div className="px-4 mt-4 max-w-md mx-auto flex flex-col gap-5">
        {categories.map(cat => {
          const catItems = filtered.filter(r => r.category === cat)
          if (!catItems.length) return null
          return (
            <div key={cat}>
              <p
                className="text-[11px] font-semibold uppercase tracking-widest mb-2 px-1"
                style={{ color: 'var(--label-secondary)' }}
              >
                {categoryLabels[cat]}
              </p>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: 'var(--bg-primary)' }}
              >
                {catItems.map((rule, ii) => (
                  <div
                    key={rule.id}
                    style={{
                      borderBottom: ii < catItems.length - 1
                        ? '0.5px solid var(--separator)' : 'none',
                    }}
                  >
                    <button
                      onClick={() => setExpanded(expandedId === rule.id ? null : rule.id)}
                      className="ios-press w-full flex items-center gap-3 px-4 py-4 text-left"
                    >
                      <span className="text-2xl flex-shrink-0">{rule.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span
                            className="font-semibold text-[15px]"
                            style={{ color: 'var(--label-primary)' }}
                          >
                            {rule.title}
                          </span>
                          {rule.isNew && (
                            <span
                              className="text-[10px] font-black px-1.5 py-0.5 rounded text-white"
                              style={{ background: 'var(--ios-red)' }}
                            >
                              NEW
                            </span>
                          )}
                        </div>
                        {rule.fine && (
                          <span
                            className="text-xs font-semibold"
                            style={{ color: 'var(--ios-red)' }}
                          >
                            💰 {rule.fine}
                          </span>
                        )}
                      </div>
                      <span
                        className="flex-shrink-0 text-lg transition-transform duration-200"
                        style={{
                          color: 'var(--label-tertiary)',
                          transform: expandedId === rule.id ? 'rotate(90deg)' : 'none',
                        }}
                      >
                        ›
                      </span>
                    </button>

                    {expandedId === rule.id && (
                      <div
                        className="px-4 pb-4 animate-slide-up"
                        style={{ borderTop: '0.5px solid var(--separator)' }}
                      >
                        <p
                          className="text-sm leading-relaxed mt-3"
                          style={{ color: 'var(--label-secondary)' }}
                        >
                          {rule.description}
                        </p>
                        {rule.penalty && (
                          <p
                            className="text-xs mt-2 font-medium"
                            style={{ color: 'var(--ios-red)' }}
                          >
                            刑事罰：{rule.penalty}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <p
        className="text-center text-xs mt-6 px-4 pb-2"
        style={{ color: 'var(--label-tertiary)' }}
      >
        本情報は警察庁・警視庁の公開情報に基づきます。<br />
        詳細は各都道府県警察にご確認ください。
      </p>
    </div>
  )
}
