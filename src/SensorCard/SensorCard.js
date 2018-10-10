import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DataTable from "../DataTable/DataTable";
import Divider from "@material-ui/core/Divider/Divider";

const styles = {
    card: {
        width: '65%',
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

function sensorCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardContent className={classes.innerContent}>
                <Typography variant="h5" component="h2">
                    Monitoring Unit: {props.device}
                </Typography>
                <Typography className={classes.subtitle} color="textSecondary">
                    (Values are updated every 2 minutes)
                </Typography>
                <Divider />
                <DataTable sensors={props.sensors}/>
            </CardContent>
        </Card>
    );
}

sensorCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(sensorCard);