import React, { Component } from 'react';
import './App.css';
import ToolbarTop from "./ToolbarTop/ToolbarTop";
import SensorCard from "./SensorCard/SensorCard";

class App extends Component {

    render() {
        return (
            <div className="App">
                <ToolbarTop />
                <SensorCard />
            </div>
        );
        //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This might work...'));
    }
}

export default App;
