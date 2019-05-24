import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
import "./titleBtn.scss";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class TitleButton extends Component {
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
            return <Redirect to='/' />
        }
    }

    render() {
        const {classes} = this.props;
        return(
            <div>
                {this.renderRedirect()}
                <Button id="navTitle" className={classes.button} onClick={this.setRedirect}>
                    Simple Calendar Sharing...Period.
                </Button>
            </div>
        )
    }
}

TitleButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleButton);