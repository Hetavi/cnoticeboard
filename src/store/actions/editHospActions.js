export const editHospActions = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log('Edit project action')
    console.log(project.docid)
    if (profile.firstName) {
      firestore.collection('hosp').doc(project.docid).set({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }, { merge: true }).then(() => {
        dispatch({ type: 'EDIT_hosp_SUCCESS' });
      }).catch(err => {
        alert('fail',err)
        dispatch({ type: 'EDIT_hosp_ERROR' }, err);
      });
    }else {
    alert ('You are not authorised')
  }
  }
};
