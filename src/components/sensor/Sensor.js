import React from 'react';
import ModalGraph from '../modal/ModalGraph';
import { Card, CardBody, CardTitle, Table, TableBody } from 'mdbreact';

const Sensor = (props) => {
    return(
        <div className="col-lg-6 sensorCard">
            <Card>
                <CardBody>
                    <CardTitle id = "sensorName" className="justify-content-center d-flex">{props.sensorName}</CardTitle>
                    {/*<CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>*/}
                    <Table>
                        <TableBody>
                            <tr>
                                <th>Current</th>
                                <td id = "current">{props.current}</td>
                            </tr>
                            <tr>
                                <th>Minimum (24hr)</th>
                                <td id = "min">{props.min}</td>
                            </tr>
                            <tr>
                                <th>Maximum (24hr)</th>
                                <td id = "max">{props.max}</td>
                            </tr>
                            <tr>
                                <th>Average (24hr)</th>
                                <td id = "avg">{props.avg}</td>
                            </tr>
                        </TableBody>
                    </Table>
                    <ModalGraph title={props.sensorName} device={props.device}></ModalGraph>
                </CardBody>
            </Card>
        </div>
    )
}

export default Sensor;