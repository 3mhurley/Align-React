import React, { Component } from "react";
import PropTypes from "prop-types";
import API from "../utils/API";
import { Link } from "react-router-dom";


import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CalApp from "../components/Calendar/Calendar";
import Navbar from "../components/Navbar/Navbar";
<<<<<<< HEAD
import auth0Client from '.././Auth';
=======
import WidgetThingy from "../components/WidgetThingy/WidgetThingy";
>>>>>>> bef334dea1e364d0d6096f385bac104e4c00cb28

const flex = {
	display: "flex",
	alignItems: "baseline",
	justifyContent: "space-evenly"
};

const styles = theme => ({
	root: {
		flexGrow: 1,
		maxWidth: 1000
	},
	paper: {
		...flex,
		// width: "90%",
		padding: theme.spacing.unit * 2,
		// margin: theme.spacing.unit,
		textAlign: "center"
	},
	card: {
		...flex,
		// width: "90%",
		padding: theme.spacing.unit * 2,
		// margin: theme.spacing.unit
	}
});

class Calendar extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<div>
					<Navbar />
					{/* <label className="mr-2 text-black">{auth0Client.getProfile().name}</label> */}
				</div>
				<br />
				<div className={classes.root}>
					<Grid container spacing={16}>
						<Grid item xs={9}>
							<Paper className={classes.paper}>
								<div>
									<CalApp />
								</div>
							</Paper>
						</Grid>
						<Grid item xs={3}>
							<div>
								<WidgetThingy />
							</div>
						</Grid>
					</Grid>
				</div>
				{/* <Card className={classes.root}>
					<CardContent className={classes.card}>
						<div>
							<CalApp />
						</div>
					</CardContent>
				</Card> */}
			</div>
		);
	}
}

Calendar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Calendar);
