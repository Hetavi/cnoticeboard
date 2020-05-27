import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
 
  authDomain: "marubharuch.firebaseapp.com",
 
};
firebase.initializeApp(config);


export default firebase 
