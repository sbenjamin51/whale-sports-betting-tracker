import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../lib/api'
import { getStoredAuth, storeAuth } from '../../lib/auth'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (getStoredAuth()?.token) {
      navigate('/dashboard', { replace: true })
    }
  }, [navigate])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')
    setIsSubmitting(true)

    try {
      const response = await loginUser(formData)
      storeAuth(response)
      navigate('/dashboard')
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="login-page">
        <section className="login-hero">
            <h1>Whale Bets</h1>
            <h2>Track every bet with confidence.</h2>
            <p>Monitor your bankroll, analyze trends, and keep your betting history organized.</p>
        </section>
        <section className="login-card">
        <div className="login-card__copy">
          <span className="login-card__eyebrow">Welcome back</span>
          <h1 className="login-card__title">Log in</h1>
          <p className="login-card__subtitle">
            Enter your email and password to access your bets, bankroll, and performance
            dashboard.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-form__field" htmlFor="email">
            <span>Email</span>
            <input
              id="email"
              className="login-form__input"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="login-form__field" htmlFor="password">
            <span>Password</span>
            <input
              id="password"
              className="login-form__input"
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <button className="login-form__button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Logging In...' : 'Log In'}
          </button>

          {errorMessage ? <p className="login-form__message">{errorMessage}</p> : null}
        </form>

        <p className="login-card__footer">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </section>
    </main>
  )
}

export default Login
