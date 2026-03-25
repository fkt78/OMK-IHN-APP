import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { cyclistQuiz, driverQuiz, type QuizQuestion } from '../data/quiz'

type Mode = 'select' | 'playing' | 'result'

export default function Quiz() {
  const [searchParams] = useSearchParams()
  const initialMode = searchParams.get('mode') as 'cyclist' | 'driver' | null

  const [audience, setAudience] = useState<'cyclist' | 'driver'>(initialMode || 'cyclist')
  const [mode, setMode] = useState<Mode>(initialMode ? 'playing' : 'select')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [shakeKey, setShakeKey] = useState(0)
  const [showPop, setShowPop] = useState(false)

  useEffect(() => {
    const q = audience === 'cyclist' ? [...cyclistQuiz] : [...driverQuiz]
    setQuestions(q.sort(() => Math.random() - 0.5))
  }, [audience])

  const startQuiz = (a: 'cyclist' | 'driver') => {
    setAudience(a)
    setMode('playing')
    setCurrentIdx(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
  }

  const handleSelect = (idx: number) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    const q = questions[currentIdx]
    if (idx === q.correctIndex) {
      setScore(s => s + 1)
      setShowPop(true)
      setTimeout(() => setShowPop(false), 800)
    } else {
      setShakeKey(k => k + 1)
    }
  }

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(i => i + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setMode('result')
    }
  }

  const handleRestart = () => {
    setMode('select')
    setCurrentIdx(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
  }

  if (mode === 'select') {
    return (
      <div className="pb-24 min-h-screen bg-slate-50">
        <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white px-4 pt-12 pb-8"
          style={{ paddingTop: 'max(48px, env(safe-area-inset-top))' }}>
          <h1 className="text-xl font-black text-center">🎯 違反判定クイズ</h1>
          <p className="text-blue-200 text-sm text-center mt-1">あなたの常識、令和8年版でアップデート</p>
        </div>

        <div className="px-4 mt-6">
          <p className="text-slate-600 text-sm text-center mb-5 font-medium">どちらのモードで挑戦しますか？</p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => startQuiz('cyclist')}
              className="bg-white rounded-2xl shadow-sm p-6 text-left border-2 border-blue-100 active:scale-95 transition-transform"
            >
              <div className="text-4xl mb-3">🚲</div>
              <h2 className="font-black text-blue-800 text-lg">自転車乗り編</h2>
              <p className="text-slate-500 text-sm mt-1">
                あなたの通勤ルーティン、どれだけ違反してる？<br />
                <span className="text-red-500 font-bold">{cyclistQuiz.length}問</span>のリアルシナリオで確認。
              </p>
              <div className="mt-3 inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                対象：自転車通勤者・学生・主婦
              </div>
            </button>

            <button
              onClick={() => startQuiz('driver')}
              className="bg-white rounded-2xl shadow-sm p-6 text-left border-2 border-orange-100 active:scale-95 transition-transform"
            >
              <div className="text-4xl mb-3">🚗</div>
              <h2 className="font-black text-orange-800 text-lg">ドライバー編</h2>
              <p className="text-slate-500 text-sm mt-1">
                2026年4月から、ドライバーの義務も変わった。<br />
                <span className="text-red-500 font-bold">{driverQuiz.length}問</span>の新ルール確認テスト。
              </p>
              <div className="mt-3 inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                対象：社用車運転者・一般ドライバー
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (mode === 'result') {
    const total = questions.length
    const pct = Math.round((score / total) * 100)
    const getEmoji = () => {
      if (pct === 100) return '🏆'
      if (pct >= 80) return '🎉'
      if (pct >= 60) return '😅'
      return '🚨'
    }
    const getMessage = () => {
      if (pct === 100) return '完璧や！青切符の心配ゼロ！'
      if (pct >= 80) return 'なかなかやるやん。あとちょっと！'
      if (pct >= 60) return '惜しい…でもまだ危ない。'
      return '危険！今すぐルールを確認して！'
    }

    return (
      <div className="pb-24 min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full text-center animate-pop-in">
          <div className="text-6xl mb-4">{getEmoji()}</div>
          <h2 className="text-2xl font-black text-slate-800 mb-1">
            {total}問中 <span className="text-blue-600">{score}問</span> 正解！
          </h2>
          <p className="text-slate-500 text-sm mb-4">正答率 {pct}%</p>

          <div className="bg-slate-100 rounded-2xl p-4 mb-5">
            <p className="font-bold text-slate-700">{getMessage()}</p>
          </div>

          {pct < 100 && (
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-5 text-left">
              <p className="text-red-700 text-sm font-bold mb-1">⚠️ Claudeからのコメント</p>
              <p className="text-red-600 text-xs leading-relaxed">
                統計的に見れば、{100 - pct}%の誤答率は改善の余地があります。
                デカルトも「我思う、ゆえに我あり」と言いましたが、
                あなたの場合「我知らず、ゆえに我違反す」にならないよう注意を。
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              onClick={handleRestart}
              className="w-full bg-blue-700 text-white font-black py-4 rounded-xl active:scale-95 transition-transform"
            >
              もう一度挑戦 🔄
            </button>
            <button
              onClick={() => startQuiz(audience === 'cyclist' ? 'driver' : 'cyclist')}
              className="w-full bg-slate-100 text-slate-700 font-bold py-4 rounded-xl active:scale-95 transition-transform"
            >
              {audience === 'cyclist' ? '🚗 ドライバー編に挑戦' : '🚲 自転車乗り編に挑戦'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!questions.length) return null
  const q = questions[currentIdx]
  const progress = ((currentIdx + 1) / questions.length) * 100

  return (
    <div className="pb-24 min-h-screen bg-slate-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white px-4 pt-12 pb-6"
        style={{ paddingTop: 'max(48px, env(safe-area-inset-top))' }}>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-blue-200">
            {audience === 'cyclist' ? '🚲 自転車乗り編' : '🚗 ドライバー編'}
          </span>
          <span className="text-xs text-blue-200 font-bold">
            {currentIdx + 1} / {questions.length}問
          </span>
        </div>
        <div className="h-2 bg-blue-900 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-300 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-blue-300">正解: {score}問</span>
          {q.isNew && (
            <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">NEW 2026年改正</span>
          )}
        </div>
      </div>

      {/* 問題 */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-4 animate-slide-up">
          <p className="text-xs text-slate-400 font-bold mb-2">📋 シナリオ</p>
          <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 rounded-xl p-3">{q.scenario}</p>
          <p className="font-black text-slate-800 text-base mt-4">{q.question}</p>
        </div>

        {/* 選択肢 */}
        <div
          key={shakeKey}
          className={`flex flex-col gap-3 ${shakeKey > 0 && answered ? 'animate-shake' : ''}`}
        >
          {q.choices.map((choice, idx) => {
            let style = 'bg-white border-2 border-slate-200 text-slate-700'
            if (answered) {
              if (idx === q.correctIndex) {
                style = 'bg-green-50 border-2 border-green-500 text-green-800'
              } else if (idx === selected && idx !== q.correctIndex) {
                style = 'bg-red-50 border-2 border-red-400 text-red-700'
              } else {
                style = 'bg-white border-2 border-slate-100 text-slate-400'
              }
            } else if (selected === idx) {
              style = 'bg-blue-50 border-2 border-blue-400 text-blue-800'
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left rounded-xl p-4 font-bold text-sm transition-all active:scale-95 ${style}`}
              >
                <span className="mr-2 text-base">
                  {answered
                    ? idx === q.correctIndex
                      ? '✅'
                      : idx === selected
                      ? '❌'
                      : '　'
                    : ['🅐', '🅑', '🅒'][idx]}
                </span>
                {choice}
              </button>
            )
          })}
        </div>

        {/* 解説 */}
        {answered && (
          <div className="mt-4 animate-slide-up">
            <div className={`rounded-2xl p-4 ${selected === q.correctIndex ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <p className={`font-black text-sm mb-2 ${selected === q.correctIndex ? 'text-green-700' : 'text-red-700'}`}>
                {selected === q.correctIndex ? '🎉 正解！' : '💦 不正解…'}
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">{q.explanation}</p>
              {q.fine && (
                <div className="mt-3 inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                  💰 反則金: {q.fine}
                </div>
              )}
            </div>

            <button
              onClick={handleNext}
              className="w-full mt-4 bg-blue-700 text-white font-black py-4 rounded-xl active:scale-95 transition-transform"
            >
              {currentIdx < questions.length - 1 ? '次の問題 →' : '結果を見る 🏁'}
            </button>
          </div>
        )}
      </div>

      {/* ポップエフェクト */}
      {showPop && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="text-8xl animate-bounce-in">⭐</div>
        </div>
      )}
    </div>
  )
}
