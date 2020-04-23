import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWSsL791RTBuovhdftnZgOEwMCGy7_ilI",
  authDomain: "pertemuan12-b6b53.firebaseapp.com",
  databaseURL: "https://pertemuan12-b6b53.firebaseio.com",
  projectId: "pertemuan12-b6b53",
  storageBucket: "pertemuan12-b6b53.appspot.com",
  messagingSenderId: "885127065208",
  appId: "1:885127065208:web:76ef8aab0c2e811f0d878d",
  measurementId: "G-MK5BPCZVP9"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;