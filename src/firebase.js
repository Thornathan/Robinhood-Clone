import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhXNXhH_Fn1n4mO4jA644tmyBLF9rIXJc",
  authDomain: "robinhood-clone-98e23.firebaseapp.com",
  projectId: "robinhood-clone-98e23",
  storageBucket: "robinhood-clone-98e23.appspot.com",
  messagingSenderId: "1050207679881",
  appId: "1:1050207679881:web:1fbbdcc166235959731d58",
  measurementId: "G-6X4G4YYGSH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
