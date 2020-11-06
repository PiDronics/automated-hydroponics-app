import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCoUR60sK5sc2Qs_UI8_hhqXddYAMU0GG4",
    authDomain: "comp3613-pisynthesis.firebaseapp.com",
    databaseURL: "https://pidronics.firebaseio.com/",
    projectId: "pidronics",
    storageBucket: "pidronics.appspot.com",
    messagingSenderId: "599603895980"
};

firebase.initializeApp(config);

export default firebase;
