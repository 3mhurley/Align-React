import React, { Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import "./contact.scss";



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});


class FilledTextFields extends Component {
  state = {
    name: '',
    multiline: 'Controlled',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24}>
      <Grid item xs={12}>
      <form className={classes.container} noValidate autoComplete="off" id="nameField" >
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          // variant="outlined"
        />
        </form>
       </Grid>

       <Grid item xs={12}>
       <form className={classes.container} noValidate autoComplete="off" id="emailField">

        <TextField
          required
          id="email"
          label="Email"
          defaultValue="Email"
          className={classes.textField}
          margin="normal"
          // variant="outlined"
        />
        </form>
        </Grid>

        <Grid item xs={12}>
       <form className={classes.container} noValidate autoComplete="off" id="messageField">

        <TextField
          id="message"
          // label="Multiline"
          multiline
          rows="10"
          defaultValue="Please write message here"
          className={classes.textField}
          margin="normal"
          // variant="outlined"
        />

      </form>
      </Grid>
      </Grid>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);