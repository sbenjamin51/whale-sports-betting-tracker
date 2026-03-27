export const AUTH_STORAGE_KEY = 'sbta_auth'

export const getStoredAuth = () => {
  const storedValue = sessionStorage.getItem(AUTH_STORAGE_KEY)

  if (!storedValue) {
    return null
  }

  try {
    return JSON.parse(storedValue)
  } catch {
    sessionStorage.removeItem(AUTH_STORAGE_KEY)
    return null
  }
}

export const storeAuth = (authData) => {
  sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData))
}

export const clearAuth = () => {
  sessionStorage.removeItem(AUTH_STORAGE_KEY)
}
