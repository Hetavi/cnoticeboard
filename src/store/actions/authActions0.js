export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('Profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
      console.log('authAction')
      window.location.reload(true);
      console.log()
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }
}
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var provider = new firebase.auth.GoogleAuthProvider();
   
    firebase.auth().signInWithPopup(provider).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        Dept: newUser.Dept,
        Mobile: newUser.Mobile,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        createdAt: new Date(),
        identity:'unknown',
        email:resp.user.email,     
        initials: newUser.firstName[0] + newUser.lastName[0]        
      },{ merge: true });
    }).then(console.log('authAction')).then(() => {     
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      alert('Updating Fail')
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
  }
}