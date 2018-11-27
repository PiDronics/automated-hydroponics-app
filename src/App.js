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
                <Route onUpdate={() => window.scrollTo(0, 0)} exact path='/' component={Dashboard}/>
            )
        }
        else{
            return(
                <Route onUpdate={() => window.scrollTo(0, 0)} exact path='/' component={SignedOut}/>
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
                <div className="App">
                    <NavbarFeatures/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="container mt-5">
                                <div className="row mt-4">
                                    <Switch>
                                        {this.checkLogin()}
                                        <Route path='/system/:id' component={System}/>
                                        <Route path='/signout' component={SignOut}/>
                                        <Route path='/configuration' component={Configuration}/>
                                        <Route path='/support' component={Support}></Route>
                                        <Route path='/about' component={About}></Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
