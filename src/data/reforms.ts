export interface Reform {
  id: string
  emoji: string
  title: string
  summary: string
  detail: string
  effectDate: string
  isHot: boolean
}

export const reforms: Reform[] = [
  {
    id: 'blue-ticket',
    emoji: '🚨',
    title: '青切符制度スタート！',
    summary: '自転車の軽微な違反に「反則金」が導入。注意だけじゃ済まへん！',
    detail: '16歳以上の自転車運転者が対象。これまで指導・警告で終わっていた違反行為に、自動車同様の「交通反則通告制度（青切符）」が適用される。反則金を払えば前科にはならないが、払わなければ刑事手続きへ移行。',
    effectDate: '2026年4月1日〜',
    isHot: true,
  },
  {
    id: 'smartphone',
    emoji: '📱',
    title: 'スマホ「ながら運転」即アウト！',
    summary: '走行中に手で持つだけで12,000円。停止中はOK。',
    detail: '走行中にスマートフォンを手に持った瞬間、違反が成立。地図確認・LINE通知チェックも一切不問。「ちょっとだけ」が12,000円に化ける。完全に停止していれば対象外。',
    effectDate: '2026年4月1日〜',
    isHot: true,
  },
  {
    id: 'side-clearance',
    emoji: '↔️',
    title: '車が自転車を追い越す間隔ルール新設',
    summary: '自転車が気づいていれば1m以上、気づいていなければ1.5m以上。',
    detail: '車が自転車の横を通過する際の側方間隔が初めて法律で明文化。自転車が自動車に気づいている場合は1m以上、気づいていない場合は1.5m以上の間隔が必要。間隔が取れない場合は「徐行義務」が発生。ドライバー側の違反にもなる。',
    effectDate: '2026年4月1日〜',
    isHot: true,
  },
  {
    id: 'drunk-riding',
    emoji: '🍺',
    title: '酒気帯び運転の罰則強化',
    summary: '自転車への酒類提供・同乗も新たに罰則対象に。',
    detail: '自転車の酒気帯び運転はもちろん、酒類を提供した人・酒気帯び状態の人を同乗させた人・自転車を提供した人にも罰則が整備された。「一杯だけやから大丈夫」は通用しない。',
    effectDate: '2026年4月1日〜',
    isHot: false,
  },
  {
    id: 'speed-limit',
    emoji: '🐢',
    title: '生活道路の法定速度が30km/hに',
    summary: 'これまでの60km/hから30km/hへ大幅引き下げ。自転車も対象。',
    detail: '住宅街などの生活道路（標識のない道路）の法定速度が60km/hから30km/hに引き下げ。自動車・自転車・電動キックボードすべてが対象。子どもや高齢者の多い道での安全強化が目的。',
    effectDate: '2026年9月〜',
    isHot: false,
  },
  {
    id: 'lecture',
    emoji: '📚',
    title: '自転車運転者講習制度',
    summary: '危険行為を繰り返すと「講習」受講が義務に。',
    detail: '危険な違反行為を繰り返した場合、自転車運転者講習の受講が義務付けられる。受講しない場合は5万円以下の罰金。',
    effectDate: '2026年4月1日〜',
    isHot: false,
  },
]
