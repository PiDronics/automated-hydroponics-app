import React from 'react';
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

function toolbar_top(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        PiDronics Monitoring System
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Configuration</Button>
                    <Button color="inherit">Support</Button>
                    <Button color="inherit">About</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

toolbar_top.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(toolbar_top);