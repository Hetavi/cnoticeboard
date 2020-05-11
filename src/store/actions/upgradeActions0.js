export const upgradeActions = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var provider = new firebase.auth.GoogleAuthProvider();
     provider.addScope('profile');
    provider.addScope('email');
    //console.log(newUser)
    alert(provider.email)
    firebase.auth().signInWithPopup(provider).then(resp => {
      return firestore.collection('users').doc(newUser.docid).set({
        role: 'approved'
      }, { merge: true });
    }).then(() => {
      alert(this.role)
    }).then(() => {
      alert('success  2')
      dispatch({ type: 'APPROVED_SUCCESS' });
    }).catch((err) => {
      alert('fail')
      dispatch({ type: 'APPROVED_ERROR', err });
    });
  }
}