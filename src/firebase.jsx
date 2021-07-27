import firebase from "firebase";

   const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEtMETicRjdha_IaWePdVRXIg2xGaPwmQ",
    authDomain: "todo-be-active.firebaseapp.com",
    databaseURL: "https://todo-be-active.firebaseio.com",
    projectId: "todo-be-active",
    storageBucket: "todo-be-active.appspot.com",
    messagingSenderId: "779162762948",
    appId: "1:779162762948:web:4fe86efb81b7f90ef3d391",
    measurementId: "G-K3WX0TLPLV"
   });
const db = firebaseApp.firestore();

export default db;