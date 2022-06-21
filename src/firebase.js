
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyBzimggoGRBfhVpnqWzNB_MxS7b958Y9_Y",
    authDomain: "clone-2d27d.firebaseapp.com",
    projectId: "clone-2d27d",
    storageBucket: "clone-2d27d.appspot.com",
    messagingSenderId: "385571592466",
    appId: "1:385571592466:web:c08b8a12c9ca6c269f3bcb",
    measurementId: "G-CPRK36Y9DN"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
