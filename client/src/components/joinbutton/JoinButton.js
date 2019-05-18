import React, {Component} from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import Button from './node_modules/@material-ui/core/Button';

const styles = theme => ({
  button: {
    marginRight: 180, 
  },
  input: {
    display: 'none',
  },
});

class JoinButton extends Component {
  render() {
    const { classes } = this.props;
    return (
         <div>
            <Button variant="contained" className={classes.button}>
             JOIN CALENDAR
            </Button>
        </div>
      );
    }
}

JoinButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JoinButton);