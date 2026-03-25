import { useNavigate } from 'react-router-dom'
import {
  CoinIcon,
  LightbulbIcon,
  BotIcon,
  BicycleIcon,
  BeerIcon,
  CarIcon,
  HouseIcon,
} from '../components/Icons'

const HEADER_GRADIENT =
  'linear-gradient(160deg,#F9C8D5 0%,#F4A0B5 45%,#E8849A 100%)'

const fineData = [
  {
    groupLabel: '自転車（青切符・2026年4月〜）',
    iconKey: 'bicycle' as const,
    isNew: true,
    items: [
      { act: 'スマホながら運転',           fine: '12,000円', criminal: '6ヶ月以下懲役/10万円以下罰金' },
      { act: '信号無視',                   fine: '6,000円',  criminal: '3ヶ月以下懲役/5万円以下罰金' },
      { act: '一時停止無視',               fine: '5,000円',  criminal: '3ヶ月以下懲役/5万円以下罰金' },
      { act: '右側通行（逆走）',           fine: '5,000円',  criminal: '3ヶ月以下懲役/5万円以下罰金' },
      { act: '夜間無灯火',                 fine: '5,000円',  criminal: '5万円以下の罰金' },
      { act: '傘さし運転',                 fine: '5,000円',  criminal: '5万円以下の罰金' },
      { act: '二人乗り（補助席なし）',     fine: '5,000円',  criminal: '5万円以下の罰金' },
      { act: '並走（2台以上）',            fine: '2,000円',  criminal: '2万円以下の罰金' },
    ],
  },
  {
    groupLabel: '飲酒・重大違反（刑事罰）',
    iconKey: 'beer' as const,
    isNew: true,
    items: [
      { act: '酒気帯び運転',                         fine: '—', criminal: '3年以下懲役/50万円以下罰金' },
      { act: '酒酔い運転',                           fine: '—', criminal: '5年以下懲役/100万円以下罰金' },
      { act: '酒類提供・自転車提供',                 fine: '—', criminal: '2年以下懲役/30万円以下罰金' },
    ],
  },
  {
    groupLabel: 'ドライバー（自転車関連・2026年4月〜）',
    iconKey: 'car' as const,
    isNew: true,
    items: [
      { act: '側方間隔不足（追い越し時）', fine: '反則金あり', criminal: '違反点数・刑事罰の可能性' },
      { act: '徐行義務違反',               fine: '反則金あり', criminal: '違反点数' },
    ],
  },
  {
    groupLabel: '生活道路速度超過（2026年9月〜）',
    iconKey: 'house' as const,
    isNew: true,
    items: [
      { act: '生活道路30km/h超過',         fine: '速度により異なる', criminal: '速度超過反則金・刑事罰' },
    ],
  },
]

function FineGroupIcon({ iconKey, size = 20 }: { iconKey: typeof fineData[0]['iconKey']; size?: number }) {
  const color = 'var(--pink-primary)'
  switch (iconKey) {
    case 'bicycle': return <BicycleIcon size={size} color={color} />
    case 'beer':    return <BeerIcon    size={size} color={color} />
    case 'car':     return <CarIcon     size={size} color={color} />
    case 'house':   return <HouseIcon   size={size} color={color} />
  }
}

