import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAPSvDWAQatMiCZPr-OzwyAZC2STLTWlL0",
    authDomain: "todo-ca258.firebaseapp.com",
    projectId: "todo-ca258",
    storageBucket: "todo-ca258.appspot.com",
    messagingSenderId: "209857710005",
    appId: "1:209857710005:web:e6e15b53b01d3ca88ebbfc",
};

export default firebase.initializeApp(firebaseConfig);