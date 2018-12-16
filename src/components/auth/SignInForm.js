import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import CircularProgress from '@material-ui/core/CircularProgress'


class SignInForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    username: PropTypes.string,
  }

  state = {
    username: this.props.username || '',
    password: '',
  }

  reset() {
    this.setState((state) => ({
      username: '',
      password: '',
    }))
  }

  handleChange = (event) => {
    const value = event.target.value
    const field = event.target.name
    this.setState({ [field]: value })
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state, () => this.reset())
  }

  render() {
    const { username, password } = this.state
    const { isFetching } = this.props

    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
      >
        <h1>Sign In</h1>
        <TextValidator
          fullWidth
          label="Username"
          onChange={this.handleChange}
          name="username"
          value={username}
          validators={['required']}
          errorMessages={['this field is required']}
          margin="normal"
        />
        <TextValidator
          fullWidth
          label="Password"
          type='password'
          onChange={this.handleChange}
          name="password"
          value={password}
          validators={['required']}
          errorMessages={['this field is required']}
          margin="normal"
        />
        <Button 
          variant="contained" 
          type="submit"
          disabled={isFetching}
          margin="normal"
        >
          {isFetching && <CircularProgress size={20} />} Save
        </Button>
      </ValidatorForm>
    )
  }
}

export default SignInForm