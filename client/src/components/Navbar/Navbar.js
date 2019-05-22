import React, {Component} from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import AboutButton from '../AboutButton/AboutButton';
import ContactButton from '../ContactButton/ContactButton';
import DemoButton from '../DemoButton/DemoButton'


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