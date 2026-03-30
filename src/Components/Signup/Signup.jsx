import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signupUser } from '../../lib/api'
import { getStoredAuth, storeAuth } from '../../lib/auth'
import './Signup.css'

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
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
      const response = await signupUser(formData)
      storeAuth(response)
      navigate('/dashboard')
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="signup-page">
      <section className="signup-hero">
            <h1>Whale Bets</h1>
            <h2>Track every bet with confidence.</h2>
            <p>Monitor your bankroll, analyze trends, and keep your betting history organized.</p>
        </section>
      <section className="signup-card">
        <div className="signup-card__copy">
          <span className="signup-card__eyebrow">Get started</span>
          <h1 className="signup-card__title">Create your Whale Bets account</h1>
          <p className="signup-card__subtitle">
            Set up your account so you can track bets, monitor bankroll growth, and
            review your performance in one place.
          </p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label className="signup-form__field" htmlFor="username">
            <span>Username</span>
            <input
              id="username"
              className="signup-form__input"
              type="text"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>

          <label className="signup-form__field" htmlFor="email">
            <span>Email</span>
            <input
              id="email"
              className="signup-form__input"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="signup-form__field" htmlFor="password">
            <span>Password</span>
            <input
              id="password"
              className="signup-form__input"
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <button className="signup-form__button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </button>

          {errorMessage ? <p className="signup-form__message">{errorMessage}</p> : null}
        </form>

        <p className="signup-card__footer">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </section>
    </main>
  )
}

export default Signup
