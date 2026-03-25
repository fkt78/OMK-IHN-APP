import { NavLink } from 'react-router-dom'

const tabs = [
  { path: '/', label: 'ホーム', emoji: '🏠' },
  { path: '/quiz', label: 'クイズ', emoji: '🎯' },
  { path: '/checker', label: 'チェック', emoji: '⚡' },
  { path: '/rules', label: 'ルール', emoji: '📚' },
  { path: '/fines', label: '反則金', emoji: '💰' },
]

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex">
        {tabs.map(tab => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === '/'}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center py-2 gap-0.5 text-xs font-medium transition-colors ${
                isActive
                  ? 'text-blue-700'
                  : 'text-slate-400 hover:text-slate-600'
              }`
            }
          >
            <span className="text-xl leading-none">{tab.emoji}</span>
            <span>{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
