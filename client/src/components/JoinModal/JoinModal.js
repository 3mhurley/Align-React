import React from "react"
import { withRouter } from "react-router-dom"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import auth0Client from "../../Auth"
import API from "../../utils/API"
import "./joinmodal.scss"

class JoinModal extends React.Component {
	state = {
		open: false,
		join: {
			calendarId: "",
			userId: ""
		}
	}

	handleClickOpen = () => {
		this.setState({ open: true })
	}

	handleInputChange = (name, value) => {
		const join = { ...this.state.join }
		join[name] = value
		this.setState({ join })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	//on submit send payload to db
	handleSubmit = () => {
		const payload = this.state.join
		sessionStorage.setItem("calId", payload.calendarId)
		sessionStorage.setItem("userId", payload.userId)
		API.createUser(payload)
			.then(response => {
				console.log(response)
				//reroute to calendar on submit
				this.props.history.push("/calendar")
			})
			.catch(error => console.error(error))
	}

	render() {
		return (
			<div>
				<Button id='joinBtn' variant='outlined' color='primary' onClick={this.handleClickOpen}>
					JOIN CALENDAR
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby='form-dialog-title'
				>
					<DialogTitle id='form-dialog-title'>Join A Calendar</DialogTitle>
					<DialogContent>
						<DialogContentText>
							If you have been invited to join a calendar enter your information.
						</DialogContentText>
						<TextField
							onChange={e => this.handleInputChange(e.target.name, e.target.value)}
							name='calendarId'
							value={this.state.join.userId}
							margin='dense'
							id='cal-id'
							label='Calendar ID'
							type='string'
							fullWidth
							// InputLabelProps={{
							// 	shrink: true
							// }}
						/>
						<TextField 
							margin='dense' 
							id='guest-name' 
							label='Guest Name' 
							type='string' 
							fullWidth
						/>
						<TextField
							onChange={e => this.handleInputChange(e.target.name, e.target.value)}
							name='userId'
							value={this.state.join.userId}
							margin='dense'
							id='cal-id'
							label='Email Address'
							type='string'
							fullWidth
							// InputLabelProps={{
							// 	shrink: true
							// }}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color='secondary'>
							Cancel
						</Button>
						{auth0Client.isAuthenticated() ? (
							<Button onClick={this.handleSubmit}>Submit</Button>
						) : (
							<Button onClick={() => this.handleSubmit()} color='primary'>
								Log In and Submit
							</Button>
						)}
					</DialogActions>
				</Dialog>
			</div>
		)
	}
}

export default withRouter(JoinModal)
