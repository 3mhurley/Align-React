import React from 'react';
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

const JoinButton = props => {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" className={classes.button}>
        JOIN CALENDAR  
      </Button>
   
    </div>
  );
}

JoinButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JoinButton);