import React from 'react'
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ isAuthenticated = false, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute