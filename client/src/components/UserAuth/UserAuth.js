import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../../Auth';
import { withStyles } from "@material-ui/core/styles";
import './userA.scss';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: "none"
    }
});


function UserAuth(props) {
    const signOut = () => {
      auth0Client.signOut();
      props.history.replace('/info');
    };
  
    return (
      <div>
        {
          !auth0Client.isAuthenticated() &&
          <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
            <button className="userA" onClick={() => {signOut()}}>Sign Out</button>
          </div>
        }
      </div>
    );
  }
  
  export default withRouter(UserAuth);