import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import AboutButton from '../aboutbutton/AboutButton';
import ContactButton from '../contactbutton/ContactButton';
=======
import AboutButton from '../AboutButton/AboutButton';
import ContactButton from '../ContactButton/ContactButton';
import DemoButton from '../DemoButton/DemoButton'
>>>>>>> aaa9d35a0bac2b6c748785c63486c77924560fec


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
              <DemoButton />
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