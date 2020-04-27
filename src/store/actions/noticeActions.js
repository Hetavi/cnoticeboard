export const generateNotice = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
   
   console.log(project,authorId)
    if (profile.firstName) {
      firestore.collection('notice').doc(authorId).set({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      //todo date juni method (displayon condition)
      }).then(() => {
        dispatch({ type: 'CREATE_NOTICE_SUCCESS' });
      }).catch(err => {
        alert('Advertise not saved ',err)
        dispatch({ type: 'CREATE_NOTICE_ERROR' }, err);
      });
    } else {
      alert ('You are not authorised ')
    }
  }
};
