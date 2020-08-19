import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDd_kVOSRoRn4uSfTYoEWWPqVKtNHk4Kpw",
  authDomain: "soccer-site-998ba.firebaseapp.com",
  databaseURL: "https://soccer-site-998ba.firebaseio.com",
  projectId: "soccer-site-998ba",
  storageBucket: "soccer-site-998ba.appspot.com",
  messagingSenderId: "540967557646",
  appId: "1:540967557646:web:17c145e609765da7c07a5f",
  measurementId: "G-9GZFDMWKWP",
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

export { firebase, firebaseMatches };
