import { Component } from 'react';
import firebase from '../../fire';


class SignOut extends Component {

    componentDidMount(){
        firebase.auth().signOut().then(function() {
        }).catch(function(error) {
        });

        this.props.history.push("/");
    }

    render(){
        return null;
    }
}

export default SignOut;