import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { withRouter } from 'react-router-dom'
import PrivateRoute from './auth/core/PrivateRoute'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Logout from './auth/Logout'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute isAuthenticated={true} exact path='/' component={Home} />
        <Route exact path='/login' render={(props) => (
          <SignIn {...props} />
        )}/>
        <Route exact path='/signup' render={(props) => (
          <SignUp {...props} />
        )}/>
        <Route exact path='/logout' render={(props) => (
          <Logout {...props} />
        )}/>
      </Switch>
    );
  }
}

export default withRouter(App)
