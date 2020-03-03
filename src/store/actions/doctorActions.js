export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('VisitingDr').doc().set({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_VisitingDr_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_Visiting_ERROR' }, err);
    });
  }
};
