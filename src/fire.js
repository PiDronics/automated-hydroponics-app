import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDyO0W034rgyGQg579SkVKEwEe4bdrya1w",
    authDomain: "comp3613-pisynthesis.firebaseapp.com",
    databaseURL: "https://comp3613-pisynthesis.firebaseio.com",
    projectId: "comp3613-pisynthesis",
    storageBucket: "comp3613-pisynthesis.appspot.com",
    messagingSenderId: "466720894084"
};

firebase.initializeApp(config);

export default firebase;
