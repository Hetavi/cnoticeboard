export const generateNotice = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
   
    
   //console.log(project,authorId)
    if (profile.firstName) {
      firestore.collection('notice_list').doc('001').update({
        list_map: firestore.FieldValue.arrayUnion(authorId+'#'+profile.firstName+'#'+project.title),
        srno: firestore.FieldValue.increment(1)
       
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
