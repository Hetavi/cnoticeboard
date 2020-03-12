import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  
  apiKey: "AIzaSyDNRtpa86v986mO3pePPursUW1XtahmrDo",
  authDomain: "gfem-b7b57.firebaseapp.com",
  databaseURL: "https://gfem-b7b57.firebaseio.com",
  projectId: "gfem-b7b57",
  storageBucket: "gfem-b7b57.appspot.com",
  messagingSenderId: "144283479484",
  appId: "1:144283479484:web:6860f178f587058f9acfb9"
};
firebase.initializeApp(config);


export default firebase 