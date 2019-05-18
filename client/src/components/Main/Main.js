import React, {Component} from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import Grid from './node_modules/@material-ui/core/Grid';
import JoinButton from '../JoinButton/JoinButton';
import CreateButton from '../CreateButton/CreateButton';
import CreateModal from "../CreateModal/CreateModal"
import JoinModal from "../JoinModal/JoinModal"
import Navbar from '../NavBar/NavBar';

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
      <div>
        <Navbar />
      </div>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h1>Align</h1>
          </Grid>
          <Grid item xs={6} className="createButton">
            {/* <CreateButton /> */}
              <CreateModal />

          </Grid>
          <Grid item xs={6} className="joinButton">
            {/* <JoinButton /> */}
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