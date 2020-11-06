import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import firebase from '../../fire';

/**
 * @class NavbarFeatures
 * @desc Enables basic Navigation across the application. The Navbar is present at the top and is fixed
 * across all pages
 */
class NavbarFeatures extends Component {
    constructor() {
        super();

        this.state = {
            collapse: false,
            user: null
        };

        this.onClick = this.onClick.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }

    /**
     * @memberOf NavbarFeatures
     * @desc Toggles the state of the Navbar menu on mobile view between open and closed
     */
    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }


    /**
     * @memberOf NavbarFeatures
     * @desc Ensures the Navbar is closed regardless of its current state.
     */
    closeNav() {
        this.setState({
            collapse: false
        });
    }


    /**
     * @memberOf NavbarFeatures
     * @desc Checks the auth state of the user
     */
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user
            })
        });
    };

    /**
     * @memberOf NavbarFeatures
     * @desc Changes the view of the Navbar based on the Auth state of the user
     */
    checkLogin() {
        if(this.state.user){
            return(
                <NavbarNav right id = "userFound">
                    <NavItem>
                        <NavLink to="/">Dashboard</NavLink>
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
                <NavbarNav right id = "userNotFound">
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
    };

    render() {
        return (
            <Navbar color="green" dark expand="md" fixed="top" scrolling>
                <NavbarBrand href="#">
                    <img src="/img/logoFinal.png" height="30" className="nav-logo" alt="Logo"/>
                    <strong>PiDronics</strong>
                </NavbarBrand>
                <NavbarToggler onClick={this.onClick} id="toggleBtn"/>
                <Collapse isOpen = { this.state.collapse } onClick={this.closeNav} navbar>
                    {this.checkLogin()}
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarFeatures;