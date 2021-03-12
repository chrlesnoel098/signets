import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgAp5tFRToZSLAeI-5M8rBFe03_bqVQMQ",
  authDomain: "cn-react.firebaseapp.com",
  projectId: "cn-react",
  storageBucket: "cn-react.appspot.com",
  messagingSenderId: "1065458615900",
  appId: "1:1065458615900:web:9683312b2cd05b8938c899",
  measurementId: "G-MLZRKV9EJ3"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const instanceFirestore = firebase.firestore();
