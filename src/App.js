import React, { Component } from 'react';
import './App.css';
import ToolbarTop from "./ToolbarTop/ToolbarTop";
import SensorCard from "./SensorCard/SensorCard";
import fire from './fire';

class App extends Component {

    constructor(){
        super();

        this.dataRef = fire.database().ref("systems").child('pi-1');

        this.state = {
            sensors: [],
            device: ""
        }
    }

    updateData(e){
        e.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
        this.dataRef.child('conc').child('avg').set( parseFloat(this.inputEl.value));
        this.inputEl.value = ''; // <- clear the input
    }

    componentDidMount(){
        //get some device here
        var device = "pi-1";
        this.setState({
            device: device
        });
        //

        var sensorData = [];
        var count = 0;
        this.dataRef.on("child_added", snap => {
            var status = snap.child("status").val();

            if(status){
                sensorData[count] = {};
                snap.forEach(function(val){
                    sensorData[count][val.key] = val.val();
                });
                sensorData[count]['id'] = snap.key;
                count++;
            }
            this.setState({
                sensors: sensorData
            });
        });
    }

    render() {
        return (
            <div className="App">
                <ToolbarTop />
                <SensorCard sensors={this.state.sensors} device={this.state.device}/>
                <div>
                    <form onSubmit={this.updateData.bind(this)}>
                        <label>Update conc avg value</label>
                        <input type="text" ref={ el => this.inputEl = el }/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        );
        //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This might work...'));
    }
}

export default App;
