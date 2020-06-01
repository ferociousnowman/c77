import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCvba0nYS786_ZCKDPYf35mJoTZddoscG4",
    authDomain: "booksanta-293b0.firebaseapp.com",
    databaseURL: "https://booksanta-293b0.firebaseio.com",
    projectId: "booksanta-293b0",
    storageBucket: "booksanta-293b0.appspot.com",
    messagingSenderId: "134819661219",
    appId: "1:134819661219:web:355ce18a884af277598616",
    measurementId: "G-22Y7E9NBD8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();