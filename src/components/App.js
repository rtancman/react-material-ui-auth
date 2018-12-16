import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { withRouter } from 'react-router-dom'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => (
          <Home {...props} />
        )}/>
        <Route exact path='/login' render={(props) => (
          <SignIn {...props} />
        )}/>
        <Route exact path='/signup' render={(props) => (
          <SignUp {...props} />
        )}/>
      </Switch>
    );
  }
}

export default withRouter(App)
