import { Link, useLocation } from 'react-router-dom'
import { Activity } from 'lucide-react'

export default function Navbar() {
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: '🏥 Pre Visit' },
    { to: '/post-visit', label: '🧾 Post Visit' },
    { to: '/dashboard', label: '📊 Dashboard' },
    { to: '/community', label: '📅 Community' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Left: Logo + Tabs */}
        <div className="flex items-center gap-6 flex-wrap md:flex-nowrap">

          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-md">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              CareLess
            </span>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 flex-wrap md:flex-nowrap">
            {links.map((link) => {
              const isActive = pathname === link.to

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                    ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Right: Badge */}
        <div className="hidden md:flex items-center">
          <div className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide border border-blue-100">
            AI Health Assistant v1.0
          </div>
        </div>

      </div>
    </nav>
  )
}
