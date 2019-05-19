import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CreateModal from "../CreateModal/CreateModal"
import JoinModal from "../JoinModal/JoinModal"

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


class FrontMain extends Component {
  render() {
  const { classes } = this.props;
    return (
      <div>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h1>Align</h1>
          </Grid>
          <Grid item xs={6} className="createModal">
              <CreateModal />

          </Grid>
          <Grid item xs={6} className="joinModal">
              <JoinModal />

          </Grid>
      </Grid>
    </div>
    </div>

    );

  }
}

FrontMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontMain);