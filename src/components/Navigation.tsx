import { NavLink } from 'react-router-dom'

const tabs = [
  { path: '/',        label: 'ホーム',   symbol: '🏠' },
  { path: '/quiz',    label: 'クイズ',   symbol: '🎯' },
  { path: '/checker', label: 'チェック', symbol: '⚡' },
  { path: '/rules',   label: 'ルール',   symbol: '📚' },
  { path: '/fines',   label: '反則金',   symbol: '💰' },
]

export default function Navigation() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(255,248,250,.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '0.5px solid rgba(232,132,154,.25)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex max-w-md mx-auto">
        {tabs.map(tab => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 py-2 gap-0.5 ios-press
               text-[10px] font-semibold tracking-tight transition-colors
               ${isActive ? 'text-[#E8849A]' : 'text-[rgba(60,60,67,.45)]'}`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className="text-[22px] leading-none mb-0.5"
                  style={{ filter: isActive ? 'none' : 'grayscale(.5)' }}
                >
                  {tab.symbol}
                </span>
                <span>{tab.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
