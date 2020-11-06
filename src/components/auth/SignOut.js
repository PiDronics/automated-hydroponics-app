import { Component } from 'react';
import firebase from '../../fire';

/**
 * @class SignOut
 * @ desc Responsible for signing a user out of the system. The rest of the application is also notified
 */
class SignOut extends Component {

    /**
     * @memberOf SignOut
     * @desc Runs as soon as the component is called, no HTML is rendered.
     */
    componentDidMount(){
        firebase.auth().signOut().then(() => {
            this.props.history.push("/home");
        }).catch(error => {
            alert(error);
            this.props.history.push("/home");
        });
    }

    render(){
        return null;
    }
}

export default SignOut;