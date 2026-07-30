import { createContext, useContext, useEffect, useState, useCallback } from 'react'

import { login as apiLogin, fetchMe } from '../lib/adminApi'

const STORAGE_KEY = 'digitalis_admin_token'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  // True only during the initial "is there a saved session" check on app
  // load — not during login itself.
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY)

    if (!saved) {
      setLoading(false)
      return
    }

    fetchMe(saved)
      .then(({ user }) => {
        setToken(saved)
        setUser(user)
      })
      .catch(() => {
        sessionStorage.removeItem(STORAGE_KEY)
      })
      .finally(() => setLoading(false))
  }, [])

  const login = useCallback(async (email, password) => {
    const { token: newToken, user: newUser } = await apiLogin(email, password)
    sessionStorage.setItem(STORAGE_KEY, newToken)
    setToken(newToken)
    setUser(newUser)
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY)
    setToken(null)
    setUser(null)
  }, [])

  const value = {
    token,
    user,
    loading,
    isAuthenticated: Boolean(token && user),
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used inside <AuthProvider>')
  }
  return ctx
}