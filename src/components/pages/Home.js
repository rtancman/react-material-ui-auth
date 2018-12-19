import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import UserBar from '../auth/UserBar'

class Home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  }

  render() {
    const { auth } = this.props

    return (
      <div>
        <UserBar auth={auth} />
        <h1>Home page</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(Home)