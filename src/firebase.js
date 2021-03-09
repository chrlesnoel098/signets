import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration
const firebaseConfig = {
  apiKey: "AIzaSyApFgQfnSKcB91VDdBt3P0wzV0Lw3R_q_M",
  authDomain: "cdem-react-b9df6.firebaseapp.com",
  projectId: "cdem-react-b9df6",
  storageBucket: "cdem-react-b9df6.appspot.com",
  messagingSenderId: "1090557461168",
  appId: "1:1090557461168:web:6f4781563ca73d4d393175"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const instanceFirestore = firebase.firestore();
