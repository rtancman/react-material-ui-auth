import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { logout } from './actions'

class Logout extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.dispatch(logout())
    this.props.history.push('/')
  }

  render() {
    return null
  }
}

export default withRouter(connect()(Logout))