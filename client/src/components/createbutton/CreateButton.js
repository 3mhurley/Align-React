import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    marginLeft: 180
  },
  input: {
    display: 'none',
  },
});


class CreateButton extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
            <Button variant="contained" className={classes.button}>
             CREATE CALENDAR
             </Button>
      </div>
       );
  }

}

CreateButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateButton);