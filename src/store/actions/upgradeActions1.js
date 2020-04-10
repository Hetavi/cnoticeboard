export const upgradeActions = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('users').doc(project.docid).set({
      role: 'approved',
      createdAt: new Date()
    }, { merge: true }).then(() => {
      dispatch({ type: 'UPGRDADE_USERS_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'UPGRADE_USERS_ERROR' }, err);
    });
// adding in email list
firestore.collection('emails_validuser').doc(project.docid).set({
  approvedby: authorId,
  createdAt: new Date()
}, { merge: true }).then(() => {
  dispatch({ type: 'UPGRDADE_USERS_SUCCESS' });
}).catch(err => {
  dispatch({ type: 'UPGRADE_USERS_ERROR' }, err);
});

  }
};
