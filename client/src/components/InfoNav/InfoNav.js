
import React, { Component } from 'react';
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
import './infonav.scss';
//styles
const styles = {
    root: {
        flexGrow: 1,
        background: "white",
        color: "#4794B3"
    },
    grow: {
        flexGrow: 1,
        color: "#4794B3",
        background: "white"
    }
};
class InfoNav extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position='static' className={classes.root}>
                    <Toolbar>
                        <TitleButton id="titleBtn" />
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
InfoNav.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(InfoNav);
