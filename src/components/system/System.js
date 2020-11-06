import React, { Component } from 'react';
import Sensor from '../sensor/Sensor';
import firebase from '../../fire';

/**
 * @class System
 * @desc Displays all relevant information for a single system. This includes the name, last updated and
 * all the connected sensors to the raspberry pi unit
 */
class System extends Component{

    constructor(props){
        super();

        this.state = {
            id: props.match.params.id,
            lastUpdated: "",
            sensors: [],
            systemName: "",
            error_message: ""
        };

        this.getSummary = this.getSummary.bind(this);
        this.getSensorData = this.getSensorData.bind(this);
    }


    /**
     * @memberOf System
     * @desc Retrieves summary information about this system and populates the component state with it
     * @param {DataSnapshot} snap - A Firebase reference to general overview information about this system
     */
    getSummary(snap) {
        var lastUpdated = "(last updated @ "+snap.child("lastUpdated").val()+")";
        var systemName = snap.child("systemName").val();

        this.setState({
            lastUpdated, systemName
        })
    };

    /**
     * @memberOf System
     * @desc Retrieves a list of all sensors under this system and adds it to the global list of sensors
     * @param {DataSnapshot} snap - A Firebase reference to the list of all sensors
     */
    getSensorData(snap) {
        var sensors = [];
        snap.forEach((sensor) => {
            if(sensor.val().enabled === "true"){
                console.log("enabled", sensor.val());
                var obj = sensor.val();
                obj["sensorName"] = sensor.key;
                sensors.push(obj);
            }
        });

        if(sensors.length>0){
            this.setState({
                error_message: ""
            });
        }
        else{
            console.log("sensors", sensors);
            this.setState({
                error_message: "There are no enabled sensors in this system"
            });
        }

        this.setState({
            sensors:sensors
        })
    };

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                var uid = user.uid;

                const dataRef = firebase.database().ref("users/"+uid);

                dataRef.child("systemCard/"+this.state.id).on("value", snap => {
                    console.log("systemCard", snap);
                    this.getSummary(snap);
                },error => {
                    this.setState({
                        error_message: error.message
                    });
                });

                // dataRef.child("systemData/"+this.state.id + "/sensorData").on("value", snap => {
                dataRef.child("systemCard/"+this.state.id + "/sensors").on("value", snap => {
                    console.log("sensor data", snap);
                    this.getSensorData(snap);
                    console.log("sensor data weewee", this.getSensorData(snap));
                },error => {
                    this.setState({
                        error_message: error.message
                    });
                });

            } else {
                this.props.history.push("/");
            }
        });
    };

    render(){
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="container mt-5">
                    <div className="row mt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="container-fluid text-center">
                                    <h1 id = "systemName">{this.state.systemName}</h1>
                                    <h6 id = "lastUpdated" className="font-italic text-muted">{this.state.lastUpdated}</h6>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="container-fluid d-flex justify-content-center">
                                            <p className="text-danger text-center">{this.state.error_message}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id = "sensorList">
                                {this.state.sensors && this.state.sensors.map(sensor => {
                                    return (
                                        <Sensor sensorName={sensor.sensorName} key={sensor.sensorName} min={sensor.min} max={sensor.max} avg={sensor.avg} current={sensor.current} device={this.state.id}/>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default System;
