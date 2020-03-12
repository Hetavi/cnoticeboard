export const editDrActions = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log('Edit project action')
    console.log(project)

    if (profile.firstName) {
      firestore.collection('VisitingDr').doc(project.docid).set({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId
      }, { merge: true }).then(() => {
        dispatch({ type: 'EDIT_DR_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'EDIT_DR_ERROR' }, err);
      });
    }else {
    alert ('You are not authorised')
  }
  }
};
