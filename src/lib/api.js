const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api'

const makeRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong.')
  }

  return data
}

export const signupUser = (payload) =>
  makeRequest('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

export const loginUser = (payload) =>
  makeRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
