import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarFeatures from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Configuration from './components/configuration/Configuration';
import System from './components/system/System';
import SignOut from './components/auth/SignOut';
import SignedOut from './components/auth/SignedOut';
import About from './components/support/About';
import Support from './components/support/Support';
import firebase from './fire';

import Login from './components/auth/Login'
import Register from './components/auth/Register'
// import AppPage from './components/landing_page/AppPage';

class App extends Component {

    constructor(){
        super();

        this.state= {
            user: null
        };

    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({user:user})
        });
    }

    checkLogin = () => {

        if(this.state.user){
            return(
                <div>
                {/* <Redirect to="/dashboard" />; */}
                <Route onUpdate={() => window.scrollTo(0, 0)} exact path='/' component={Dashboard}/>
                </div>
            )
        }
        else{
            return(
                <div>
                    {/* <Redirect to="/home" />; */}
                <Route onUpdate={() => window.scrollTo(0, 0)} exact path='/' component={SignedOut}/>
                </div>
            )
        }
    };

    /**
     * @memberOf App
     * @method render - Initializes and renders UI components on the screen
     *
     * */
    render() {

        return (
            <BrowserRouter>
                <div className="App" >
                <NavbarFeatures/>
                    {this.checkLogin()} 
                    <Switch>
                        {/* {this.checkLogin()} */}
                        <Route path='/home' component={SignedOut}/>
                        <Route path='/system/:id' component={System}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/signout' component={SignOut}/>
                        <Route path='/configuration' component={Configuration}/>
                        <Route path='/support' component={Support}/>
                        <Route path='/about' component={About}/>
                        <Route path='/dashboard' component={Dashboard}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
