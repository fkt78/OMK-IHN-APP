import { useState, useEffect } from 'react'
import { checkerItems, type CheckerItem, type AudienceType } from '../data/violations'
import {
  CheckmarkIcon,
  AlertIcon,
  SmartphoneIcon,
  StopSignIcon,
  TrafficLightIcon,
  ProhibitIcon,
  ArrowLeftIcon,
  MoonIcon,
  UmbrellaIcon,
  HeadphoneIcon,
  PeopleIcon,
  CoupleIcon,
  BeerIcon,
  RefreshIcon,
  BasketIcon,
  CarIcon,
  SnailIcon,
  HouseIcon,
  FlashlightIcon,
  PersonWalkIcon,
  LightningIcon,
  BicycleIcon,
  CoinIcon,
  ClockIcon,
  BookOpenIcon,
  BotIcon,
  StarIcon,
} from '../components/Icons'

const HOURLY_RATE_STORAGE_KEY = 'checker-hourly-rate'

export default function Checker() {
  const [audience, setAudience] = useState<AudienceType>('cyclist')
  const [selected, setSelected] = useState<CheckerItem | null>(null)
  const [hourlyRate, setHourlyRate] = useState<string>(() => {
    try {
      return localStorage.getItem(HOURLY_RATE_STORAGE_KEY) ?? ''
    } catch {
      return ''
    }
  })

  useEffect(() => {
    try {
      if (hourlyRate.trim()) {
        localStorage.setItem(HOURLY_RATE_STORAGE_KEY, hourlyRate.trim())
      } else {
        localStorage.removeItem(HOURLY_RATE_STORAGE_KEY)
      }
    } catch {
      /* ignore */
    }
  }, [hourlyRate])

  const items = checkerItems.filter(i => i.audience === audience || i.audience === 'both')

  if (selected) {
    return (
      <ResultView
        item={selected}
        hourlyRate={hourlyRate}
        onBack={() => setSelected(null)}
      />
    )
  }

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
        <div className="flex items-center gap-2 mb-0.5">
          <LightningIcon size={28} color="#fff" />
          <h1 className="font-black text-[28px] text-white">即時チェック</h1>
        </div>
        <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 14 }}>
          この行為、アウト？セーフ？一発判定！
        </p>

        {/* セグメントコントロール */}
        <div
          className="flex gap-1 mt-4 rounded-xl p-1"
          style={{ background: 'rgba(255,255,255,.2)' }}
        >
          {[
            { key: 'cyclist' as AudienceType, label: '自転車乗り', Icon: BicycleIcon },
            { key: 'driver'  as AudienceType, label: 'ドライバー',  Icon: CarIcon },
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
              <span className="flex items-center justify-center gap-1.5">
                <opt.Icon
                  size={16}
                  color={audience === opt.key ? 'var(--pink-deep)' : 'rgba(255,255,255,.85)'}
                />
                {opt.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 想定時給（結果画面の労働コスト換算に使用） */}
      <div className="px-4 mt-4 max-w-md mx-auto">
        <div
          className="rounded-2xl p-4 mb-4"
          style={{ background: 'var(--bg-primary)', border: '1px solid var(--separator)' }}
        >
          <p
            className="flex items-center gap-1.5 text-[11px] font-semibold mb-2"
            style={{ color: 'var(--label-secondary)' }}
          >
            <ClockIcon size={14} color="var(--pink-primary)" />
            想定時給（労働コスト換算用）
          </p>
          <div className="flex items-center gap-2">
            <input
              type="number"
              inputMode="numeric"
              min={0}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              placeholder="例: 1200"
              className="flex-1 px-3 py-2.5 rounded-xl text-[15px] font-medium"
              style={{
                border: '1.5px solid var(--separator)',
                background: 'var(--fill-pink)',
                color: 'var(--label-primary)',
              }}
            />
            <span className="text-sm font-medium shrink-0" style={{ color: 'var(--label-secondary)' }}>
              円／時間
            </span>
          </div>
          <p className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--label-tertiary)' }}>
            違反と反則金が出たとき、この時給で「何時間分の労働に相当するか」を結果画面に表示します。
          </p>
        </div>
      </div>

      {/* リスト */}
      <div className="px-4 mt-0 max-w-md mx-auto">
        <p
          className="text-[11px] font-semibold uppercase tracking-widest mb-2 px-1"
          style={{ color: 'var(--label-secondary)' }}
        >
          あてはまる行為をタップ
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
              <div className="text-2xl flex-shrink-0">
                <EmojiIconRenderer emoji={item.emoji} />
              </div>
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
  if (result === 'violation') {
    return <AlertIcon size={16} color="var(--ios-red)" />
  } else if (result === 'safe') {
    return <CheckmarkIcon size={16} color="var(--ios-green)" />
  } else {
    return <AlertIcon size={16} color="var(--ios-orange)" />
  }
}

