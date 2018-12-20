import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import UserBar from '../auth/UserBar'
import BoxCenter from '../auth/UI/box/Center'

class Home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  }

  render() {
    const { auth } = this.props

    return (
      <div>
        <UserBar auth={auth} />
        <BoxCenter>
          <InsertEmoticon style={{ fontSize: 100 }} />
          <h1>React & Redux Auth</h1>
          { auth.id && (
            <p>Hello <strong>{auth.name}</strong>.</p>
          )}
        </BoxCenter>
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