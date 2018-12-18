import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";



const AuthMenu = ({ auth = {} }) => {
  if ( auth.id ) {
    return (
      <div>
        <p>{auth.name}</p>
        <p>{auth.email}</p>
        <Link to='/logout'>logout</Link>
      </div>
    )
  }
  return (
    <div>
      <Link to='/login'>login</Link>
      <Link to='/signup'>sign up</Link>
    </div>
  )
}

class Home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  }

  render() {
    const { auth } = this.props

    return (
      <div>
        <h1>Home page</h1>
        <AuthMenu auth={auth} />
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