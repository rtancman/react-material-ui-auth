import React, { Component } from 'react'
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SignInForm from './SignInForm'
import { signInFetchData } from './actions'


class SignIn extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  state = {
    isFetching: false,
    didInvalidate: false,
  }

  login({username, password}) {
    this.setState((state) => ({
      isFetching: true,
      didInvalidate: false,
    }))

    this.props.signIn(username, password)
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
      <SignInForm 
        handleSubmit={(data) => this.login(data)}
        isFetching={isFetching}
      />
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (username, password) => dispatch(signInFetchData(username, password)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))
