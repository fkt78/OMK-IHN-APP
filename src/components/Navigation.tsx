import { NavLink } from 'react-router-dom'
import {
  NavHomeIcon,
  NavQuizIcon,
  NavCheckerIcon,
  NavRulesIcon,
  NavFinesIcon,
} from './Icons'

const tabs = [
  { path: '/',        label: 'ホーム',   Icon: NavHomeIcon },
  { path: '/quiz',    label: 'クイズ',   Icon: NavQuizIcon },
  { path: '/checker', label: 'チェック', Icon: NavCheckerIcon },
  { path: '/rules',   label: 'ルール',   Icon: NavRulesIcon },
  { path: '/fines',   label: '反則金',   Icon: NavFinesIcon },
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
            className="flex flex-col items-center justify-center flex-1 py-2 gap-0.5 ios-press transition-colors"
          >
            {({ isActive }) => (
              <>
                <tab.Icon size={24} isActive={isActive} />
                <span
                  className="text-[10px] font-semibold tracking-tight"
                  style={{ color: isActive ? '#E8849A' : 'rgba(60,60,67,.45)' }}
                >
                  {tab.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
