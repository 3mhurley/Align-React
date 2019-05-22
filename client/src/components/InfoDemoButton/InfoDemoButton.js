import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class InfoDemoButton extends Component {
  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  rednerRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to = '/info/demo'>
      </Redirect>
    }
  }

  render() {
  const { classes } = this.props;
  return (
    <div>
      {this.rednerRedirect()}
      <Button variant="contained" color="primary" className={classes.button} onClick={this.setRedirect}>
        DEMO
      </Button>
    </div>
    );
  }
}

InfoDemoButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoDemoButton);