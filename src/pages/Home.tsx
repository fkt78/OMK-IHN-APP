import { useNavigate } from 'react-router-dom'
import { reforms } from '../data/reforms'

export default function Home() {
  const navigate = useNavigate()

  const hotReforms = reforms.filter(r => r.isHot)
  const otherReforms = reforms.filter(r => !r.isHot)

  return (
    <div className="pb-24 bg-slate-50 min-h-screen">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white px-4 pt-10 pb-8"
        style={{ paddingTop: 'max(40px, env(safe-area-inset-top))' }}>
        <div className="text-center">
          <p className="text-blue-200 text-xs font-bold tracking-widest mb-1">2026年4月 道路交通法改正対応</p>
          <h1 className="text-2xl font-black mb-1">それ、青切符やで！</h1>
          <p className="text-blue-100 text-sm">自転車違反チェッカー2026</p>
        </div>

        {/* 緊急バナー */}
        <div className="mt-5 bg-red-600 rounded-xl p-3 flex items-center gap-3">
          <span className="text-2xl flex-shrink-0">🚨</span>
          <div>
            <p className="font-black text-sm">2026年4月1日スタート！</p>
            <p className="text-xs text-red-100 mt-0.5">
              自転車にも「青切符」が導入。知らんかったじゃ済まへん！
            </p>
          </div>
        </div>
      </div>

      {/* ターゲット選択 */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <p className="text-slate-500 text-xs font-bold mb-3 text-center">あなたはどちら？</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/quiz?mode=cyclist')}
              className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-center active:scale-95 transition-transform"
            >
              <div className="text-3xl mb-1">🚲</div>
              <div className="font-bold text-blue-800 text-sm">自転車通勤者</div>
              <div className="text-xs text-blue-500 mt-1">自分の行動を確認</div>
            </button>
            <button
              onClick={() => navigate('/quiz?mode=driver')}
              className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 text-center active:scale-95 transition-transform"
            >
              <div className="text-3xl mb-1">🚗</div>
              <div className="font-bold text-orange-800 text-sm">ドライバー</div>
              <div className="text-xs text-orange-500 mt-1">自転車への新義務を確認</div>
            </button>
          </div>
        </div>
      </div>

      {/* 改正ポイント（ホット） */}
      <div className="px-4 mt-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">NEW</span>
          <h2 className="font-black text-slate-800 text-base">4月からの主な改正</h2>
        </div>
        <div className="flex flex-col gap-3">
          {hotReforms.map(reform => (
            <ReformCard key={reform.id} reform={reform} hot />
          ))}
        </div>
      </div>

      {/* その他の改正 */}
      <div className="px-4 mt-5">
        <h2 className="font-black text-slate-700 text-base mb-3">その他の改正</h2>
        <div className="flex flex-col gap-3">
          {otherReforms.map(reform => (
            <ReformCard key={reform.id} reform={reform} />
          ))}
        </div>
      </div>

      {/* Claudeコメント */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-4 text-white">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-lg flex-shrink-0">
              🤖
            </div>
            <div>
              <p className="text-xs text-purple-300 font-bold mb-1">Claude（AI分析官）より</p>
              <p className="text-sm text-slate-200 leading-relaxed">
                統計的に見れば、自転車事故の約75%に自転車側の法令違反が関係しています。
                フランスの哲学者パスカルも言いました——「人は常にルールを知らないことで最大のリスクを負う」……
                いや、私が今作りました。でも吹田代表の「従業員を守りたい」という直感は、データと一致しています。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* クイズCTA */}
      <div className="px-4 mt-5">
        <button
          onClick={() => navigate('/quiz')}
          className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white font-black py-4 rounded-2xl text-center shadow-lg active:scale-95 transition-transform"
        >
          <div className="text-lg">🎯 クイズで腕試し！</div>
          <div className="text-xs text-blue-200 mt-0.5">あなたの通勤、何問正解できる？</div>
        </button>
      </div>

      {/* 制作クレジット */}
      <div className="px-4 mt-6 pb-4 text-center">
        <p className="text-slate-400 text-xs">
          有限会社 吹田総業 AI事業部 × Claude<br />
          情報は警察庁・警視庁の公開情報に基づきます
        </p>
      </div>
    </div>
  )
}

function ReformCard({ reform, hot }: { reform: (typeof reforms)[0]; hot?: boolean }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden border ${hot ? 'border-red-100' : 'border-slate-100'}`}>
      <div className={`flex items-start gap-3 p-4`}>
        <span className="text-2xl flex-shrink-0">{reform.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-black text-slate-800 text-sm">{reform.title}</h3>
            <span className="text-xs text-slate-400 whitespace-nowrap">{reform.effectDate}</span>
          </div>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">{reform.summary}</p>
        </div>
      </div>
      <div className="bg-slate-50 px-4 py-3 border-t border-slate-100">
        <p className="text-xs text-slate-500 leading-relaxed">{reform.detail}</p>
      </div>
    </div>
  )
}
