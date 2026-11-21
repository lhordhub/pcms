import { NavLink, Outlet } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'font-semibold text-white'
    : 'text-emerald-100 hover:text-white'

export default function PlayerLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-emerald-600 px-6 py-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-xl font-bold text-white">PCMS</span>
          <div className="flex gap-6">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/courts" className={linkClass}>
              Courts
            </NavLink>
            <NavLink to="/admin" className={linkClass}>
              Admin
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  )
}