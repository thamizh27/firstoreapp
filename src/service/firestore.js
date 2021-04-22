import firebase from "firebase";
// import firestore from "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: "firstapp-de078",
  storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
