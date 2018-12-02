import React, { Component } from 'react';
import ModalGraph from '../modal/ModalGraph';
import ModalGraphEdit from '../modal/ModalGraphEdit';
import { Card, CardBody, CardTitle, Table, TableBody } from 'mdbreact';

/**
 * @class Sensor
 * @desc Gives a general overview of the data collected by this particular sensor. Automatically
 * configures the graph to display readings over the past 24 hours
 */
class Sensor extends Component{

    constructor(props){
        super(props);

        var initDate = new Date();

        this.state={
            graphStart: initDate.getTime()-(24 * 3600 * 1000),
            graphEnd: initDate.getTime()
        };

        this.graphStuff = this.graphStuff.bind(this);
    }

    /**
     * @memberOf Sensor
     * @desc Sets the date for the graph
     * @param {Object} params - An object containing the start and end times for the graph
     */
    graphStuff(params){
        this.setState({
            graphStart: params.start,
            graphEnd: params.end
        });
    }

    render(){
        return(
            <div className="col-lg-6 mb-3">
                <Card>
                    <CardBody>
                        <CardTitle id = "sensorName" className="justify-content-center d-flex">{this.props.sensorName}</CardTitle>
                        <Table>
                            <TableBody>
                                <tr>
                                    <th>Current</th>
                                    <td id = "current">{this.props.current}</td>
                                </tr>
                                <tr>
                                    <th>Minimum</th>
                                    <td id = "min">{this.props.min}</td>
                                </tr>
                                <tr>
                                    <th>Maximum</th>
                                    <td id = "max">{this.props.max}</td>
                                </tr>
                                <tr>
                                    <th>Average</th>
                                    <td id = "avg">{this.props.avg}</td>
                                </tr>
                            </TableBody>
                        </Table>
                        <div className="d-flex justify-content-around">
                            <ModalGraph title={this.props.sensorName} device={this.props.device} graphStart={this.state.graphStart} graphEnd={this.state.graphEnd}/>
                            <ModalGraphEdit callback={this.graphStuff}/>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Sensor;