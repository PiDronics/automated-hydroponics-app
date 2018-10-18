import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarFeatures from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import System from './components/system/System';
//import SignedOut from './components/auth/SignedOut';

class App extends Component {

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
                                    <Route exact path='/' component={Dashboard}></Route>
                                    <Route path='/system/:id' component={System}></Route>
                                    {/*<Route path='/configuration' component={Configuration}></Route>*/}
                                    {/*<Route path='/support' component={Support}></Route>*/}
                                    {/*<Route path='/about' component={About}></Route>*/}
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
