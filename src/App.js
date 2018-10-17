import React, { Component } from 'react';
import './App.css';
import ToolbarTop from "./ToolbarTop/ToolbarTop";
import SensorCard from "./SensorCard/SensorCard";
import firebase from 'firebase';
import fire from './fire';

/**
 * @class App
 * Main Application Component
 * */
class App extends Component {

    /**
     * Initializes the React Application and sets state for usage
     * */
    constructor(){
        super();


        this.state = {
            sensors: [],
            device: ""
        };
    }

    /**
     * @memberOf App
     * @method updateData - updates a value in firebase
     * @param {Event} e - Default event
     * @return none
     * */
    updateData(e){
        e.preventDefault();
        var device = this.state.device;
        const dataRef = fire.database().ref("systems").child(device);
        dataRef.child('conc').child("avg").set( parseFloat(this.inputEl.value));
        this.inputEl.value = '';
    }

    /**
     * @memberOf App
     * @method addData - Adds a new record to firebase
     * @param {Event} e - Default event
     * @return none
     * */
    addData(e){
        e.preventDefault();
        var device = this.state.device;
        const dataRef = fire.database().ref("systems").child(device);
        dataRef.child('temp').child("allData").push({
            reading: this.inputEl2.value,
            time: firebase.database.ServerValue.TIMESTAMP
        });
        this.calculateVals();
        this.inputEl2.value = '';
    }

    /**
     * @memberOf App
     * @method calculateVals - Pulls data from firebase and re-calculates the minimum, maximum and average values
     * @return none
     *
     * */

    calculateVals = function(){
        var device = this.state.device;
        var last24hr = new Date().getTime()-(24 * 3600 * 1000);
        const dataRef = fire.database().ref("systems").child(device);
        dataRef.child("temp/allData").orderByChild('time').startAt(last24hr).on('value' , function(snap){
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
                dataRef.child('temp').child("current").set(readingsArr[readingsArr.length-1]);
                dataRef.child('temp').child("min").set(parseFloat(min));
                dataRef.child('temp').child("max").set(parseFloat(max));
                dataRef.child('temp').child("avg").set(parseFloat(avg));
            }
            else{
                dataRef.child('temp').child("current").set(0);
                dataRef.child('temp').child("min").set(0);
                dataRef.child('temp').child("max").set(0);
                dataRef.child('temp').child("avg").set(0);
            }
        });
    };


    /**
     * @memberOf App
     * @method componentDidMount - Standard React.js method
     *
     * */
    componentDidMount(){
        //get some device here
        var device = "pi-1";
        this.setState({
            device: device,
        });

        /**
         * @memberOf App
         * @method getSensorName - Maps a firebase name to a sensor name
         * @param {string} key - The abbreviation to be converted
         * @return {string} result
         * */

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
                        id: getSensorName(sensor.key)
                    };
                    sensor.forEach(function(val){
                        sensorData[count][val.key] = val.val();
                    });
                    count++;
                }
            });
            this.setState({
                sensors: sensorData
            })
        });
    }

    /**
     * @memberOf App
     * @method render - Initializes and renders UI components on the screen
     *
     * */
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
                    <form onSubmit={this.addData.bind(this)}>
                        <label>Add data readings to temp for calculations</label>
                        <input type="text" ref={ el => this.inputEl2 = el }/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
