import { Component } from 'react';
import firebase from '../../fire';

/**
 * @class SignOut
 */
class SignOut extends Component {

    /**
     * @memberOf SignOut
     * @desc Responsible for signing a user out of the system. The rest of the application is also notified
     */
    componentDidMount(){
        firebase.auth().signOut().then(() => {
            this.props.history.push("/");
        }).catch(error => {
            alert(error);
            this.props.history.push("/");
        });
    }

    render(){
        return null;
    }
}

export default SignOut;