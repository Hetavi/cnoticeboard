import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBF7m7VhZSwUCH_U5NbnOvkNcyVV3At4Nc",
  authDomain: "marubharuch.firebaseapp.com",
  databaseURL: "https://marubharuch.firebaseio.com",
  projectId: "marubharuch",
  storageBucket: "marubharuch.appspot.com",
  messagingSenderId: "307625591423",
  appId: "1:307625591423:web:7e783b81ed5aba4f"
};
firebase.initializeApp(config);


export default firebase 