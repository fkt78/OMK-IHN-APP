const fineData = [
  {
    group: '🚲 自転車（青切符対象・2026年4月〜）',
    isNew: true,
    items: [
      { act: 'スマホながら運転', fine: '12,000円', criminal: '6ヶ月以下の懲役/10万円以下の罰金' },
      { act: '信号無視', fine: '6,000円', criminal: '3ヶ月以下の懲役/5万円以下の罰金' },
      { act: '一時停止無視', fine: '5,000円', criminal: '3ヶ月以下の懲役/5万円以下の罰金' },
      { act: '右側通行（逆走）', fine: '5,000円', criminal: '3ヶ月以下の懲役/5万円以下の罰金' },
      { act: '夜間無灯火', fine: '5,000円', criminal: '5万円以下の罰金' },
      { act: '傘さし運転', fine: '5,000円', criminal: '5万円以下の罰金' },
      { act: '二人乗り（補助席なし）', fine: '5,000円', criminal: '5万円以下の罰金' },
      { act: '並走（2台以上）', fine: '2,000円', criminal: '2万円以下の罰金' },
    ],
  },
  {
    group: '🍺 飲酒・重大違反（刑事罰）',
    isNew: true,
    items: [
      { act: '酒気帯び運転', fine: '—', criminal: '3年以下の懲役/50万円以下の罰金' },
      { act: '酒酔い運転', fine: '—', criminal: '5年以下の懲役/100万円以下の罰金' },
      { act: '酒類提供・自転車提供（飲酒運転幇助）', fine: '—', criminal: '2年以下の懲役/30万円以下の罰金' },
    ],
  },
  {
    group: '🚗 ドライバー（自転車関連・2026年4月〜）',
    isNew: true,
    items: [
      { act: '側方間隔不足（追い越し時）', fine: '反則金あり', criminal: '違反点数・刑事罰の可能性' },
      { act: '徐行義務違反（間隔取れない場合）', fine: '反則金あり', criminal: '違反点数' },
    ],
  },
  {
    group: '🏘️ 生活道路速度超過（2026年9月〜）',
    isNew: true,
    items: [
      { act: '生活道路30km/h超過（自動車・自転車）', fine: '速度により異なる', criminal: '速度超過反則金・刑事罰' },
    ],
  },
]

export default function Fines() {
  return (
    <div className="pb-24 min-h-screen bg-slate-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white px-4 pt-12 pb-6"
        style={{ paddingTop: 'max(48px, env(safe-area-inset-top))' }}>
        <h1 className="text-xl font-black text-center">💰 反則金・罰則一覧</h1>
        <p className="text-blue-200 text-sm text-center mt-1">これが「青切符」の現実や</p>
      </div>

      {/* 凡例 */}
      <div className="px-4 mt-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex gap-2">
          <span className="text-lg">💡</span>
          <div>
            <p className="text-yellow-800 text-xs font-bold">青切符とは？</p>
            <p className="text-yellow-700 text-xs leading-relaxed mt-0.5">
              反則金を納付すれば前科にはなりません。ただし納付しないと刑事手続きへ移行。未成年（15歳以下）は対象外。
            </p>
          </div>
        </div>
      </div>

      {/* 一覧 */}
      <div className="px-4 mt-5 flex flex-col gap-5">
        {fineData.map((group, gi) => (
          <div key={gi}>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-slate-700 text-sm font-black">{group.group}</h2>
              {group.isNew && (
                <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">NEW</span>
              )}
            </div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
              <div className="grid grid-cols-3 bg-slate-100 px-4 py-2">
                <span className="text-xs font-bold text-slate-500">行為</span>
                <span className="text-xs font-bold text-slate-500 text-center">反則金</span>
                <span className="text-xs font-bold text-slate-500 text-right">刑事罰（未納時）</span>
              </div>
              {group.items.map((item, ii) => (
                <div
                  key={ii}
                  className={`grid grid-cols-3 px-4 py-3 gap-2 items-start ${ii !== group.items.length - 1 ? 'border-b border-slate-100' : ''}`}
                >
                  <span className="text-slate-700 text-xs font-medium leading-snug">{item.act}</span>
                  <span className="text-red-600 text-xs font-black text-center">{item.fine}</span>
                  <span className="text-slate-400 text-xs text-right leading-snug">{item.criminal}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Claudeコメント */}
      <div className="px-4 mt-6">
        <div className="bg-slate-800 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm flex-shrink-0">🤖</div>
            <div>
              <p className="text-purple-300 text-xs font-bold mb-1">Claude の経営分析</p>
              <p className="text-slate-300 text-xs leading-relaxed">
                スマホながら運転1回で12,000円。月20日通勤として、毎日やれば年間240,000円のリスク。
                これを「時給換算リスク」と呼びます。哲学的に言えば——「無知は罪ではないが、知った後の無行動は罪である」。
                従業員教育への投資は、このリスクを完全にゼロにします。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        <p className="text-slate-400 text-xs text-center leading-relaxed">
          反則金額は2026年4月施行の改正道路交通法に基づきます。<br />
          詳細・最新情報は警察庁公式サイトをご確認ください。
        </p>
      </div>
    </div>
  )
}
