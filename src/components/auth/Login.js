import React, {Component} from 'react';
import {Fa, MDBCol, MDBCard, MDBCardBody, MDBModalFooter } from 'mdbreact';
import firebase from "../../fire";


class Login extends Component  {

    /**
     * @methodOf SignedOut
     * @desc Initializes the component, ready to accept input from the user
     */
    constructor() {
        super();
        this.state = {
            email:"",
            password:"",
            errorMessage1: "",
            errorMessage2: "",
            auth: "signinbtn"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    /**
     * @methodOf SignedOut
     * @desc Updates the state with the input. Due to [e.target.name] being used, this function will
     * work for both the e-mail and password input fields
     * @param {Event} e - captures a keypress
     */
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    /**
     * @methodOf SignedOut
     * @desc Signs a user into the system through a Firebase Auth backend.
     * @param {Event} e - captures a submit event
     */
    handleSignIn(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
            this.setState({
                errorMessage1:error.message
            });
        });

        // this.props.history.push("/");
        this.props.history.push("/dashboard");
    };


    /**
     * @methodOf Login
     * @desc Switches between the Sign-In form and the Sign-up form on the login page
     */
    toggleScreen(){
        const bgGreen = {backgroundColor: '#35a56f'}
        return(
            <MDBCol className="row mb-3 d-flex justify-content-center">
            <MDBCard>
                <MDBCardBody>
                    <form onSubmit={this.handleSignIn} id = "form1">
                    <p className="h4 text-center py-4">Login</p>
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
                            <button style={bgGreen} className="btn lighten-1 z-depth-0" id = "login_btn">Login</button >
                        </div>
                    </form>
                </MDBCardBody>
                <MDBModalFooter className="justify-content-center mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-center">
                        Not a member?
                        <a href="/register" className="blue-text ml-1">

                        Register User
                        </a>
                    </p>
                </MDBModalFooter>
            </MDBCard>
            </MDBCol>
        )
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="container mt-5">
                        <div className="row mt-5">
                            <div className="container-fluid">
                                <div className="row mb-3 mt-5">
                                    <div className="container-fluid text-center">
                                        <h2>PiDronics Monitoring System</h2>
                                        <p>Manage complicated hydroponic farms with ease!</p>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-6 mb-3">
                                        {this.toggleScreen()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
