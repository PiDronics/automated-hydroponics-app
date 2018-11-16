import React, { Component } from 'react';
import SystemCard from '../system/SystemCard';
import firebase from '../../fire';

class Dashboard extends Component{

    constructor() {
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
        var user = firebase.auth().currentUser;
        var uid = "";
        if(user!=null){
            uid = user.uid;
        }

        const dataRef = firebase.database().ref("users/"+uid+"/systemCard");

        dataRef.on("value", snap => {
            var systems = [];
            snap.forEach(function(system){
                // TODO: Have a check in place to ensure this is an object
                // TODO: Check to ensure that, if "system" is an object, that it has all the necessary keys
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
        if(this.state.systems.length>0){
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
        else{
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
                        <div className="container-fluid d-flex justify-content-center">
                            <p className="text-danger">You have no systems under this account.</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Dashboard;