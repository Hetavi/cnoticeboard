export const upgradeActions = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    //console.log(project)
    let role = 'approved'
    if (profile.role === "owner") { role = 'admin' }
    firestore.collection('users').doc(project.docid).set({
      role: role,
      createdAt: new Date(),
      approvedby: profile.firstName +" "+  profile.lastName+" "+profile.Mobile
    }, { merge: true }).then(() => {
      dispatch({ type: 'UPGRDADE_USERS_SUCCESS' });
    }).catch(err => {
      alert('Fail')
      dispatch({ type: 'UPGRADE_USERS_ERROR' }, err);
    });
    // adding in email list
    if (profile.role === "owner") { 
          firestore.collection('emails_editor').doc(project.email).set({
            approvedby: authorId,
            createdAt: new Date()
          }, { merge: true }).then(() => {
            dispatch({ type: 'UPGRDADE_USERS_SUCCESS' });
          }).catch(err => {
            alert('Error owner')
            dispatch({ type: 'UPGRADE_USERS_ERROR' }, err);
          });
    }
    if (profile.role === "admin") { 
      firestore.collection('emails_validuser').doc(project.email).set({
        approvedby: authorId,
        createdAt: new Date()
      }, { merge: true }).then(() => {
        dispatch({ type: 'UPGRDADE_USERS_SUCCESS' });
      }).catch(err => {
        alert('Error valid user')
        dispatch({ type: 'UPGRADE_USERS_ERROR' }, err);
      });
}
    
  }
};
