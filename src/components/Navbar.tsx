import { NavLink } from 'react-router-dom'
import { BookOpen, BarChart2, List, Settings } from 'lucide-react'

const tabs = [
  { to: '/practice', icon: BookOpen, label: 'Practice' },
  { to: '/progress', icon: BarChart2, label: 'Progress' },
  { to: '/wordbank', icon: List, label: 'Words' },
  { to: '/settings', icon: Settings, label: 'Settings' }
]

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {tabs.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-4 py-2 text-xs font-medium transition-colors ${
                isActive ? 'text-accent-500' : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            <Icon size={20} strokeWidth={1.75} />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
