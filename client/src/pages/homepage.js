import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Homepage(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            {/* Navbar */}
            <AppBar position="static" xs={12}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Simple Calendar Sharing
          </Typography>
                    <Button href="#text-buttons" className={classes.button}>About Us</Button>
                    <Button href="#text-buttons" className={classes.button}>Contact Us</Button>
                    <Button href="#text-buttons" className={classes.button}>Demo</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {/* Page Container */}

        </div>

    );
}

Homepage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homepage);