import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./info.scss";
import InfoDemoButton from '../InfoDemoButton/InfoDemoButton';
import { NONAME } from 'dns';


const styles = theme => ({

  root: {
    flexGrow: 1,
    background: '#4794B3',
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 245,
    marginTop: 3,
    color: '#4794B3',
    overflow: 'hidden',
  },
  paper: {
    marginTop: 80,
    background: '#4794B3',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class InfoMain extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6} spacing={3}>
            <Paper className={classes.paper} id="whyInfo">
              <h1>The Why</h1>
              <p className="text">You would think scheduling a meeting would be simple these days with all the technology we have at our finger tips. We were tired of IMing, taking polls, and having meetings about meetings. So, we created a simple calendar sharing platform to allow the masses to align their schedules easily. Set your availability, share your calendar, have your meeting. Period.</p>
            </Paper>
          </Grid>
          <Grid item xs={6} spacing={3}>
            <Paper className={classes.paper} id="whatInfo">
              <h1>The What</h1>
              <p className="text">Align is an unpretentious calendar sharing app. We don’t require any personal information from you to get started, and we will never require it from you down the road. There is no “Premium” version because we believe aligning your schedule with others when it matters should be monetarily and hassle-free.</p>
            </Paper>
          </Grid>
          <Grid item xs={6} spacing={3}>
            <Paper className={classes.paper} id="howInfo">
              <h1>The How</h1>
              <p className="text">Here are some simple steps to get started: 1. Demo our app below! You can get a feel for the flow of Align and how it works. 2. Go  and create a calendar, fill in your availability, and get your unique calendar ID. 3. Pass the calendar ID onto whoever you like. This ID is unique to you, and only you. If it gets stolen, no need to lose sleep over it. No personal information is attached to this unique ID. 4. Anyone who gets the calendar ID can go in and add their availability</p>
            </Paper>
          </Grid>
          <Grid item xs={6} spacing={3}>
            <Paper className={classes.paper} id="whoInfo">
              <h1>The Who</h1>
              <p className="text">We are a team of developers from Denver, CO who enjoy solving big issues with simple solutions. We believe Align does just that. If you enjoy using our app and you feel like it is beneficial to you personally or to your team, feel free to create an account. If you just need a one-off scheduling solution that’s perfectly fine too. Welcome!</p>
            </Paper>
          </Grid>
          <Grid item xs={12} id="buttonDemo" spacing={3}>
            <InfoDemoButton />
          </Grid>
        </Grid>
      </div>
    );
  }
}

InfoMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoMain);