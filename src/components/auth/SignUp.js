import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'
import { signUp } from './actions'

class SignUp extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  state = {
    isFetching: false,
    didInvalidate: false,
  }

  createUser(user) {
    this.setState((state) => ({
      isFetching: true,
      didInvalidate: false,
    }))

    this.props.dispatch(signUp(user))
    .then(body => {
      this.setState((state) => ({
        isFetching: false,
        didInvalidate: false,
      }))
      this.props.history.push('/')
    })
    .catch(ex => {
      this.setState((state) => ({
        isFetching: false,
        didInvalidate: true,
      }))
      console.log(ex)
    })
  }

  render() {
    const { isFetching } = this.state

    return (
      <SignUpForm 
        handleSubmit={(user) => this.createUser(user)}
        isFetching={isFetching}
      />
    )
  }
}

export default withRouter(connect()(SignUp))
