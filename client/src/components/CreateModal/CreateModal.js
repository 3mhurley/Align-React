import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import auth0Client from "../../Auth";
import "./createmodal.scss";
import $ from 'jquery';


const cryptoRandomString = require("crypto-random-string");

class CreateModal extends React.Component {
	state = {
		open: false,
		'first-name': '',
		'last-name': '',
		'email': '',
		calendarId: cryptoRandomString(10),
		'date': ''
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
		});

		$.ajax({
			method: 'POST',
			data: {
				calendarId: this.state.calendarId,
				userId: this.state.email,
				start: this.state.start
			},
			url: 'api/calendar'
		});
		// .then (function() { alert('Your new Calendar ID is: ' + this.state.calendarId) })
		// (openAlert({ message: this.state.calendarId, type: success, duration }))
	}


	render() {
		return (
			<div>
				<Button
					id="createBtn"
					variant='outlined'
					color='primary'
					onClick={this.handleClickOpen}>
						CREATE CALENDAR
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby='form-dialog-title'>
					<DialogTitle id='form-dialog-title'>Create Your Calendar</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Fill out the information below to start.
						</DialogContentText>
						<TextField
							margin='dense'
							id='first-name'
							label='First Name'
							type='string'
							fullWidth
						/>
						<TextField
							margin='dense'
							id='last-name'
							label='Last Name'
							type='string'
							fullWidth
						/>
						<TextField
							margin='dense'
							id='email'
							label='Email Address'
							type='email'
							fullWidth
						/>
						<TextField
						margin="dense"
							id="date"
							label="Start Date"
							type="date"
							defaultValue="Calendar Start Date"
							InputLabelProps={{
								shrink: true,
							}}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color='secondary'>
							Cancel
						</Button>
						{
							!auth0Client.isAuthenticated() &&
							<Button onClick={auth0Client.signIn}color='primary'>
							Submit
							</Button>
						}
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default (CreateModal);
