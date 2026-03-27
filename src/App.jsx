import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import AppLayout from './Layouts/AppLayout'
import AnalyticsPage from './Components/Analytics/Analytics'
import Bets from './Components/Bets/Bets'
import DashboardPage from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import ProfilePage from './Pages/ProfilePage'
import Signup from './Components/Signup/Signup'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/bets" element={<Bets />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
