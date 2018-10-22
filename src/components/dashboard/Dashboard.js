import React, { Component } from 'react';
import SystemCard from '../system/SystemCard';
import firebase from '../../fire';

class Dashboard extends Component{

    constructor(){
        super();

        this.state = {
            systems: []
        }
    }

    /**
     * @memberOf App
     * @method componentDidMount - Standard React.js method
     *
     * */
    componentDidMount(){
        //get some device here
        var device = "pi-2";
        this.setState({
            device: device,
        })

        const dataRef = firebase.database().ref("users/user1/systemCard");

        dataRef.on("value", snap => {
            var systems = [];
            snap.forEach(function(system){
                var obj = system.val();
                obj["systemId"] = system.key;
                systems.push(obj);
            });

            this.setState({
                systems:systems
            })
        });
    }
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="container-fluid text-center">
                        <h2>PiDronics Monitoring System</h2>
                        <p>Manage complicated hydroponic farms with ease!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="container-fluid">
                        <h2 className="text-center">Systems</h2>
                    </div>
                </div>
                <div className="row">
                    {this.state.systems && this.state.systems.map(system => {
                        return(
                            <SystemCard system={system} key={system.systemId}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Dashboard;