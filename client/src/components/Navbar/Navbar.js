import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TitleButton from '../TitleButton/TitleButton';
import AboutButton from '../AboutButton/AboutButton';
import ContactButton from '../ContactButton/ContactButton';
import DemoButton from '../DemoButton/DemoButton'
import auth0Client from '../../Auth';
import UserAuth from '../UserAuth/UserAuth';
import NavbarLogo from '../NavbarLogo/NavbarLogo'
// import './navbar.scss';
//styles
const styles = {
	root: {
		flexGrow: 1,
		background: "#4794B3",
		color: "white"
	},
	grow: {
		flexGrow: 1,
		color: "white",
		background: "#4794B3"
	}
};
class Navbar extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position='static' className={classes.root}>
					<Toolbar>
						<NavbarLogo />
						<TitleButton />
						<AboutButton />
						<ContactButton />
						<DemoButton />
						<UserAuth />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
Navbar.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Navbar);
