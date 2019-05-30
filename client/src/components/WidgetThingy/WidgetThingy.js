import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import API from "../../utils/API";

const styles = theme => ({
	card: {
		maxWidth: 400
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	actions: {
		display: "flex"
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: "rotate(180deg)"
	},
	avatar: {
		backgroundColor: red[500]
	}
});

class AvailabilityCard extends React.Component {
	state = { 
		expanded: false,
		calendarId: '',
		calendarUserList: [],
		userArray: []
	};

	loadUsers = id => {
		API.getUsers(id)
			.then(res =>
				this.setState({
					calendarUserList: res.getUsers
				})
				).catch(err => console.log(err));
	};

	// loadCalId = id => {
	// 	API.getCalId(id)
	// 		.then(res => 
	// 			this.setState({
	// 				calendarId: res.calendarId
	// 			})
	// 		).catch(err => console.log(err));
	// };

	// loadUsers = id => {
	// 	API.getUsers(id)
	// 		.then(res =>
	// 			this.setState({
	// 				users: res.users
	// 			})
	// 		).catch(err => console.log(err));
	// };

	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
	};

	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.card}>
				<CardHeader
					title='Availability'
					subheader='Who and When'
				/>
				<CardMedia
					className={classes.media}
					// image='/static/images/cards/paella.jpg'
					title='Availability'
				/>
				<CardContent>
					<Typography component='p'>
						Below is a list of users on this calendar:
					</Typography>
				</CardContent>
				<CardContent>
					<Typography component='p'>
						{this.state.userArray}
					</Typography>
				</CardContent>
				<CardContent>
					<Typography component='p'>
						CALENDAR ID: {this.state.calendarId}
					</Typography>
				</CardContent>
				<Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
					
				</Collapse>
			</Card>
		);
	}
}

AvailabilityCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AvailabilityCard);
