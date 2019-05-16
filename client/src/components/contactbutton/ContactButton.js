import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class ContactButton extends Component {
  render() {
  const { classes } = this.props;
    return (
      <div>
          <Button className={classes.button}>Contact Us</Button>
    </div>
    );
  }
}

ContactButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactButton);