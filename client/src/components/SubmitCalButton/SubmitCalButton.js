import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Redirect, withRouter } from "react-router-dom";
import "./submitCalBtn.scss";

const styles = theme => ({
	button: {
		margin: theme.spacing.unit
	},
	input: {
		display: "none"
	}
});

class SubmitCalButton extends Component {
	state = {
		redirect: false
	};

	setRedirect = () => {
		alert("Availability Submitted!");

		this.setState({
			redirect: true
		});
	};

	renderRedirect = () => {
		if (this.state.redirect) {
			this.setState({
				redirect: false
			});
			return <Redirect to='/' />;
		}
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				{this.renderRedirect()}
				<Button
					id='submitCalBtn'
					className={classes.button}
					onClick={this.setRedirect}>
					Submit
				</Button>
			</div>
		);
	}
}

SubmitCalButton.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubmitCalButton);
