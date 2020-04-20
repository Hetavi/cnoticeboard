import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const Navbar2 = (props) => {
  console.log(props)
  let dashlink = null
  if (props.match.path === '/adminboard') {
    dashlink = <div>
     
      <div><Link to='/dr'><button style={{ width: '300px', height: '2rem' }}>New doctor</button></Link></div>
      <div><Link to='/hosp'><button style={{ width: '300px', height: '2rem' }}>New Hospitals</button></Link></div>
       <div><Link to='/media'><button style={{ width: '300px', height: '2rem' }}>New News</button></Link></div>
      <div > <Link to='/Old'><button style={{ width: '300px', height: '2rem' }}>Edit old news</button></Link></div>
    </div>
  }
  return (
    <div className='center'>
      <h3>Dashboard</h3>
      {dashlink}
      <p></p>
      <div><Link to='/dash_user'><button style={{ width: '300px', height: '2rem' }}>{(props.match.path === '/adminboard')?'New Members':'Admin List'}</button></Link></div>
    
      <div > <Link to='/create'><button  style={{ width: '300px', height: '2rem' }}>My Advertise</button></Link></div>
      <div><Link to='/signUp'><button style={{ width: '300px', height: '2rem' }}> My Profile</button></Link></div>
    </div>
  )
}
export default Navbar2
