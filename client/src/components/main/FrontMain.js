import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import JoinButton from '../joinbutton/JoinButton';
import CreateButton from '../createbutton/CreateButton';





const styles = theme => ({
  root: {
    flexGrow: 1,
    background: '#4794B3',
    textAlign: 'center',
    paddingTop: 250,
    paddingBottom: 500,
    marginTop: 3,
    color: 'white',
  }
});

const FrontMain = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
         <h1>Align</h1>
        </Grid>
          <Grid item xs={6} className="createButton">
          <CreateButton />
          </Grid>
        <Grid item xs={6} className="joinButton">
          <JoinButton />
        </Grid>     
      </Grid>
    </div>
    
  );
}

FrontMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontMain);