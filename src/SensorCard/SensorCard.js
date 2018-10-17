import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DataTable from "../DataTable/DataTable";
import Divider from "@material-ui/core/Divider/Divider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const styles = {
    card: {
        width: '90vw',
        margin: '16px auto',
        textAlign: 'center',
    },
    title: {
        fontSize: 14,
    },
    innerContent: {
        padding: '10px 0px 10px 0px',
        boxShadow: 'none !important'
    },
    subtitle: {
        marginBottom: 12,
    },
};


const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
});

/**
 * @method sensorCard - React function component. Renders a Material Design card containing controller information
 * and a table
 * @param {Object} props
 * */
function sensorCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent className={classes.innerContent}>
                    <MuiThemeProvider theme = {theme}>
                        <Typography variant="h5" component="h2">
                            Monitoring Unit: {props.device}
                        </Typography>
                    </MuiThemeProvider>
                    <MuiThemeProvider theme = {theme}>
                        <Typography className={classes.subtitle} color="textSecondary">
                            (Values are updated every 2 minutes)
                        </Typography>
                    </MuiThemeProvider>
                    <Divider />
                    <DataTable sensors={props.sensors}/>
                </CardContent>
            </Card>
        </div>
    );
}

sensorCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(sensorCard);