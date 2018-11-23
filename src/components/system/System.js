import React, { Component } from 'react';
import Sensor from '../sensor/Sensor';
import firebase from '../../fire';

class System extends Component{

    constructor(props){
        super();

        this.state = {
            id: props.match.params.id,
            lastUpdated: "",
            sensors: [],
            systemName: ""
        }
    }


    getSummary = (snap) => {
        var lastUpdated = "(last updated @ "+snap.child("lastUpdated").val()+")";
        var systemName = snap.child("systemName").val();

        this.setState({
            lastUpdated, systemName
        })
    };

    getSensorData = (snap) => {
        var sensors = [];
        snap.forEach((sensor) => {
            if(sensor.val().enabled){
                var obj = sensor.val();
                obj["sensorName"] = sensor.key;
                sensors.push(obj);
            }
        });

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
                    this.getSummary(snap);
                });

                dataRef.child("systemData/"+this.state.id + "/sensors").on("value", snap => {
                    this.getSensorData(snap);
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
                    <div className="container-fluid text-center">
                        <h1 id = "systemName">{this.state.systemName}</h1>
                        <h6 id = "lastUpdated" className="font-italic text-muted">{this.state.lastUpdated}</h6>
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
        );
    }
}

export default System;
