import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
// import "./contactBtn.scss"


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class ContactButton extends Component {
  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
			this.setState({
				redirect: false
			})
      return <Redirect to  = '/contact' />

    }
  }

  render() {
  const { classes } = this.props;
    return (
      <div>
          {this.renderRedirect()}
        <Button id="contactBtn" className={classes.button} onClick={this.setRedirect}>Contact</Button>
    </div>
    );
  }
}

ContactButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactButton);