import React, { Component } from 'react';
import { MDBFooter, MDBContainer } from 'mdbreact';

/**
 * @class NavbarFeatures
 * @desc Enables basic Navigation across the application. The Navbar is present at the top and is fixed
 * across all pages
 */
class Footer extends Component {

    render() {
        return (
            <MDBFooter>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright 2020: <a href="https://pidronics.firebaseapp.com"> pidronics.firebaseapp.com</a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }

}

export default Footer;