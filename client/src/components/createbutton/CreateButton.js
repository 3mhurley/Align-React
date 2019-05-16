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

const CreateButton = props => {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" className={classes.button}>
        CREATE CALENDAR  
      </Button>
   
    </div>
  );
}

CreateButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateButton);