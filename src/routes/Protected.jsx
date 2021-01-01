import React from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from '../services/Auth'
import Home from '../pages/Home'

const Protected = ({ component: RouteComponent, ...rest }) => {
  const { isLoggedIn } = React.useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={routeProps =>
        isLoggedIn ? <RouteComponent {...routeProps} /> : <Home />
      }
    />
  )
}

export default Protected
