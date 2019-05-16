import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AboutButton from './AboutButton';
import ContactButton from './ContactButton';


//styles
const styles = {
  root: {
    flexGrow: 1,
    background: '#4794B3',
    color: 'white',
  },
  grow: {
    flexGrow: 1,
    color: 'white',
    background: '#4794B3',
  },
 
};

class Navbar extends Component {
  render() {
  const { classes } = this.props;
    return (
      <div className={classes.root}>
          <AppBar position="static" className={classes.root} >
             <Toolbar>
              <Typography variant="h6" className={classes.grow}>
                Simple Calendar
                Sharing...
            
                Period.
              </Typography>
              <AboutButton />
              <ContactButton />
            </Toolbar>
           </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);