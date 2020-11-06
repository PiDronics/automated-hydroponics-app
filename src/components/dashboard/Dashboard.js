import React, { Component } from 'react';
import SystemCard from '../system/SystemCard';
import firebase from '../../fire';

/**
 * @class Dashboard
 * @desc Shows a collection of all Raspberry Pi systems that monitor data. Allows the user to navigate into each pi
 * system and view data
 */
class Dashboard extends Component{

    constructor() {
        super();

        this.state = {
            systems: [],
            error_message: ""
        }

    }

    /**
     * @memberOf Dashboard
     * @desc Reads all raspberry pi systems from the Firebase Database and adds it to the list of systems to be
     * displayed.
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

    /**
     * @memberOf Dashboard
     * @desc - Adds the UID a that identifies this object inside of the object itself
     * @param {DataSnapshot} obj - A reference to a specific pi system
     * @return {Object} extracted - The object will al previous data plus the UID
     */
    extractData(obj) {
        let extracted = obj.val();
        extracted["systemId"] = obj.key;
        return extracted;
    }

    /**
     * @memberOf Dashboard
     * @desc All general information for each pi owned by a user is added to a list of systems to be displayed
     * @param {DataSnapshot} fb_obj - A reference to all pi systems Objects containing general information about
     * those systems
     */
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
                <div className="container mt-5">
                    <div className="row mt-5">
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
                    </div>
                </div>
            </div>
            </div>

        );
    }
}

export default Dashboard;