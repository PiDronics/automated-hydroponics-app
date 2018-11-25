import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader } from 'mdbreact';
import firebase from '../../fire';

class ModalConfig extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            name: props.name,
            time: props.time,
            successMsg: "",
            errorMessage: ""
        };
    }

    // toggle = () => {
    //     this.setState({
    //         modal: !this.state.modal
    //     });
    // };

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    toggle = this.toggle.bind(this);


    // handleChange = (e) => {
    //     e.preventDefault();
    //
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //         successMsg: "",
    //         errorMessage: ""
    //     })
    // };

    handleChange(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
            successMsg: "",
            errorMessage: ""
        })
    }
    handleChange = this.handleChange.bind(this);


    // handleSubmit = (e) => {
    //     e.preventDefault();
    //
    //     if(this.state.name.length > 30 || this.state.name.length < 1){
    //         this.setState({
    //             successMsg: "",
    //             errorMessage: "The system name must be between 1 and 30 characters long."
    //         })
    //     }
    //     else if(this.state.time < 5 || this.state.time > 30){
    //         this.setState({
    //             successMsg: "",
    //             errorMessage: "Interval time is out of range (5mins-30mins)"
    //         })
    //     }
    //     else{
    //         firebase.auth().onAuthStateChanged(user => {
    //             if(user){
    //                 var uid = user.uid;
    //                 var system = this.props.system;
    //
    //                 const dataRef = firebase.database().ref();
    //
    //                 var updates = {};
    //
    //                 updates["/users/" + uid + "/systemCard/" + system + "/systemName"] = this.state.name;
    //                 updates["/systems/" + system + '/' + uid + "/systemName"] = this.state.name;
    //                 updates["/systems/" + system + '/' + uid + "/interval"] = this.state.time;
    //
    //                 dataRef.update(updates);
    //
    //                 this.setState({
    //                     successMsg: "Updated successfully!",
    //                     errorMessage: ""
    //                 });
    //             }
    //             else{
    //                 this.props.history.push("/");
    //             }
    //         });
    //     }
    // };

    handleSubmit(e) {
        console.log('submitted');
        e.preventDefault();

        var obj = {};

        obj.name = e.target.name.value;
        obj.time = e.target.time.value;

        this.setState({
            ...obj
        });

        if(this.state.name.length > 30 || this.state.name.length < 1){
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
                    var system = this.props.system;

                    const dataRef = firebase.database().ref();

                    var updates = {};

                    updates["/users/" + uid + "/systemCard/" + system + "/systemName"] = this.state.name;
                    updates["/systems/" + system + '/' + uid + "/systemName"] = this.state.name;
                    updates["/systems/" + system + '/' + uid + "/interval"] = this.state.time;

                    dataRef.update(updates, error => {
                        if(error){
                            this.setState({
                                successMsg: "",
                                errorMessage: error.message
                            })
                        }
                        else{
                            this.setState({
                                successMsg: "Updated successfully!",
                                errorMessage: ""
                            });
                        }
                    });
                }
                else{
                    this.props.history.push("/");
                }
            });
        }
    }
    handleSubmit = this.handleSubmit.bind(this);

    // deleteSystem = (e) => {
    //     e.preventDefault();
    //
    //     if(window.confirm("You you sure you wish to delete this system?\n You cannot undo these changes!")){
    //         firebase.auth().onAuthStateChanged(user => {
    //             if(user){
    //                 var uid = user.uid;
    //                 var system = this.props.system;
    //
    //                 const dataRef = firebase.database().ref();
    //
    //                 var remove = {};
    //
    //                 remove["/users/" + uid + "/systemCard/" + system] = null;
    //                 remove["/users/" + uid + "/systemData/" + system] = null;
    //                 remove["/systems/" + system] = null;
    //
    //                 dataRef.update(remove);
    //
    //                 this.setState({
    //                     successMsg: "",
    //                     errorMessage: ""
    //                 });
    //             }
    //         });
    //     }
    //     else{
    //         this.toggle();
    //     }
    // };

    deleteSystem(e) {
        e.preventDefault();

        if(window.confirm("You you sure you wish to delete this system?\n You cannot undo these changes!")){
            firebase.auth().onAuthStateChanged(user => {
                if(user){
                    var uid = user.uid;
                    var system = this.props.system;

                    const dataRef = firebase.database().ref();

                    var remove = {};

                    remove["/users/" + uid + "/systemCard/" + system] = null;
                    remove["/users/" + uid + "/systemData/" + system] = null;
                    remove["/systems/" + system] = null;

                    dataRef.update(remove, error => {
                        if(error){
                            this.setState({
                                successMsg: "",
                                errorMessage: error.message
                            })
                        }
                        else{
                            this.setState({
                                successMsg: "Deleted successfully!",
                                errorMessage: ""
                            });
                        }
                    });
                }
            });
        }
        else{
            this.toggle();
        }
    }
    deleteSystem = this.deleteSystem.bind(this);

    componentDidMount(){

    }

    render() {
        return (
            <Container>
                <div className="d-flex justify-content-around">
                    <Button id = "toggleModal" color="blue" onClick={this.toggle}>Edit System</Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Edit System</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit}>
                            <div className="container-fluid text-center">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-field mb-3">
                                            <label htmlFor="name">System Name</label>
                                            <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange} defaultValue={this.state.name}/>
                                        </div>
                                        <div className="input-field mb-3">
                                            <label htmlFor="time">Update Interval</label>
                                            <div className="d-flex justify-content-start">
                                                <select className="form-control" name="time" id="time" onChange={this.handleChange} defaultValue={this.state.time}>
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
                            <span className="red-text d-flex justify-content-center text-center">{this.state.errorMessage}</span>
                            <span className="green-text d-flex justify-content-center text-center">{this.state.successMsg}</span>
                            <div className="input-field d-flex justify-content-around">
                                <button className="btn success-color lighten-1 z-depth-0" id ="save_btn">Save</button>
                                <button className="btn danger-color lighten-1 z-depth-0" id ="delete_btn" onClick={this.deleteSystem}>Delete System</button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </Container>
        );
    }
}

export default ModalConfig;
