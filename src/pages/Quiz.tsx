import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { cyclistQuiz, driverQuiz, type QuizQuestion } from '../data/quiz'
import {
  BicycleIcon,
  CarIcon,
  TrophyIcon,
  CelebrationIcon,
  AlertIcon,
  CheckmarkIcon,
  RefreshIcon,
  ClipboardIcon,
  CoinIcon,
  XMarkIcon,
  StarIcon,
} from '../components/Icons'

type Mode = 'select' | 'playing' | 'result'

export default function Quiz() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const initialMode = searchParams.get('mode') as 'cyclist' | 'driver' | null

  const [audience, setAudience] = useState<'cyclist' | 'driver'>(initialMode || 'cyclist')
  const [mode, setMode]         = useState<Mode>(initialMode ? 'playing' : 'select')
  const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
    (initialMode === 'driver' ? [...driverQuiz] : [...cyclistQuiz])
      .sort(() => Math.random() - 0.5)
  )
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected]     = useState<number | null>(null)
  const [answered, setAnswered]     = useState(false)
  const [score, setScore]           = useState(0)
  const [shakeKey, setShakeKey]     = useState(0)
  const [showStar, setShowStar]     = useState(false)

  const shuffleFor = (a: 'cyclist' | 'driver'): QuizQuestion[] =>
    (a === 'cyclist' ? [...cyclistQuiz] : [...driverQuiz])
      .sort(() => Math.random() - 0.5)

  const startQuiz = (a: 'cyclist' | 'driver') => {
    setAudience(a)
    setQuestions(shuffleFor(a))
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
    if (idx === questions[currentIdx].correctIndex) {
      setScore(s => s + 1)
      setShowStar(true)
      setTimeout(() => setShowStar(false), 900)
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

  /* ── 選択画面 ── */
  if (mode === 'select') {
    return (
      <div className="min-h-screen pb-24" style={{ background: 'var(--bg-grouped)' }}>
        <NavHeader title="違反判定クイズ" onBack={() => navigate('/')} />
        <div className="px-4 mt-2 max-w-md mx-auto">
          <p className="text-sm text-center mb-5" style={{ color: 'var(--label-secondary)' }}>
            どちらのモードで挑戦しますか？
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                a: 'cyclist' as const,
                Icon: BicycleIcon,
                iconColor: '#E8849A',
                title: '自転車乗り編',
                sub: `あなたの通勤ルーティン、どれだけ違反してる？`,
                count: cyclistQuiz.length,
                tag: '対象：自転車通勤者・学生・主婦',
                bg: 'var(--fill-pink)', border: 'var(--pink-light)',
              },
              {
                a: 'driver' as const,
                Icon: CarIcon,
                iconColor: '#FF9500',
                title: 'ドライバー編',
                sub: '2026年4月から、ドライバーの義務も変わった。',
                count: driverQuiz.length,
                tag: '対象：社用車運転者・一般ドライバー',
                bg: '#FFF5E6', border: '#FFDDAA',
              },
            ].map(opt => (
              <button
                key={opt.a}
                onClick={() => startQuiz(opt.a)}
                className="ios-press rounded-2xl p-5 text-left"
                style={{
                  background: opt.bg,
                  border: `1.5px solid ${opt.border}`,
                }}
              >
                <div className="mb-3">
                  <opt.Icon size={48} color={opt.iconColor} />
                </div>
                <h2
                  className="font-black text-[18px] mb-1"
                  style={{ color: 'var(--label-primary)' }}
                >
                  {opt.title}
                </h2>
                <p className="text-sm mb-3" style={{ color: 'var(--label-secondary)' }}>
                  {opt.sub}{' '}
                  <span style={{ color: 'var(--ios-red)', fontWeight: 700 }}>
                    {opt.count}問
                  </span>
                  のリアルシナリオで確認。
                </p>
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(232,132,154,.15)', color: 'var(--pink-deep)' }}
                >
                  {opt.tag}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  /* ── 結果画面 ── */
  if (mode === 'result') {
    const total = questions.length
    const pct   = Math.round((score / total) * 100)

    const getResultIcon = () => {
      if (pct === 100) return <TrophyIcon size={64} color="#FF9500" />
      if (pct >= 80)   return <CelebrationIcon size={64} color="var(--pink-primary)" />
      if (pct >= 60)   return <AlertIcon size={64} color="#FF9500" />
      return <AlertIcon size={64} color="var(--ios-red)" />
    }

    const msg =
      pct === 100 ? '完璧や！青切符の心配ゼロ！' :
      pct >= 80   ? 'なかなかやるやん。あとちょっと！' :
      pct >= 60   ? '惜しい…でもまだ危ない。' :
                   '危険！今すぐルールを確認して！'

    return (
      <div
        className="min-h-screen pb-24 flex flex-col items-center justify-center px-4"
        style={{ background: 'var(--bg-grouped)' }}
      >
        <div
          className="w-full max-w-sm rounded-3xl p-7 text-center animate-pop"
          style={{ background: 'var(--bg-primary)', boxShadow: '0 8px 32px rgba(196,80,106,.18)' }}
        >
          <div className="mb-4 flex justify-center">{getResultIcon()}</div>
          <h2 className="text-2xl font-black mb-1" style={{ color: 'var(--label-primary)' }}>
            {total}問中{' '}
            <span style={{ color: 'var(--pink-primary)' }}>{score}問</span> 正解！
          </h2>
          <p className="text-sm mb-5" style={{ color: 'var(--label-secondary)' }}>
            正答率 {pct}%
          </p>

          <div
            className="rounded-2xl p-4 mb-4"
            style={{ background: 'var(--fill-pink)' }}
          >
            <p className="font-bold text-[15px]" style={{ color: 'var(--label-primary)' }}>
              {msg}
            </p>
          </div>

          {pct < 100 && (
            <div
              className="rounded-2xl p-4 mb-5 text-left"
              style={{ background: '#FFF5F5', border: '1px solid #FFDDDD' }}
            >
              <p className="flex items-center gap-1.5 font-bold text-sm mb-1" style={{ color: 'var(--ios-red)' }}>
                <AlertIcon size={14} color="var(--ios-red)" />
                Claudeより
              </p>
              <p className="text-xs leading-relaxed" style={{ color: '#C0404A' }}>
                統計的に見れば、{100 - pct}%の誤答率は改善の余地があります。
                デカルトも「我思う、ゆえに我あり」と言いましたが、あなたの場合「我知らず、ゆえに我違反す」にならないよう注意を。
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              onClick={handleRestart}
              className="ios-press w-full py-4 rounded-2xl font-black text-white"
              style={{ background: 'linear-gradient(135deg,var(--pink-primary),var(--pink-deep))' }}
            >
              <span className="flex items-center justify-center gap-2">
                もう一度挑戦
                <RefreshIcon size={18} color="#fff" />
              </span>
            </button>
            <button
              onClick={() => startQuiz(audience === 'cyclist' ? 'driver' : 'cyclist')}
              className="ios-press w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
              style={{ background: 'var(--fill-pink)', color: 'var(--pink-deep)' }}
            >
              {audience === 'cyclist'
                ? <><CarIcon size={18} color="var(--pink-deep)" /> ドライバー編に挑戦</>
                : <><BicycleIcon size={18} color="var(--pink-deep)" /> 自転車乗り編に挑戦</>}
            </button>
          </div>
        </div>
      </div>
    )
  }

  /* ── 問題画面 ── */
  if (!questions.length) return null
  const q        = questions[currentIdx]
  const progress = (currentIdx + 1) / questions.length

  return (
    <div className="min-h-screen pb-24" style={{ background: 'var(--bg-grouped)' }}>
      {/* プログレスバー付きヘッダー */}
      <div
        className="px-4 pb-4"
        style={{
          background: 'linear-gradient(160deg,#F9C8D5,#E8849A)',
          paddingTop: 'max(56px, calc(env(safe-area-inset-top) + 12px))',
        }}
      >
        <div className="flex justify-between items-center mb-2 max-w-md mx-auto">
          <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'rgba(255,255,255,.8)' }}>
            {audience === 'cyclist'
              ? <><BicycleIcon size={14} color="rgba(255,255,255,.8)" /> 自転車乗り編</>
              : <><CarIcon size={14} color="rgba(255,255,255,.8)" /> ドライバー編</>}
          </span>
          <div className="flex items-center gap-2">
            {q.isNew && (
              <span
                className="text-[10px] font-black px-2 py-0.5 rounded-full text-white"
                style={{ background: 'rgba(255,59,48,.9)' }}
              >
                NEW
              </span>
            )}
            <span className="text-xs font-bold" style={{ color: 'rgba(255,255,255,.8)' }}>
              {currentIdx + 1} / {questions.length}
            </span>
          </div>
        </div>

        {/* プログレスバー */}
        <div
          className="h-1.5 rounded-full max-w-md mx-auto overflow-hidden"
          style={{ background: 'rgba(255,255,255,.3)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress * 100}%`, background: '#fff' }}
          />
        </div>
        <div className="flex justify-end mt-1.5 max-w-md mx-auto">
          <span className="text-xs" style={{ color: 'rgba(255,255,255,.7)' }}>
            正解: {score}問
          </span>
        </div>
      </div>

      <div className="px-4 mt-4 max-w-md mx-auto">
        {/* シナリオ */}
        <div
          className="rounded-2xl p-4 mb-4 animate-slide-up"
          style={{ background: 'var(--bg-primary)' }}
        >
          <p
            className="flex items-center gap-1.5 text-[11px] font-semibold mb-2 uppercase tracking-wide"
            style={{ color: 'var(--pink-primary)' }}
          >
            <ClipboardIcon size={14} color="var(--pink-primary)" />
            シナリオ
          </p>
          <p
            className="text-sm leading-relaxed rounded-xl px-3 py-2.5"
            style={{ background: 'var(--fill-pink)', color: 'var(--label-secondary)' }}
          >
            {q.scenario}
          </p>
          <p
            className="font-black text-[17px] mt-4 leading-snug"
            style={{ color: 'var(--label-primary)' }}
          >
            {q.question}
          </p>
        </div>

        {/* 選択肢 */}
        <div
          key={shakeKey}
          className={`flex flex-col gap-2.5 ${shakeKey > 0 && answered ? 'animate-shake' : ''}`}
        >
          {q.choices.map((choice, idx) => {
            const isCorrect = idx === q.correctIndex
            const isSelected = idx === selected
            let bg = 'var(--bg-primary)'
            let border = 'rgba(232,132,154,.2)'
            let color = 'var(--label-primary)'
            const letter = ['Ａ', 'Ｂ', 'Ｃ'][idx]

            if (answered) {
              if (isCorrect) {
                bg = '#F0FFF4'; border = 'var(--ios-green)'; color = '#166534'
              } else if (isSelected) {
                bg = '#FFF5F5'; border = 'var(--ios-red)'; color = '#9F1239'
              } else {
                bg = 'var(--bg-grouped)'; border = 'transparent'
                color = 'var(--label-tertiary)'
              }
            } else if (isSelected) {
              bg = 'var(--fill-pink)'; border = 'var(--pink-primary)'
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className="ios-press w-full text-left rounded-2xl px-4 py-4 flex items-center gap-3"
                style={{
                  background: bg,
                  border: `1.5px solid ${border}`,
                  transition: 'all .15s ease',
                }}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{
                    background: answered && isCorrect ? 'var(--ios-green)'
                               : answered && isSelected && !isCorrect ? 'var(--ios-red)'
                               : 'var(--fill-pink)',
                    color: answered && (isCorrect || (isSelected && !isCorrect)) ? '#fff' : 'var(--pink-primary)',
                  }}
                >
                  {answered && isCorrect ? (
                    <CheckmarkIcon size={16} color="#fff" />
                  ) : answered && isSelected && !isCorrect ? (
                    <XMarkIcon size={16} color="#fff" />
                  ) : (
                    letter
                  )}
                </span>
                <span className="font-semibold text-[15px]" style={{ color }}>
                  {choice}
                </span>
              </button>
            )
          })}
        </div>

        {/* 解説 */}
        {answered && (
          <div className="mt-4 animate-slide-up">
            <div
              className="rounded-2xl p-4 mb-4"
              style={{
                background: selected === q.correctIndex ? '#F0FFF4' : '#FFF5F5',
                border: `1px solid ${selected === q.correctIndex ? '#BBF7D0' : '#FECDD3'}`,
              }}
            >
              <p
                className="flex items-center gap-2 font-black text-[15px] mb-2"
                style={{ color: selected === q.correctIndex ? '#166534' : '#9F1239' }}
              >
                {selected === q.correctIndex
                  ? <><CheckmarkIcon size={18} color="#166534" /> 正解！</>
                  : <><AlertIcon size={18} color="#9F1239" /> 不正解…</>}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--label-primary)' }}
              >
                {q.explanation}
              </p>
              {q.fine && (
                <span
                  className="inline-flex items-center gap-1 mt-3 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ background: 'var(--ios-red)' }}
                >
                  <CoinIcon size={12} color="#fff" />
                  反則金：{q.fine}
                </span>
              )}
            </div>

            <button
              onClick={handleNext}
              className="ios-press w-full py-4 rounded-2xl font-black text-white text-[15px]"
              style={{
                background: 'linear-gradient(135deg,var(--pink-primary),var(--pink-deep))',
                boxShadow: '0 4px 16px rgba(232,132,154,.35)',
              }}
            >
              {currentIdx < questions.length - 1 ? '次の問題 →' : '結果を見る →'}
            </button>
          </div>
        )}
      </div>

      {/* スター演出 */}
      {showStar && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="animate-bounce-in">
            <StarIcon size={96} color="var(--pink-primary)" />
          </div>
        </div>
      )}
    </div>
  )
}

/* 共通ナビヘッダー */
function NavHeader({ title, onBack }: { title: string; onBack?: () => void }) {
  return (
    <div
      className="flex items-center px-4 py-3"
      style={{
        background: 'linear-gradient(160deg,#F9C8D5,#E8849A)',
        paddingTop: 'max(56px, calc(env(safe-area-inset-top) + 12px))',
      }}
    >
      {onBack && (
        <button
          onClick={onBack}
          className="ios-press mr-3 text-white font-semibold text-sm"
        >
          ‹ 戻る
        </button>
      )}
      <h1 className="font-black text-[20px] text-white">{title}</h1>
    </div>
  )
}
