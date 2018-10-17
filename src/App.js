import React, { Component } from 'react';
import './App.css';
import ToolbarTop from "./ToolbarTop/ToolbarTop";
import SensorCard from "./SensorCard/SensorCard";
import firebase from 'firebase';
import fire from './fire';

class App extends Component {

    constructor(){
        super();

        this.state = {
            sensors: [],
            device: ""
        };
    }

    updateData(e){
        e.preventDefault();
        var device = this.state.device;
        const dataRef = fire.database().ref("systems").child(device);
        dataRef.child('conc').child("avg").set( parseFloat(this.inputEl.value));
        this.inputEl.value = '';
    }

    addData(e){
        e.preventDefault();
        var device = this.state.device;
        const dataRef = fire.database().ref("systems").child(device);
        dataRef.child(this.inputEl3.value).child("allData").push({
            reading: this.inputEl2.value,
            time: firebase.database.ServerValue.TIMESTAMP
        });
        this.inputEl2.value = '';
    }

    calculateVals = function(){
        var device = this.state.device;
        var last24hr = new Date().getTime()-(24 * 3600 * 1000);
        const dataRef = fire.database().ref("systems").child(device);
        const sensors = [];
        dataRef.once('value', function(snap){
            snap.forEach(function(sensor){
                sensors.push(sensor.key);
            });
        });
        sensors.forEach(function(sensor){
            dataRef.child(sensor+"/allData").orderByChild('time').startAt(last24hr).on('value' , function(snap){
                var readingsArr = [];
                snap.forEach(function(n){
                    readingsArr.push(parseFloat(n.val()["reading"]));
                });
                if(readingsArr.length>0){
                    var min = Math.min.apply(null,readingsArr);
                    var max = Math.max.apply(null,readingsArr);
                    var avg=0;
                    for(var x in readingsArr){
                        avg += readingsArr[x];
                    }
                    avg = (avg/readingsArr.length).toFixed(2);
                    dataRef.child(sensor).child("current").set(readingsArr[readingsArr.length-1]);
                    dataRef.child(sensor).child("min").set(parseFloat(min));
                    dataRef.child(sensor).child("max").set(parseFloat(max));
                    dataRef.child(sensor).child("avg").set(parseFloat(avg));
                }
                else{
                    dataRef.child(sensor).child("current").set(0);
                    dataRef.child(sensor).child("min").set(0);
                    dataRef.child(sensor).child("max").set(0);
                    dataRef.child(sensor).child("avg").set(0);
                }
            });
        });
    }

    componentDidMount(){
        //get some device here
        var device = "pi-1";
        this.setState({
            device: device,
        })
        //

        function getSensorName(key){
            return key==="conc" ? "Nutrient Concentration (g/l)"
                : key==="temp" ? "Water Temperature (C)"
                : key==="oxygen" ? "Dissolved Oxygen (cm3/l)"
                : key==="humidity" ? "Humidity (%)"
                : "Unavailable";
        }

        const dataRef = fire.database().ref("systems").child(device);

        dataRef.on("value", snap => {
            var sensorData = [];
            var count = 0;
            snap.forEach(function(sensor){
                if(sensor.child("status").val()){
                    sensorData[count] = {
                        id:getSensorName(sensor.key)
                    }
                    sensor.forEach(function(val){
                        sensorData[count][val.key] = val.val();
                    });
                    count++;
                }
            });
            this.calculateVals();
            this.setState({
                sensors: sensorData
            })
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
                    <br/>
                    <form onSubmit={this.addData.bind(this)}>
                        <label>Add data readings to temp for calculations</label>
                        <input type="text" ref={ el => this.inputEl2 = el }/>
                        <select name="sensor" id="sensor" ref={s => this.inputEl3 = s} value={this.state.dropdown}>
                            <option value="temp">temp</option>
                            <option value="conc">conc</option>
                            <option value="oxygen">oxygen</option>
                            <option value="humidity">humidity</option>
                            <option value="ph">ph</option>
                        </select>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        );
        //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This might work...'));
    }
}

export default App;
