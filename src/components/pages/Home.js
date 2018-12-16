import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'

class Home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  }

  render() {
    const { auth } = this.props

    return (
      <div>
        <h1>Home page</h1>
        { auth.id && (
          <div>
            <p>{auth.name}</p>
            <p>{auth.email}</p>
          </div>
        )}
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