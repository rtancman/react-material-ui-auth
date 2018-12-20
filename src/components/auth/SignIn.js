import React, { Component } from 'react'
import PropTypes from "prop-types";
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import SignInForm from './form/SignInForm'
import { signInFetchData } from './actions'
import BoxCenter from './UI/box/Center'

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
      <BoxCenter>
        <Avatar>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <SignInForm 
          handleSubmit={(data) => this.login(data)}
          isFetching={isFetching}
        />
        <p>Need an account? <Link to='/signup'>Sign up</Link></p>
      </BoxCenter>
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
