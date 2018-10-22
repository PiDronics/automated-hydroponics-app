import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import firebase from '../../fire';

class NavbarFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            isLoggedIn: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isLoggedIn: true });
            }
            else{
                this.setState({ isLoggedIn: false });
            }
        });
    }

    checkLogin = () => {
        if(this.state.isLoggedIn){
            return(
                <NavbarNav right>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/configuration">Configuration</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/support">Support</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/signout">Log Out</NavLink>
                    </NavItem>
                </NavbarNav>
            )
        }
        else{
            return(
                <NavbarNav right>
                    <NavItem>
                        <NavLink to="/">Sign In/Sign Up</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/support">Support</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about">About</NavLink>
                    </NavItem>
                </NavbarNav>
            )
        }
    }

    render() {
        return (
            <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
                <NavbarBrand href="#">
                    <img src="/img/bg.jpg" height="30" className="nav-logo" alt="Logo"/>
                    <strong>PiDronics</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    {this.checkLogin()}
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarFeatures;