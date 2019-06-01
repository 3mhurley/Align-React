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

export default withRouter(JoinModal)
