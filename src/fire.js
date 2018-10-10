import * as firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDyO0W034rgyGQg579SkVKEwEe4bdrya1w",
    authDomain: "comp3613-pisynthesis.firebaseapp.com",
    databaseURL: "https://comp3613-pisynthesis.firebaseio.com",
    projectId: "comp3613-pisynthesis",
    storageBucket: "comp3613-pisynthesis.appspot.com",
    messagingSenderId: "466720894084"
};
var fire = firebase.initializeApp(config);

export default fire;
