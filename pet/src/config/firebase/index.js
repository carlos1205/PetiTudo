import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAuQHPquyxkA8aI-VT2n61odMADjvvZ_74",
    authDomain: "petitudo.firebaseapp.com",
    databaseURL: "https://petitudo-default-rtdb.firebaseio.com",
    projectId: "petitudo",
    storageBucket: "petitudo.appspot.com",
    messagingSenderId: "187552057391",
    appId: "1:187552057391:web:649eea542f129623689eda",
    measurementId: "G-EGHVCBZ0X5"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;