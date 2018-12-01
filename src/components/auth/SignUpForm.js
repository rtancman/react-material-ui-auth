import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import uuidv4 from 'uuid/v4'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import CircularProgress from '@material-ui/core/CircularProgress'


class SignUpForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    id: PropTypes.string,
    timestamp: Date.now(),
    email: '',
  }

  state = {
    id: this.props.id || uuidv4(),
    timestamp: this.props.timestamp || Date.now(),
    name: '',
    email: this.props.email || '',
    password: '',
  }

  reset() {
    this.setState((state) => ({
      id: this.props.id || uuidv4(),
      timestamp: Date.now(),
      name: '',
      email: '',
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
    const { name, email, password } = this.state
    const { isFetching } = this.props

    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
      >
        <h1>Sign Up</h1>
        <TextValidator
          fullWidth
          label="name"
          onChange={this.handleChange}
          name="name"
          value={name}
          validators={['required']}
          errorMessages={['this field is required']}
          margin="normal"
        />
        <TextValidator
          fullWidth
          label="email"
          onChange={this.handleChange}
          name="email"
          value={email}
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

export default SignUpForm