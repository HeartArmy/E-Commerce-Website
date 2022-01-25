
import firebase from "firebase";
import {seedDatabase} from './seed';
const firebaseConfig = {
    apiKey: "AIzaSyBoWyT1-PfxyYnqcInyLdR90g7lqG54YyQ",
    authDomain: "clone-971e1.firebaseapp.com",
    projectId: "clone-971e1",
    storageBucket: "clone-971e1.appspot.com",
    messagingSenderId: "417909792903",
    appId: "1:417909792903:web:001a75a7261a3d44f89822",
    measurementId: "G-2CPLBB2XYE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// seedDatabase(firebaseApp);

export { db, auth};