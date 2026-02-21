import { Link, useLocation } from 'react-router-dom'

const links = [
    { to: '/', label: '🏥 Insurance Info' },
    { to: '/search', label: '🔍 Search Guide' },
    { to: '/events', label: '📅 Community' },
    { to: '/donate', label: '💜 Donate' },
]

export default function Navbar() {
    const { pathname } = useLocation()
    return (
        <nav className="border-b border-slate-800 bg-slate-900 px-6 py-4 flex gap-6 items-center">
            <span className="font-bold text-blue-400 text-xl mr-4">CoverWise</span>
            {links.map(l => (
                <Link
                    key={l.to}
                    to={l.to}
                    className={`text-sm font-medium transition-colors ${pathname === l.to ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                        }`}
                >
                    {l.label}
                </Link>
            ))}
        </nav>
    )
}