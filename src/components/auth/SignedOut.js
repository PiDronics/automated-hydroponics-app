import React, {Component} from 'react';
import { Card, CardHeader, CardBody, Fa } from 'mdbreact';
import firebase from "../../fire";

class SignedOut extends Component  {

    constructor() {
        super();
        this.state = {
            email:"",
            password:"",
            errorMessage1: "",
            errorMessage2: ""
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSignIn = (e) =>{
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
            this.setState({
                errorMessage1:error.message
            });
        });

        this.props.history.push("/");
    };

    handleSignUp = (e) =>{
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
            this.setState({
                errorMessage2:error.message
            });
        });

        this.props.history.push("/");
    };

    render() {
        return(
            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="container-fluid text-center">
                        <h2>PiDronics Monitoring System</h2>
                        <p>Manage complicated hydroponic farms with ease!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <Card>
                            <CardHeader className="text-center" color="primary-color">Sign In</CardHeader>
                            <CardBody>
                                <form onSubmit={this.handleSignIn} id = "form1">
                                    <div className="input-field mb-3 d-flex justify-content-around">
                                        <Fa className="grey-text mr-3" size="2x" icon="envelope"/>
                                        <input className="form-control" type="email" id="email1" name="email" onChange={this.handleChange} placeholder="E-Mail Address"/>
                                    </div>
                                    <div className="input-field mb-3 d-flex justify-content-around">
                                        <Fa className="grey-text mr-4 ml-1" size="2x" icon="lock"/>
                                        <input className="form-control" type="password" id="password1" name="password" onChange={this.handleChange} placeholder="Password"/>
                                    </div>
                                    <span className="red-text d-flex justify-content-center">{this.state.errorMessage1}</span>
                                    <div className="input-field d-flex justify-content-around">
                                        <button className="btn primary-color lighten-1 z-depth-0" id = "login_btn">Login</button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <Card>
                            <CardHeader className="text-center" color="secondary-color">Sign Up</CardHeader>
                            <CardBody>
                                <form onSubmit={this.handleSignUp} id = "form2">
                                    <div className="input-field mb-3 d-flex justify-content-around">
                                        <Fa className="grey-text mr-3" size="2x" icon="envelope"/>
                                        <input className="form-control" type="email" id="email2" name="email" onChange={this.handleChange} placeholder="E-Mail Address"/>
                                    </div>
                                    <div className="input-field mb-3 d-flex justify-content-around">
                                        <Fa className="grey-text mr-4 ml-1" size="2x" icon="lock"/>
                                        <input className="form-control" type="password" id="password2" name="password" onChange={this.handleChange} placeholder="Password"/>
                                    </div>
                                    <span className="red-text d-flex justify-content-center">{this.state.errorMessage2}</span>
                                    <div className="input-field d-flex justify-content-around">
                                        <button className="btn secondary-color lighten-1 z-depth-0" id = "signup_btn">Sign Up</button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignedOut;