export default function Fines() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pb-24" style={{ background: 'var(--bg-grouped)' }}>
      {/* ヘッダー */}
      <div
        className="px-4 pb-5"
        style={{
          background: HEADER_GRADIENT,
          paddingTop: 'max(56px, calc(env(safe-area-inset-top) + 12px))',
        }}
      >
        <div className="relative flex items-start gap-2">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="ios-press shrink-0 rounded-lg px-1 py-0.5 text-sm font-semibold text-white z-10"
            style={{ marginTop: 2 }}
          >
            ‹ 戻る
          </button>
          <div className="min-w-0 flex-1 pt-0.5">
            <div className="flex items-center gap-2 mb-0.5">
              <CoinIcon size={26} color="#fff" />
              <h1 className="font-black text-[24px] leading-tight text-white">反則金一覧</h1>
            </div>
            <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 13 }}>
              これが「青切符」の現実や
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 max-w-md mx-auto">
        {/* 解説バナー */}
        <div
          className="rounded-2xl p-4 mb-5 flex gap-3"
          style={{ background: 'var(--bg-primary)' }}
        >
          <div className="flex-shrink-0 mt-0.5">
            <LightbulbIcon size={28} color="var(--pink-primary)" />
          </div>
          <div>
            <p
              className="font-bold text-[13px] mb-1"
              style={{ color: 'var(--label-primary)' }}
            >
              青切符とは？
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'var(--label-secondary)' }}
            >
              反則金を納付すれば前科にはなりません。ただし
              <span style={{ color: 'var(--ios-red)', fontWeight: 700 }}>
                納付しなければ刑事手続き
              </span>
              へ移行。対象は16歳以上。
            </p>
          </div>
        </div>

        {/* テーブル */}
        {fineData.map((group, gi) => (
          <div key={gi} className="mb-5">
            <div className="flex items-center gap-2 mb-2 px-1">
              <FineGroupIcon iconKey={group.iconKey} size={18} />
              <p
                className="text-[13px] font-bold"
                style={{ color: 'var(--label-primary)' }}
              >
                {group.groupLabel}
              </p>
              {group.isNew && (
                <span
                  className="text-[10px] font-black px-1.5 py-0.5 rounded text-white"
                  style={{ background: 'var(--ios-red)' }}
                >
                  NEW
                </span>
              )}
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: 'var(--bg-primary)' }}
            >
              {/* ヘッダー行 */}
              <div
                className="grid grid-cols-3 px-4 py-2"
                style={{ background: 'var(--fill-pink)' }}
              >
                {['行為', '反則金', '刑事罰（未納時）'].map(h => (
                  <span
                    key={h}
                    className="text-[10px] font-bold"
                    style={{
                      color: 'var(--pink-deep)',
                      textAlign: h === '反則金' ? 'center' : h === '刑事罰（未納時）' ? 'right' : 'left',
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {group.items.map((item, ii) => (
                <div
                  key={ii}
                  className="grid grid-cols-3 px-4 py-3 gap-2 items-start"
                  style={{
                    borderTop: '0.5px solid var(--separator)',
                  }}
                >
                  <span
                    className="text-xs font-medium leading-snug"
                    style={{ color: 'var(--label-primary)' }}
                  >
                    {item.act}
                  </span>
                  <span
                    className="text-xs font-black text-center"
                    style={{ color: 'var(--ios-red)' }}
                  >
                    {item.fine}
                  </span>
                  <span
                    className="text-[10px] text-right leading-snug"
                    style={{ color: 'var(--label-secondary)' }}
                  >
                    {item.criminal}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Claude経営分析 */}
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
                className="text-[11px] font-bold mb-1.5"
                style={{ color: 'var(--pink-light)' }}
              >
                Claude の経営分析
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'rgba(255,214,224,.85)' }}
              >
                スマホながら運転1回で12,000円。月20日通勤で毎日該当すれば月間は12,000×20日＝
                <span style={{ color: 'var(--pink-light)', fontWeight: 700 }}>
                  240,000円
                </span>
                。これが通年続けば年間は約288万円（240,000×12ヶ月）に相当するリスクです。哲学的に言えば——「無知は罪ではないが、知った後の無行動は罪である」。
                従業員教育への投資は、このリスクを完全にゼロにします。
              </p>
            </div>
          </div>
        </div>

        <p
          className="text-center text-xs pb-2"
          style={{ color: 'var(--label-tertiary)' }}
        >
          反則金額は2026年4月施行の改正道路交通法に基づきます。<br />
          詳細・最新情報は警察庁公式サイトをご確認ください。
        </p>
      </div>
    </div>
  )
}
