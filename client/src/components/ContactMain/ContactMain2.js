import React, {Component} from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import "./contact.scss";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const styles = theme => ({
 
    root: {
      flexGrow: 1,
      background: '#4794B3',
      textAlign: 'center',
      // paddingTop: 207,
      // paddingBottom: 327,
      marginTop: 100,
      color: 'white',
      overflow: 'hidden',
      fontSize: 18
      
    }
  });


class MyForm extends Component {
 
    state = {
        name: '',
        email: '',
        message: '',
    }
 
    handleNameChange = (event) => {
        const name = event.target.value;
        this.setState({name})
    }

    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState({email})
    }

    handleMessageChange = (event) => {
        const message = event.target.value;
        this.setState({message})
    }

   
    handleSubmit = (e) => {
        // your submit logic
        e.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const email = document.getElementById('email').value;

        axios({
            method: "POST",
            url:"http://localhost:3000/send",
            data: {
              name: name,
              email: email,
              message: message
            }
          }).then((response) => {
            if (response.data.msg === 'success') {
              alert("Message has been sent.");
              this.resetForm()
      
            }else if (response.data.msg === 'fail') {
              alert("Message failed to send.")
            }
      
          })
    }
 
    render() {
        const { name, email, message } = this.state
        // const { email } = this.state;
        // const { message } = this.state;
        const { classes } = this.props
        return (
            <div className = {classes.root}>
            <Grid container spacing={24}>
            <Grid item xs={12}>
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
                className={classes.container}
                id="contact-form"
                method="POST"
            >
                  <TextValidator
                    label="Name"
                    onChange={this.handleNameChange}
                    name="name"
                    value={name}
                    validators={['required', 'isName']}
                    errorMessages={['this field is required', 'name is not valid']}
                    id="name"
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
                    id="email"
                    margin="normal"
                    variant="filled"
                />
                <br></br>

                <TextValidator
                    label="Message"
                    onChange={this.handleMessageChange}
                    name="message"
                    value={message}
                    validators={['required', 'isMessage']}
                    errorMessages={['this field is required', 'message is not valid']}
                    id="message"
                    margin="normal"
                    variant="filled"
                    multiline
                    rows="8"

                />
                <br></br>

                <Button type="submit">Submit</Button>
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
  

