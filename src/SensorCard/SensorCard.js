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
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

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

function sensorCard(props) {
    const { classes } = props;
    return (
        <div>
            <Desktop>
                <Card className={classes.card}>
                    <CardContent className={classes.innerContent}>
                        <MuiThemeProvider theme = {theme}>
                            <Typography variant="h5" component="h2">
                                Monitoring Unit: {props.device}
                            </Typography>
                        </MuiThemeProvider>
                        <MuiThemeProvider theme = {theme}>
                            <Typography className={classes.subtitle} color="textSecondary">
                                (Values are updated every 5 minutes)
                            </Typography>
                        </MuiThemeProvider>
                        <Divider />
                        <DataTable sensors={props.sensors}/>
                    </CardContent>
                </Card>
            </Desktop>
            <Mobile>
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
            </Mobile>
        </div>
    );
}

sensorCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(sensorCard);