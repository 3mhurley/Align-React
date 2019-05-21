import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./info.scss";
import InfoDemoButton from '../InfoDemoButton/InfoDemoButton';


const styles = theme => ({
  
  root: {
    flexGrow: 1,
    background: '#4794B3',
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 245,
    marginTop: 3,
    color: 'white',
    overflow: 'hidden',
  
    
  },
  paper: {
    marginTop: 80,
    background: '#99E2FF',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function InfoMain(props) {
  const { classes } = props;

  return (
    <body>
         <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                 <Paper className={classes.paper} id="mainInfo"><p className="text">You would think scheduling a meeting would be simple these days with all the technology we have at our finger tips.</p>
                <p className="text">We were tired of IMing, taking polls, and having meetings about meetings. So, we created a simple calendar sharing platform to allow the masses to align their schedules easily. Set your availability, share your calendar, have your meeting. Period.</p></Paper>
            </Grid>
            {/* <Grid item xs={12}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid> */}
            <Grid item xs={12} id="buttonDemo"><InfoDemoButton />
            </Grid>
            {/* <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                 <Paper className={classes.paper}>xs=3</Paper>
             </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid> */}
        </Grid>
    </div>
    </body>
  );
}

InfoMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoMain);