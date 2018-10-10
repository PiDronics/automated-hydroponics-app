import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        boxShadow: 'none !important'
    },
    table: {
        width: '100%',
    },
});

// let id = 0;
// function createData(sensor_type, reading, max, min, avg) {
//     id += 1;
//     return { id, sensor_type, reading, max, min, avg };
// }

//default data
// const rows = [
//     createData('Nutrient Concentration (g/l)', 10, 12, 8, 11),
//     createData('Dissolved Oxygen (cm3/l)', 10, 12, 8, 11),
//     createData('Humidity (%)', 90, 100, 50, 45),
//     createData('Water Temperature (C)', 28.0, 30.5, 24.2, 28.1),
// ];

function dataTable(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Sensor Type</TableCell>
                        <TableCell numeric>Current Reading</TableCell>
                        <TableCell numeric>Maximum Reading (24hrs)</TableCell>
                        <TableCell numeric>Minimum Reading (24hrs)</TableCell>
                        <TableCell numeric>Average Reading (24hrs)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.sensors.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell numeric>{row.current}</TableCell>
                                <TableCell numeric>{row.max}</TableCell>
                                <TableCell numeric>{row.min}</TableCell>
                                <TableCell numeric>{row.avg}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

dataTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(dataTable);