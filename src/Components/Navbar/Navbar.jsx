import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'My Bets', to: '/bets' },
  { label: 'Analytics', to: '/analytics' },
  { label: 'Profile', to: '/profile' },
]

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <NavLink className="navbar__logo" to="/dashboard">
          Whale
        </NavLink>
      </div>

      <nav className="navbar__links" aria-label="Primary">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            className={({ isActive }) =>
              `navbar__link${isActive ? ' navbar__link--active' : ''}`
            }
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="navbar__actions">
        <NavLink className="navbar__button navbar__button--ghost" to="/profile">
          Bankroll
        </NavLink>
        <NavLink className="navbar__button navbar__button--primary" to="/bets">
          Add Bet
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
