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
// import Container from "@material-ui/core/Container";
import CalApp from "../components/Calendar/Calendar";
import SubmitCalButton from "../components/SubmitCalButton/SubmitCalButton";
import Navbar from "../components/Navbar/Navbar";
import auth0Client from '.././Auth';
import WidgetThingy from "../components/WidgetThingy/WidgetThingy";
import "./livecal.scss";

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
		// width: "1000",
		padding: theme.spacing.unit * 2,
		margin: theme.spacing.unit,
		textAlign: "center",
		// margin: 'auto',
		// alignItems: 'center'
	},
	card: {
		...flex,
		// width: "90%",
		// padding: theme.spacing.unit * 2,
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
					<Grid container spacing={24}>
						<Grid item xs={6}>
							<Paper className={classes.paper} id="liveCal" >
								<div id="calCont">
									<CalApp />
								</div>
							</Paper>
						</Grid>
						<Grid item xs={6} >
							<div id="widgetThingy">
								<WidgetThingy />
							</div>
							<div>
								<SubmitCalButton />
							</div>
						</Grid>
							{/* <WidgetThingy /> */}

							{/* <Grid item xs={3} direction="row"> */}
							{/* <Paper className={classes.paper}> */}
							{/* <div id="widgetThingy">
								<WidgetThingy />
							</div> */}
							{/* </Paper> */}
							{/* </Grid> */}

						{/* </Grid> */}
						{/* <Grid item xs={6}>
							<div id="widgetThingy">
								<WidgetThingy />
							</div>
						</Grid> */}
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
