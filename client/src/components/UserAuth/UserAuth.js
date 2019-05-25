import React from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from '../../Auth';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
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
      props.history.replace('/home');
    };
  
    return (
      <div>
        {
          !auth0Client.isAuthenticated() &&
          <Button id="userA" onClick={auth0Client.signIn}>Sign In</Button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
            <Button id="userA" onClick={() => {signOut()}}>Sign Out</Button>
          </div>
        }
      </div>
    );
  }
  
  export default withRouter(UserAuth);