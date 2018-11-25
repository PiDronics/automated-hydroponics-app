import React, { Component } from 'react';
import SystemCard from '../system/SystemCard';
import firebase from '../../fire';

class Dashboard extends Component{

    constructor() {
        super();

        this.state = {
            systems: [],
            error_message: ""
        }

    }

    /**
     * @memberOf App
     * @method componentDidMount - Standard React.js method
     *
     * */
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                var uid = user.uid;

                const dataRef = firebase.database().ref("users/"+uid+"/systemCard");

                dataRef.on("value", snap => {
                    this.processDBData(snap);
                }, error => {
                    this.setState({
                        error_message: error.message
                    })
                });
            }
            else{
                this.setState({
                    error_message: "User is not signed in."
                })
            }
        });
    }

    extractData(obj) {
        let extracted = obj.val();
        extracted["systemId"] = obj.key;
        return extracted;
    }

    processDBData(fb_obj) {
        const systems = [];
        fb_obj.forEach((system) => {
            systems.push(this.extractData(system));
        });

        if(systems.length>0){
            this.setState({
                systems: systems,
                error_message: ""
            });
        }
        else{
            this.setState({
                error_message: "You have no systems under this account."
            });
        }
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
                <div className="row mt-2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="container-fluid d-flex justify-content-center">
                                <p className="text-danger text-center">{this.state.error_message}</p>
                            </div>
                        </div>
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