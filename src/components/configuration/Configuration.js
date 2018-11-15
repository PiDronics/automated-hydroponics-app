import React, {Component} from 'react';
import { Card, CardBody, CardTitle, Fa, Button, Badge } from 'mdbreact';
import firebase from "../../fire";
import ModalConfig from '../modal/ModalConfig';

class Configuration extends Component {
    constructor(props){
        super();

        this.state = {
            userSystems: []
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                var uid = user.uid;
                var userSystems = [];

                const dataRef = firebase.database().ref();

                dataRef.child("systems").on("value", snap => {
                    snap.forEach(function(userData){
                        var userName = userData.child("user").val();
                        if(userName === uid){
                            var obj = userData.child(userName).val();
                            obj["system"] = userData.key;
                            userSystems.push(obj);
                        }
                    });

                    this.setState({
                        userSystems: userSystems
                    })
                });

            } else {
                this.props.history.push("/");
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
                        <Button color="blue" size="sm"><Fa icon="plus"/> Add New System</Button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="container-fluid">
                        <div className="row">
                            {this.state.userSystems && this.state.userSystems.map(system => {
                                return (
                                    <div className="col-lg-6 mb-3" key={system.system}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle className="justify-content-center d-flex">{system.systemName}</CardTitle>
                                                <h6 className="d-flex justify-content-between"><span>Update Interval: </span><Badge color="cyan">{system.interval} Minutes</Badge></h6>
                                                <ModalConfig name={system.systemName} time={system.interval}/>
                                            </CardBody>
                                        </Card>
                                    </div>
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