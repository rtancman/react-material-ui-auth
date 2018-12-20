import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  text: {
    textAlign: 'center'
  }
})

const BoxCenter = ({classes, children}) => {
  return (
    <div>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          {children}
        </Paper>
      </main>
      <p className={classes.text}>Build with <span role="img" aria-label="Love">❤️</span> by the <a href="https://material-ui.com">Material-UI</a></p>
    </div>
  )
}

export default withStyles(styles)(BoxCenter)
