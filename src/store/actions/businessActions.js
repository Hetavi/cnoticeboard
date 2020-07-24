export const generateBusiness = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
   console.log(project)
    if (project.bId===null) {
      firestore.collection('business').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      //todo date juni method (displayon condition)
      }).then(function(docRef) {
        alert('kfdjfkljds'+docRef.id)
        console.log("Document written with ID: ", docRef.id);
       // dispatch({ type: 'CREATE_MEDIA_SUCCESS' });
    })
      .then(() => {
        dispatch({ type: 'CREATE_BUSINESS_SUCCESS' });
      }).catch(err => {
        alert('Business Data not saved ',err)
        dispatch({ type: 'CREATE_BUSINESS_ERROR' }, err);
      });
    } else {
      firestore.collection('business').doc(project.bId).set({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      //todo date juni method (displayon condition)
      }).then(() => {
        dispatch({ type: 'CREATE_BUSINESS_SUCCESS' });
      }).catch(err => {
        alert('Business Data not saved ',err)
        dispatch({ type: 'CREATE_BUSINESS_ERROR' }, err);
      });
    }
  }
};
