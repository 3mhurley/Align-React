import React from './node_modules/react';
import Button from './node_modules/@material-ui/core/Button';
import TextField from './node_modules/@material-ui/core/TextField';
import Dialog from './node_modules/@material-ui/core/Dialog';
import DialogActions from './node_modules/@material-ui/core/DialogActions';
import DialogContent from './node_modules/@material-ui/core/DialogContent';
import DialogContentText from './node_modules/@material-ui/core/DialogContentText';
import DialogTitle from './node_modules/@material-ui/core/DialogTitle';

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
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
            </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Subscribe
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default JoinModal;