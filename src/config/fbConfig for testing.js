import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBUC2t91tSn1ojEzpnH7aAo1Ls0bYsH1F0",
  authDomain: "fir-react0.firebaseapp.com",
  databaseURL: "https://fir-react0.firebaseio.com",
  projectId: "fir-react0",
  storageBucket: "fir-react0.appspot.com",
  messagingSenderId: "118244333293",
  appId: "1:118244333293:web:bddd171b845dcac3a01ee4",
  measurementId: "G-NCBNQPYBZT"
};
firebase.initializeApp(config);


export default firebase 