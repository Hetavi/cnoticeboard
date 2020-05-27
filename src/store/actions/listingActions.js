export const generateNotice = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
   console.log(project)
   //console.log(project[0])
   //console.log(project[1])// doc ID  will be generated as this
//alert('its me ')
    if (profile.firstName) {
      firestore.collection('usersarray').doc('1').update({        
        list_arr: firestore.FieldValue.arrayUnion(project.Mobile+'#'+project.firstName+' '+project.lastName+'#'+project.Dept),
        srno: firestore.FieldValue.increment(1)
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
