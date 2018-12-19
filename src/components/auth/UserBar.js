import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  link: {
    fontSize: '0.875rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: '#FFFFFF',
    padding: '8px 16px',
    minWidth: '64px',
    minHeight: '36px',
  }
}

const AuthMenu = ({ auth = {}, anchorEl = null, handleMenu, handleClose, classes }) => {
  const open = Boolean(anchorEl)
  let menuItens = ''

  if ( auth.id ) {
    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <Avatar className={classes.orangeAvatar}>{auth.name.substring(0,2)}</Avatar>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to='/'>Home</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to='/logout'>Logout</Link>
          </MenuItem>
        </Menu>
      </div>
    )
  } else {
    return (
      <div>
        <Link className={classes.link} to='/login'>login</Link>
        <Link className={classes.link} to='/signup'>sign up</Link>
      </div>
    )
  }
}

class UserBar extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  }

  state = {
    anchorEl: null,
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes, auth } = this.props
    const { anchorEl } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Reac Material UI Auth
            </Typography>
            <AuthMenu 
              auth={auth} 
              anchorEl={anchorEl}
              handleMenu={this.handleMenu}
              handleClose={this.handleClose}
              classes={classes}
            />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default withStyles(styles)(connect(mapStateToProps)(UserBar))