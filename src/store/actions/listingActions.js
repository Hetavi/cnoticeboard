export const generateNotice = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
   //console.log(project)
   //console.log(project[0])
   //console.log(project[1])
alert('its me ')
    if (profile.firstName) {
      firestore.collection('lists').doc(project[1]).set({
        ...project[0],
        createdAt:new Date()
      //todo date juni method (displayon condition)
      }).then(() => {
        dispatch({ type: 'CREATE_LISTS_SUCCESS' });
      }).catch(err => {
        alert('Advertise not saved ',err)
        dispatch({ type: 'CREATE_LISTS_ERROR' }, err);
      });
    } else {
      alert ('You are not authorised ')
    }
  }
};
