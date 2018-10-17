import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from "@material-ui/core/List/List";
import Drawer from "@material-ui/core/Drawer/Drawer";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Divider from "@material-ui/core/Divider/Divider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
});

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
    center: {
        textAlign: "center"
    }
};

class ToolbarTop extends Component {

    state = {
        bottom: false
    };

    toggleDrawer = (toggle) => () => {
        this.setState({
            bottom: toggle,
        });
    };

    render() {
        const {classes} = this.props;

        const sideList = (
            <div>
                <List>
                    <ListItem button className = {classes.center}>
                        <ListItemText primary = "Home" />
                    </ListItem>
                    <Divider />
                    <ListItem button className = {classes.center}>
                        <ListItemText primary = "Configuration" />
                    </ListItem>
                    <Divider />
                    <ListItem button className = {classes.center}>
                        <ListItemText primary = "Support" />
                    </ListItem>
                    <Divider />
                    <ListItem button className = {classes.center}>
                        <ListItemText primary = "About" />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div>

                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton id = "menu_button" onClick={this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <MuiThemeProvider theme = {theme}>
                                <Typography variant="h6" color="inherit" className={classes.grow}>
                                    PiDronics Monitoring System
                                </Typography>
                            </MuiThemeProvider>
                        </Toolbar>
                    </AppBar>
                </div>

                <Drawer
                    anchor="bottom"
                    open={this.state.bottom}
                    onClose={this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}>
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );

    }

}

ToolbarTop.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ToolbarTop);
