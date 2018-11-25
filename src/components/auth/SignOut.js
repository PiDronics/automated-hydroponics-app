import { Component } from 'react';
import firebase from '../../fire';


class SignOut extends Component {

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