/* ── 判定結果 ── */
function ResultView({
  item,
  hourlyRate,
  onBack,
}: {
  item: CheckerItem
  hourlyRate: string
  onBack: () => void
}) {
  const isViolation = item.result === 'violation'
  const isSafe = item.result === 'safe'

  const extractAmount = (fineText: string): number | null => {
    const match = fineText.match(/(\d+,?\d*)/)
    if (!match) return null
    return parseInt(match[1].replace(/,/g, ''), 10)
  }

  const rateNum = parseInt(hourlyRate.trim(), 10)
  const hasValidRate = !Number.isNaN(rateNum) && rateNum > 0

  const calculateLaborHours = (): number | null => {
    if (!hasValidRate || !item.fineText) return null
    const amount = extractAmount(item.fineText)
    if (!amount) return null
    return Math.ceil(amount / rateNum)
  }

  const opportunities = [
    { name: '牛丼', price: 450, unit: '杯' },
    { name: 'Netflix', price: 1500, unit: 'ヶ月' },
    { name: 'コーヒー', price: 150, unit: '杯' },
    { name: 'プレミアム映画', price: 2000, unit: '本' },
  ]

  const calculateCostBreakdown = () => {
    const hours = calculateLaborHours()
    if (!hours) return null
    const totalCost = hours * rateNum

    return opportunities.map(opp => ({
      ...opp,
      count: (totalCost / opp.price).toFixed(1),
    }))
  }

  const laborHours = calculateLaborHours()
  const costRows = calculateCostBreakdown()
  const showLaborCost = isViolation && item.fineText && hasValidRate && laborHours != null && costRows

  const gradients = {
    violation:   'linear-gradient(160deg,#FF6B6B,#FF3B30)',
    safe:        'linear-gradient(160deg,#6BCB77,#34C759)',
    conditional: 'linear-gradient(160deg,#FFB347,#FF9500)',
  }
  const gradient = gradients[item.result]
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
          className="ios-press absolute left-4 text-white font-semibold text-sm"
          style={{ top: 'max(56px, calc(env(safe-area-inset-top) + 12px))' }}
        >
          ‹ 戻る
        </button>
        <div className="mb-3 animate-bounce-in flex justify-center">
          {isViolation && <AlertIcon size={64} color="#fff" />}
          {isSafe && <CheckmarkIcon size={64} color="#fff" />}
          {!isViolation && !isSafe && <AlertIcon size={64} color="#fff" />}
        </div>
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
            <div className="flex-shrink-0">
              <EmojiIconRenderer emoji={item.emoji} size={32} />
            </div>
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
              className="flex items-center gap-1.5 text-[11px] font-semibold mb-1"
              style={{ color: 'var(--ios-red)' }}
            >
              <CoinIcon size={14} color="var(--ios-red)" />
              反則金
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

        {/* 時間コスト（一覧で入力した想定時給で表示） */}
        {isViolation && item.fineText && (
          <div
            className="rounded-2xl p-4 mb-3 animate-slide-up"
            style={{ background: '#FFF5F5', border: '1px solid #FECDD3' }}
          >
            <p
              className="flex items-center gap-1.5 text-[11px] font-semibold mb-3"
              style={{ color: 'var(--ios-red)' }}
            >
              <ClockIcon size={14} color="var(--ios-red)" />
              あなたの労働時間コスト
            </p>

            {showLaborCost ? (
              <div>
                <p className="text-xs mb-2" style={{ color: 'var(--label-secondary)' }}>
                  想定時給 {rateNum.toLocaleString()}円／時間（一覧画面で変更できます）
                </p>
                <div className="mb-4 p-3 rounded-lg" style={{ background: 'rgba(255,59,48,.05)' }}>
                  <p style={{ color: 'var(--label-secondary)', fontSize: '12px', marginBottom: '8px' }}>
                    → 結果：
                  </p>
                  <p
                    className="text-4xl font-black leading-tight"
                    style={{ color: 'var(--ios-red)' }}
                  >
                    あなたがこの違反で<br />失うのは『{laborHours}時間分』<br />の労働です。
                  </p>
                </div>

                <p style={{ color: 'var(--label-secondary)', fontSize: '12px', marginBottom: '10px' }}>
                  あなたの機会損失：
                </p>
                <div style={{ marginBottom: '4px' }}>
                  {costRows!.map((opp, idx) => (
                    <div
                      key={idx}
                      style={{
                        fontSize: '13px',
                        padding: '8px 0',
                        borderBottom: idx < opportunities.length - 1 ? '0.5px solid #FECDD3' : 'none',
                        color: 'var(--label-primary)',
                      }}
                    >
                      • <span style={{ fontWeight: '600' }}>{opp.name}</span>
                      <span style={{ color: 'var(--label-secondary)' }}>（{opp.price}円）</span>
                      <span style={{ fontWeight: '700', color: 'var(--ios-red)' }}>
                        → {opp.count}{opp.unit}分
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm leading-relaxed" style={{ color: 'var(--label-secondary)' }}>
                換算するには、<strong style={{ color: 'var(--label-primary)' }}>一覧の上にある「想定時給」</strong>
                に半角数字を入力してから、もう一度この行為を開いてください。
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
              className="flex items-center gap-1.5 text-[11px] font-semibold mb-1"
              style={{ color: 'var(--ios-orange)' }}
            >
              <AlertIcon size={14} color="var(--ios-orange)" />
              条件
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
            className="flex items-center gap-1.5 text-[11px] font-semibold mb-2 uppercase tracking-wide"
            style={{ color: 'var(--label-secondary)' }}
          >
            <BookOpenIcon size={14} color="var(--label-secondary)" />
            解説
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--label-primary)' }}
          >
            {item.explanation}
          </p>
          {item.isNew && (
            <span
              className="inline-flex items-center gap-1 mt-3 text-[10px] font-black px-2 py-1 rounded-full text-white"
              style={{ background: 'var(--ios-red)' }}
            >
              <StarIcon size={12} color="#fff" />
              2026年4月改正対象
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
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--pink-primary)' }}
            >
              <BotIcon size={18} color="#fff" />
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

/* ── 絵文字→アイコン変換ヘルパー ── */
function EmojiIconRenderer({ emoji, size = 24 }: { emoji: string; size?: number }) {
  const color = 'var(--pink-primary)'

  switch (emoji) {
    case '📱':
      return <SmartphoneIcon size={size} color={color} />
    case '🛑':
      return <StopSignIcon size={size} color={color} />
    case '🚦':
      return <TrafficLightIcon size={size} color={color} />
    case '⛔':
      return <ProhibitIcon size={size} color={color} />
    case '⬅️':
      return <ArrowLeftIcon size={size} color={color} />
    case '🌙':
      return <MoonIcon size={size} color={color} />
    case '🍺':
      return <BeerIcon size={size} color={color} />
    case '☂️':
      return <UmbrellaIcon size={size} color={color} />
    case '🎧':
      return <HeadphoneIcon size={size} color={color} />
    case '👥':
      return <PeopleIcon size={size} color={color} />
    case '👫':
      return <CoupleIcon size={size} color={color} />
    case '🚗':
      return <CarIcon size={size} color={color} />
    case '🔄':
      return <RefreshIcon size={size} color={color} />
    case '🧺':
      return <BasketIcon size={size} color={color} />
    case '🐌':
      return <SnailIcon size={size} color={color} />
    case '🏘️':
      return <HouseIcon size={size} color={color} />
    case '🔦':
      return <FlashlightIcon size={size} color={color} />
    case '🚶':
      return <PersonWalkIcon size={size} color={color} />
    default:
      return <AlertIcon size={size} color={color} />
  }
}
