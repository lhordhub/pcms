import { Route, Routes } from 'react-router-dom'
import PlayerLayout from './layouts/PlayerLayout'
import AdminLayout from './layouts/AdminLayout'
import Home from './pages/player/Home'
import Courts from './pages/player/Courts'
import Dashboard from './pages/admin/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route element={<PlayerLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courts" element={<Courts />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}