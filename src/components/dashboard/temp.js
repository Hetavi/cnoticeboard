import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { generateNotice } from '../../store/actions/listingActions'
function Example(pp) {
  const [count, setCount] = useState(0);
  const [list1, setList] = useState('')
  const [Counts, setCounts] = useState(0)
  useEffect(() => {
    setCounts(pp.projects.length)
    setList('list')
  });
  var newarr = []
  const a = () => {
    newarr = pp.projects.map(project => {
      return (project.firstName + ' ' + project.lastName + '#' + project.Mobile + '#' + project.Dept)
    })
  }
  const b = () => {
    var nn = newarr.length / (2000);
    //nn= Math.ceil(nn)
    var i;
    for (i = 0; i < nn; i++) {
      var newarr1 = newarr.slice(i * 2000, (((i + 1) * 2000) - 1))
      pp.generateNotice([newarr1, i.toString()]);
    }
    setCount(count + 1);
    //setList(str)
    // //console.log(pp.projects)
    //  //console.log(Object.values(pp.projects))
    //  //console.log(Object.entries(pp.projects))
    //  //console.log(Object.keys(pp.projects))
  }
  var str = '##*'
  var i = 0
  //console.log(pp.props)
  //console.log(pp.projects)
  return (
    <div>
      <br/>
      <br/>
      <br/>
      Convert this is as cloud function<br/>
      (user add,update)
      {Counts}
      {
      }
      <p>You clicked {count} times</p>
      <button onClick={a}>
        Load Data
      </button>
      <br/>   <br/>   <br/>
      <button  onClick={b}>
        Load Data befor Updating Update Data
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  const projects = state.firestore.data.users;
  return {
    // project: projects,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = dispatch => {
  return {
    generateNotice: (project) => dispatch(generateNotice(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Example)