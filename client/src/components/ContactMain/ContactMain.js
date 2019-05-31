import React, {Component} from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./contact.scss";


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
class ContactForm extends Component {

  state = {
    name: '',
    email: '',
    message: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;

    const validateEmail = () => {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!email.match(filter)) {
        alert("Please enter a valid email.");
        } else {
     
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
}
validateEmail();

  }
  resetForm = () => {
    document.getElementById('contact-form').reset();

  }

  render() {
    const { classes } = this.props;
    return (
    <div className ={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <form className={classes.container} noValidate autoComplete="off" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="filled"
            />
            <br></br>

            <TextField
              required
              id="email"
              label="Email"
              className={classes.textField}
              type="email"
              autoComplete="email"
              margin="normal"
              variant="filled"
              />
            <br></br>


            <TextField
              id="message"
              label="Write message here"
              multiline
              rows="8"
              className={classes.textField}
              margin="normal"
              variant="filled"
            />
          <br></br>

            <Button type="submit" color="primary">Submit</Button>

          </form>
       </Grid>
    </Grid>
    </div>
  );
}
}
    
ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);

