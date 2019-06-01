import React from "react";
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import auth0Client from "../../Auth";
import API from '../../utils/API';
import "./createmodal.scss";

const cryptoRandomString = require("crypto-random-string");

class CreateModal extends React.Component {
	state = {
		open: false,
		calendar: {
			userId: '',
			startDate: '',
		}
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleInputChange = (name, value) => {
		const calendar = { ...this.state.calendar };
		calendar[name] = value;
		this.setState({ calendar });
	}

	handleClose = () => {
		this.setState({ open: false });
	};

	handleSubmit = (auth = false) =>  {
		const payload = { ...this.state.calendar, calendarId: cryptoRandomString(10) }
		API.saveCalendar(payload)
			.then(response => {
				console.log(response);
				if (auth) {
					return auth0Client.signIn();
				}
				this.props.history.push('/calendar');
			})
			.catch(error => console.error(error));
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
							name="first"
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
							onChange={ e => this.handleInputChange(e.target.name, e.target.value) }
							name="userId"
							value={ this.state.calendar.userId }
							margin='dense'
							id='email'
							label='Email Address'
							type='email'
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							/>
						<TextField
							onChange={ e => this.handleInputChange(e.target.name, e.target.value) }
							name="startDate"
							value={ this.state.calendar.startDate }
							margin="dense"
							id="date"
							label="Start Date"
							type="date"
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
							auth0Client.isAuthenticated()
								?	<Button onClick={this.handleSubmit}>Submit</Button>
								:	<Button onClick={ () => this.handleSubmit()} color='primary'>
										Log In and Submit
									</Button>
						}
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withRouter(CreateModal);
