const initState = {}
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_NOTICE_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_NOTICE_ERROR':
      console.log('create project error');
      return state;
    case 'EDIT_NOTICE_SUCCESS':
      console.log('create project success');
      return state;
    case 'EDIT_NOTICE_ERROR':
      console.log('create project error');
      return state;
      case 'CREATE_VisitingDr_SUCCESS':
        console.log('CREATE_VisitingDr_SUCCESS');
        return state;
      case 'CREATE_Visiting_ERROR':
        console.log('CREATE_Visiting_ERROR');
        return state;




    default:
      return state;
  }
};
export default projectReducer;