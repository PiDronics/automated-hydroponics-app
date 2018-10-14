import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MediaQuery from 'react-responsive';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

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

function dataTable(props) {
    const { classes } = props;
    return (
        <div>
            <Desktop>
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
            </Desktop>
            <Mobile>
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
            </Mobile>
        </div>
        
    );
}

dataTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(dataTable);