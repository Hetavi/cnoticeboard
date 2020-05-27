export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
      //console.log('authAction')
      window.location.reload(true);
      //console.log()
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
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        Dept: newUser.Dept,
        Mobile: newUser.Mobile,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: resp.user.email,
        role: newUser.role,
        userDoc: newUser.userDoc.toString(),
        createdAt: new Date(),
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    }, { merge: true }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
      //adding to list
      alert('SIGNUP_SUCCESS')
      console.log(newUser.Mobile + '#' + newUser.firstName + ' ' + newUser.lastName + '#' + newUser.Dept)
         if(newUser.olddata) {
          firestore.collection('usersarray').doc(newUser.userDoc.toString()).update({
            list_arr: firestore.FieldValue.arrayRemove(newUser.olddata),
            srno: firestore.FieldValue.increment(-1)
            //todo date juni method (displayon condition)
          })
         }
      firestore.collection('usersarray').doc(newUser.userDoc.toString()).update({
            list_arr: firestore.FieldValue.arrayUnion(newUser.Mobile + '#' + newUser.firstName + ' ' + newUser.lastName + '#' + newUser.Dept),
            srno: firestore.FieldValue.increment(1)
            //todo date juni method (displayon condition)
          }).then(() => {
            dispatch({ type: 'CREATE_LISTS_SUCCESS' });
          }).catch(err => {
            alert('Advertise not saved ', err)
            dispatch({ type: 'CREATE_LISTS_ERROR' }, err);
          });
      //listing over
    }).catch((err) => {
      alert('fail', err)
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
  }
}