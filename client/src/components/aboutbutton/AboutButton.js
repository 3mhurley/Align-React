import React, {Component} from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import Button from './node_modules/@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class AboutButton extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Button className={classes.button}>About Us</Button>
      </div>
    );
  }
}

AboutButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutButton);