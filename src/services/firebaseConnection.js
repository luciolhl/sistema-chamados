import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBEeYxHyFlLndwHgSwZLAT4yCk4aVdAgbk",
    authDomain: "sistemadechamados-1ab79.firebaseapp.com",
    projectId: "sistemadechamados-1ab79",
    storageBucket: "sistemadechamados-1ab79.appspot.com",
    messagingSenderId: "525673951226",
    appId: "1:525673951226:web:f16e6348b6adb6cef9be43",
    measurementId: "G-EBN767X2KM"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;;