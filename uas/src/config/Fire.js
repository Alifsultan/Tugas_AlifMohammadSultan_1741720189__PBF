import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCactFcilOCCDeMVlI7sPpPOzkkmG6VGJw",
    authDomain: "uas-pbf-7b60b.firebaseapp.com",
    databaseURL: "https://uas-pbf-7b60b.firebaseio.com",
    projectId: "uas-pbf-7b60b",
    storageBucket: "uas-pbf-7b60b.appspot.com",
    messagingSenderId: "1040199441332",
    appId: "1:1040199441332:web:28429c22ac90bf3e89f0e1",
    measurementId: "G-9XZQ1VWXSV"
};

const fire = firebase.initializeApp(config);
export default fire;