import React from 'react'
import { auth } from '../db/functions'

export const AuthContext = React.createContext(null)

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      user ? setIsLoggedIn(true) : setIsLoggedIn(false)
    })
  })

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}
