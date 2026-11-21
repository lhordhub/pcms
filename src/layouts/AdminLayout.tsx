import { NavLink, Outlet } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'block rounded bg-slate-700 px-3 py-2 text-white'
    : 'block rounded px-3 py-2 text-slate-300 hover:bg-slate-800'

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 bg-slate-900 p-4">
        <h2 className="mb-6 text-lg font-bold text-white">PCMS Admin</h2>
        <nav className="space-y-1">
          <NavLink to="/admin" end className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/" className={linkClass}>
            Back to site
          </NavLink>
        </nav>
      </aside>
      <main className="flex-1 bg-slate-50 p-8">
        <Outlet />
      </main>
    </div>
  )
}