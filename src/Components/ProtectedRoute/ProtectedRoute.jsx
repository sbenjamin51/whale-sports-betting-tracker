import { Navigate, Outlet } from 'react-router-dom'
import { getStoredAuth } from '../../lib/auth'

const ProtectedRoute = () => {
  const auth = getStoredAuth()

  if (!auth?.token) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
