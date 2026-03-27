export const AUTH_STORAGE_KEY = 'sbta_auth'

export const getStoredAuth = () => {
  const storedValue = localStorage.getItem(AUTH_STORAGE_KEY)

  if (!storedValue) {
    return null
  }

  try {
    return JSON.parse(storedValue)
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    return null
  }
}

export const storeAuth = (authData) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData))
}

export const clearAuth = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY)
}
