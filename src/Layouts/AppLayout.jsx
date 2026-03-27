import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import '../App.css'

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default AppLayout
