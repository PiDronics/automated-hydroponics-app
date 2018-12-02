import React, {Component} from 'react';
import firebase from "../../fire";
import SystemCardConfig from "./SystemCardConfig";
import ModalConfigAdd from "../modal/ModalConfigAdd";

/**
 *@class Configuration
 * @desc Displays Configuration info for all Pi systems owned by a user
 */
class Configuration extends Component {
    constructor(props){
        super(props);

        this.state = {
            userSystems: [],
            error_message: ""
        }
    }


    /**
     * @desc Simply adds the UID as an additional field inside the sensor Firebase object
     * @param {DataSnapshot} userData - References a sensor under the "systems" key in the Firebase Database
     * @param {DataSnapshot} userName - References a particular UID in the Firebase Database
     * @return {any} - Returns an object with information for that system
     */
    extractData(userData, userName) {
        var extracted = userData.child(userName).val();
        extracted["system"] = userData.key;
        return extracted;
    }

    /**
     * @desc Grabs configuration data for each sensor and adds it to the state
     * @param {DataSnapshot} snap - References all sensors in the Firebase Database
     * @param {String} uid - References to the UID of the user currently logged in
     */
    processDBData(snap, uid) {
        var userSystems = [];
        snap.forEach((userData) =>{
            var userName = userData.child("user").val();
            if(userName === uid){
                var obj = userData.child(userName).val();
                obj["system"] = userData.key;
                userSystems.push(this.extractData(userData, userName));
            }
        });
        if(userSystems.length>0){
            this.setState({
                error_message: "",
                userSystems: userSystems
            });
        }
        else{
            this.setState({
                error_message: "You have no systems under this account."
            });
        }
    }

    /**
     * @desc If the user is logged in, then grab the configuration data for all the sensors
     * Else, display an error
     */
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                var uid = user.uid;

                const dataRef = firebase.database().ref();

                dataRef.child("systems").on("value", snap => {
                    this.processDBData(snap, uid);
                },error => {
                    this.setState({
                        error_message: error.message
                    });
                });
            }
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="container-fluid text-center">
                        <h1>Configuration</h1>
                        <h6>Modify your system settings here. Select any of you systems you wish to edit or add a new system!</h6>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="container-fluid d-flex justify-content-end">
                        <ModalConfigAdd/>
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
                <div className="row mt-2">
                    <div className="container-fluid">
                        <div className="row">
                            {this.state.userSystems && this.state.userSystems.map(system => {
                                return (
                                    <SystemCardConfig name={system.systemName} time={system.interval} key={system.system} system={system.system}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Configuration;