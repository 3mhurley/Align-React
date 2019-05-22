import React, { Component } from "./node_modules/react";
import PropTypes from "./node_modules/prop-types";
import { withStyles } from "./node_modules/@material-ui/core/styles";
import Button from "./node_modules/@material-ui/core/Button";
import { Redirect, withRouter } from "./node_modules/react-router-dom";
import "./aboutBtn.scss";

const styles = theme => ({
	button: {
		margin: theme.spacing.unit
	},
	input: {
		display: "none"
	}
});

class AboutButton extends Component {
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
			return <Redirect to = '/info' />
		}
	}


	render() {
		const { classes } = this.props;
		return (
			<div>
				{this.renderRedirect()}
				<Button id="aboutBtn" className={classes.button} onClick ={this.setRedirect}>About
				</Button>
			</div>
		);
	}
}

AboutButton.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutButton);
