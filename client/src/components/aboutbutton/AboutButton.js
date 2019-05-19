import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

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
			return <Redirect to = '/info' />
		}
	}
	
	render() {
		const { classes } = this.props;
		return (
			<div>
				{this.renderRedirect()}
				<Button className={classes.button} onClick ={this.setRedirect}>About
				</Button>
			</div>
		);
	}
}

AboutButton.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutButton);
