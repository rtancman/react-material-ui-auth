import React, { Component } from 'react'
import SignInForm from './SignInForm'

class SignIn extends Component {
  render() {
    return (
      <SignInForm 
        handleSubmit={(data) => console.log(data)}
        isFetching={false}
      />
    )
  }
}

export default SignIn