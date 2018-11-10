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

    fetchData = (db_ref, location, callback_func) => {
        db_ref.child(location).on("value", snap => {
            callback_func(snap);
        });
    };

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
                const path = "systemCard/"+this.state.id;

                this.fetchData(dataRef, path, this.getSummary);
                this.fetchData(dataRef, path + "/sensors", this.getSensorData)

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
                        <h1>{this.state.systemName}</h1>
                        <h6 className="font-italic text-muted">{this.state.lastUpdated}</h6>
                    </div>
                </div>
                <div className="row">
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
