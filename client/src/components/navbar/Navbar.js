<<<<<<< HEAD
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../../Auth';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AboutButton from '../aboutbutton/AboutButton';
import ContactButton from '../contactbutton/ContactButton';
=======
import React, {Component} from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import AboutButton from '../AboutButton/AboutButton';
import ContactButton from '../ContactButton/ContactButton';
>>>>>>> 6d43a370fff360b5a377c79289a0dd79fc78abb3

function NavBar(props) {
    const signOut = () => {
      auth0Client.signOut();
      props.history.replace('/');
    };
  
    return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <Link className="navbar-brand" to="/">
          Align
        </Link>
        {
          !auth0Client.isAuthenticated() &&
          <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
            <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
          </div>
        }
      </nav>
    );
  }
  
  export default withRouter(NavBar);