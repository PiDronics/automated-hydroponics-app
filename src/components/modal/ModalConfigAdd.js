import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, Fa } from 'mdbreact';
import firebase from '../../fire';

class ModalConfigAdd extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            time: "5",
            serial: ""
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            name: "",
            time: "5",
            serial: "",
            successMsg: "",
            errorMessage: ""
        });
    };

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value,
            successMsg: "",
            errorMessage: ""
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.serial.length<1 || this.state.serial.indexOf(" ") > -1){
            this.setState({
                successMsg: "",
                errorMessage: "The serial number cannot have spaces or be empty."
            })
        }
        else if(this.state.name.length > 30 || this.state.name.length < 1){
            this.setState({
                successMsg: "",
                errorMessage: "The system name must be between 1 and 30 characters long."
            })
        }
        else if(this.state.time < 5 || this.state.time > 30){
            this.setState({
                successMsg: "",
                errorMessage: "Interval time is out of range (5mins-30mins)"
            })
        }
        else{
            firebase.auth().onAuthStateChanged(user => {
                if(user){
                    var uid = user.uid;

                    const dataRef = firebase.database().ref();

                    var newSystem = {};

                    dataRef.child("/systems/"+this.state.serial).once("value",snap => {
                        if(snap.exists()){
                            this.setState({
                                successMsg: "",
                                errorMessage: "This system serial already exists under this account. If you wish to edit the system, please use the Edit System button."
                            });
                        }
                        else{
                            newSystem["/users/" + uid + "/systemCard/" + this.state.serial + "/systemName"] = this.state.name;
                            newSystem["/users/" + uid + "/systemCard/" + this.state.serial + "/lastUpdated"] = "[Not updated]";
                            newSystem["/users/" + uid + "/systemData/" + this.state.serial + "/lastUpdated"] = "[Not updated]";
                            newSystem["/systems/" + this.state.serial + '/' + uid + "/systemName"] = this.state.name;
                            newSystem["/systems/" + this.state.serial + '/' + uid + "/interval"] = this.state.time;
                            newSystem["/systems/" + this.state.serial + "/user"] = uid;

                            dataRef.update(newSystem);

                            this.setState({
                                successMsg: "Added successfully!",
                                errorMessage: ""
                            });
                        }
                    });
                }
            });
        }
    };

    componentDidMount(){

    }

    render() {
        return (
            <Container>
                <div className="d-flex justify-content-end">
                    <Button onClick={this.toggle} color="blue" size="sm"><Fa icon="plus"/> Add New System</Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add System</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit}>
                            <div className="container-fluid text-center">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-field mb-3">
                                            <label htmlFor="serial">System Serial</label>
                                            <input className="form-control" type="text" name="serial" id="serial" onChange={this.handleChange.bind(this)} defaultValue={this.state.serial}/>
                                        </div>
                                        <div className="input-field mb-3">
                                            <label htmlFor="name">System Name</label>
                                            <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange.bind(this)} defaultValue={this.state.name}/>
                                        </div>
                                        <div className="input-field mb-3">
                                            <label htmlFor="time">Update Interval</label>
                                            <div className="d-flex justify-content-start">
                                                <select className="form-control" name="time" id="time" onChange={this.handleChange.bind(this)} defaultValue={this.state.time}>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="red-text d-flex justify-content-center">{this.state.errorMessage}</span>
                            <span className="green-text d-flex justify-content-center">{this.state.successMsg}</span>
                            <div className="input-field d-flex justify-content-around">
                                <button className="btn success-color lighten-1 z-depth-0" id ="save_btn">Save</button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </Container>
        );
    }
}

export default ModalConfigAdd;
