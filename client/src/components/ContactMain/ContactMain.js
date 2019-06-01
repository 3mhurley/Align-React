import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import "./contact.scss";
import "./contactsubmitBtn.scss";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
const styles = theme => ({

  root: {
    flexGrow: 1,
    background: 'white',
    textAlign: 'center',
    marginTop: 100,
    color: 'white',
    overflow: 'hidden',
    fontSize: 18

  }
});

class MyForm extends Component {

  initialState = {
    name: '',
    email: '',
    message: '',
  };

  state = this.initialState

  handleNameChange = (event) => {
    const name = event.target.value;
    this.setState({ name })
  }

  handleEmailChange = (event) => {
    const email = event.target.value;
    this.setState({ email })

  }

  handleMessageChange = (event) => {
    const message = event.target.value;
    this.setState({ message })

  }

  handleReset = () => {
    this.setState(() => this.initialState)
  }


  handleSubmit = (event) => {
    // your submit logic
    console.log("About to send email")
    event.preventDefault();
    const name = document.getElementById('contactFormName').value;
    const message = document.getElementById('contactFormMessage').value;
    const email = document.getElementById('contactFormEmail').value;


    axios.post('/rpc/send_contact_email', {
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then((response) => {
      console.log("Here is the response", response.data);
      // this.resetForm();
      // if (response.msg === 'success') {
      //   alert("Message has been sent.");
      //   this.resetForm()

      // } else if (response.data === 'fail') {
      //   alert("Message failed to send.")
      // }

    })
  }


  render() {
    const { name, email, message } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
              onError={errors => console.log(errors)}
              onReset={this.handleReset}
              className={classes.container}
              id="contact-form"
              method="POST"
              action="/rpc/send_contact_email"
            >
              <TextValidator
                label="Name"
                onChange={this.handleNameChange}
                name="name"
                value={name}
                validators={['required']}
                errorMessages={['this field is required']}
                id="contactFormName"
                margin="normal"
                variant="filled"
              />
              <br></br>
              <TextValidator
                label="Email"
                onChange={this.handleEmailChange}
                name="email"
                value={email}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
                id="contactFormEmail"
                margin="normal"
                variant="filled"
              />
              <br></br>
              <TextValidator
                label="Message"
                onChange={this.handleMessageChange}
                name="message"
                value={message}
                validators={['required']}
                errorMessages={['this field is required']}
                id="contactFormMessage"
                margin="normal"
                variant="filled"
                multiline
                rows="7"
              />
              <br></br>
              <Button type="submit" id="contactsubmitBtn">Send</Button>
            </ValidatorForm>
          </Grid>
        </Grid>
      </div>
    );
  }
}

MyForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyForm);


