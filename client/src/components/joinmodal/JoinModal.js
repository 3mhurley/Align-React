import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import auth0Client from '../../Auth';

class JoinModal extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    JOIN CALENDAR
        </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Join A Calendar</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            If you have been invited to join a calendar enter your information.
            </DialogContentText>
                        <TextField
                            margin='dense'
                            id='cal-id'
                            label='Calendar ID'
                            type='string'
                            fullWidth
                        />
                        <TextField
                            margin='dense'
                            id='guest-name'
                            label='Guest Name'
                            type='string'
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">
                            Cancel
<<<<<<< HEAD
                        </Button>
                        {
			                !auth0Client.isAuthenticated() &&
							<Button onClick={this.handleClose} color='primary' 	onClick={auth0Client.signIn}>Subscribe
							</Button>
						}
=======
            </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Submit
            </Button>
>>>>>>> aaa9d35a0bac2b6c748785c63486c77924560fec
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default (JoinModal);