
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(resp => {
      return firestore.collection('helpers').doc(resp.user.uid).set({
     
        mobile: newUser.Mobile,
        selfName: newUser.firstName,
        fatherName: newUser.lastName,
        email: resp.user.email, 
        profession: newUser.Dept,
        location: newUser.location,
        remark:  newUser.remark,  
        userDoc: newUser.userDoc.toString(),
        createdAt: new Date()        
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