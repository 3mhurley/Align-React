import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TitleButton from '../TitleButton/TitleButton';
import AboutButton from '../AboutButton/AboutButton';
import ContactButton from '../ContactButton/ContactButton';
<<<<<<< HEAD
import DemoButton from '../DemoButton/DemoButton'
import auth0Client from '../../Auth';
import UserAuth from '../UserAuth/UserAuth';
import './navbar.scss';
=======
import DemoButton from '../DemoButton/DemoButton';
// import './navbar.scss';
>>>>>>> 3df39fa0bbada3502bd6e75f5ca6ee86072da7cb


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
              <TitleButton />
              <AboutButton />
              <ContactButton />
              <DemoButton />
              <UserAuth />
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