import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import SignUpForm from './form/SignUpForm'
import { signUp } from './actions'
import BoxCenter from './UI/box/Center'


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
      <BoxCenter>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <SignUpForm 
          handleSubmit={(user) => this.createUser(user)}
          isFetching={isFetching}
        />
        <p>Already have an account? <Link to='/login'>Log in</Link></p>
      </BoxCenter>
    )
  }
}

export default withRouter(connect()(SignUp))
