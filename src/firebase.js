import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBukgLXd_dYMbQZ31qdlguaIaSFezATDoI",
    authDomain: "twittter-clonem.firebaseapp.com",
    databaseURL: "https://twittter-clonem.firebaseio.com",
    projectId: "twittter-clonem",
    storageBucket: "twittter-clonem.appspot.com",
    messagingSenderId: "371650261323",
    appId: "1:371650261323:web:e1a57c85604956eb34b8ce",
    measurementId: "G-FFZS17BN3V"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;