import React, {Component} from 'react';
import { Card, CardHeader, CardBody, Fa } from 'mdbreact';
import firebase from "../../fire";


class SignedOut extends Component  {

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
        this.handleSignUp = this.handleSignUp.bind(this);
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

        this.props.history.push("/");
    };

    /**
     * @methodOf SignedOut
     * @desc Adds a user to the Firebase Auth backend using their e-mail and password
     * @param {Event} e - captures a submit event
     */
    handleSignUp(e) {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
            this.setState({
                errorMessage2:error.message
            });
        });

        this.props.history.push("/");
    };

    /**
     * @methodOf SignedOut
     * @desc Switches between the Sign-In form and the Sign-up form on the login page
     */
    toggleScreen(){
        if(this.state.auth==="signinbtn"){
            return(
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
            )
        }
        else{
            return(
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
            )
        }
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row mb-3">
                    <div className="container-fluid text-center">
                        <h2>PiDronics Monitoring System</h2>
                        <p>Manage complicated hydroponic farms with ease!</p>
                    </div>
                </div>
                <div className="row mb-3 d-flex justify-content-center">
                    <button className="btn primary-color" id="signinbtn" name="auth" value="signinbtn" onClick={this.handleChange}>Sign In</button>
                    <button className="btn secondary-color" id="signupbtn" name="auth" value="signupbtn" onClick={this.handleChange}>Sign Up</button>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 mb-3">
                        {this.toggleScreen()}
                    </div>
                </div>
            </div>
        );
    }
}

export default SignedOut;
