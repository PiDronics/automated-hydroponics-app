import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDyO0W034rgyGQg579SkVKEwEe4bdrya1w",
    authDomain: "comp3613-pisynthesis.firebaseapp.com",
    databaseURL: "https://comp3613-pisynthesis.firebaseio.com",
    projectId: "comp3613-pisynthesis",
    storageBucket: "comp3613-pisynthesis.appspot.com",
    messagingSenderId: "466720894084"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
