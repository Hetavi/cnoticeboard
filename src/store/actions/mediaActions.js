export const generateMedia = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(project)
    if (project.docid!==null) {
 
      firestore.collection('media').doc(project.docid).set({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_MEDIA_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_MEDIA_ERROR' }, err);
      });
    } else {
      //todo  
     
      firestore.collection('media').doc().set({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_MEDIA_SUCCESS' });
      }).catch(err => {
        alert('fail')
        dispatch({ type: 'CREATE_MEDIA_ERROR' }, err);
      });
    
    }
  }
};
