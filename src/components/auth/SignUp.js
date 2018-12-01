import React, { Component } from 'react'
import SignUpForm from './SignUpForm'

class SignUp extends Component {
  render() {
    return (
      <SignUpForm 
        handleSubmit={(data) => console.log(data)}
        isFetching={false}
      />
    )
  }
}

export default SignUp