import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import CircularProgress from '@material-ui/core/CircularProgress'


class SignUpForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    email: PropTypes.string,
  }

  state = {
    name: '',
    email: this.props.email || '',
    password: '',
  }

  reset() {
    this.setState((state) => ({
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
    this.props.handleSubmit({...this.state}, () => this.reset())
  }

  render() {
    const { name, email, password } = this.state
    const { isFetching } = this.props

    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
      >
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
          fullWidth
          color="primary"
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