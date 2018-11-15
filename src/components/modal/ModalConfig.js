import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader } from 'mdbreact';

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

    toggle = () => {
        this.setState({
            modal: !this.state.modal
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

        if(this.state.name.length > 30){
            this.setState({
                successMsg: "",
                errorMessage: "The system name is too long."
            })
        }
        else if(this.state.time < 5 || this.state.time > 30){
            this.setState({
                successMsg: "",
                errorMessage: "Interval time is out of range"
            })
        }
        else{

            //firebase code here

            this.setState({
                successMsg: "Updated successfully!",
                errorMessage: ""
            })
        }
    };

    componentDidMount(){

    }

    render() {
        return (
            <Container>
                <div className="d-flex justify-content-around">
                    <Button color="blue" onClick={this.toggle}>Edit System</Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Edit System</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit} id="graphValues">
                            <div className="container-fluid text-center">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-field mb-3">
                                            <label htmlFor="name">System Name</label>
                                            <input className="form-control" type="text" name="name" onChange={this.handleChange.bind(this)} defaultValue={this.state.name}/>
                                        </div>
                                        <div className="input-field mb-3">
                                            <label htmlFor="time">Update Interval</label>
                                            <div className="d-flex justify-content-start">
                                                <select className="form-control" name="time" onChange={this.handleChange.bind(this)} defaultValue={this.state.time}>
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
                                <button className="btn success-color lighten-1 z-depth-0" id ="signup_btn">Save</button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </Container>
        );
    }
}

export default ModalConfig;
