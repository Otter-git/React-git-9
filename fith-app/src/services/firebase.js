import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBconaRjDt6UORN3tanxtsqO0lK-PNd8bs",
    authDomain: "homework-9-45a58.firebaseapp.com",
    projectId: "homework-9-45a58",
    storageBucket: "homework-9-45a58.appspot.com",
    messagingSenderId: "919581631510",
    appId: "1:919581631510:web:da02bf969b07af802b8137"
  };

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();