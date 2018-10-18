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

    componentDidMount(){
        const dataRef = firebase.database().ref("users/user1");

        dataRef.child("systemCard/"+this.state.id).on("value", snap => {
            var lastUpdated = "(last updated @ "+snap.child("lastUpdated").val()+")";
            var systemName = snap.child("systemName").val();

            this.setState({
                lastUpdated, systemName
            })
        });

        dataRef.child("systemData/"+this.state.id+"/sensors").on("value", snap =>{
            var sensors = [];
            snap.forEach(function(sensor){
                if(sensor.val().enabled){
                    var obj = sensor.val();
                    obj["sensorName"] = sensor.key;
                    sensors.push(obj);
                }
            });
            //this.calculateVals();
            this.setState({
                sensors:sensors
            })
        });
    };

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="container text-center">
                        <h1>{this.state.systemName}</h1>
                        <h6 className="font-italic text-muted">{this.state.lastUpdated}</h6>
                    </div>
                </div>
                <div className="row">
                    {this.state.sensors && this.state.sensors.map(sensor => {
                        return (
                            <Sensor sensorName={sensor.sensorName} key={sensor.sensorName} min={sensor.min} max={sensor.max} avg={sensor.avg} current={sensor.current}/>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default System;
