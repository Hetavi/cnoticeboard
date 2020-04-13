export const generateNotice = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
   
   
    if (profile.firstName) {
      firestore.collection('notice').doc(authorId).set({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_NOTICE_SUCCESS' });
      }).catch(err => {
        alert('fail',err)
        dispatch({ type: 'CREATE_NOTICE_ERROR' }, err);
      });
    } else {
      alert ('You are not authorised ')
    }
  }
};
