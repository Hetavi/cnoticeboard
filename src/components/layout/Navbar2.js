import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const Navbar2 = (props) => {
  console.log(props)
  let dashlink = null
  if (props.match.path === '/adminboard') {
    dashlink = <div>
      <div><button style={{ width: '300px', height: '2rem' }}><Link to='/dr'>New doctor</Link></button></div>
      <div><button style={{ width: '300px', height: '2rem' }}><Link to='/hosp'>New Hospitals</Link></button></div>
      <div><button style={{ width: '300px', height: '2rem' }}><Link to='/'>New Advertise</Link></button></div>
      <div><button style={{ width: '300px', height: '2rem' }}><Link to='/media'>New media</Link></button></div>
      <div ><button style={{ width: '300px', height: '2rem' }}> <Link to='/Old'>Edit old news</Link></button></div>
    </div>
  }
  return (
    <div className='center'>
      <h3>Dashboard</h3>
      {dashlink}
      <p></p>
      <div ><button style={{ width: '300px', height: '2rem' }}> <Link to='/create'>New Advertise</Link></button></div>
      <div><button style={{ width: '300px', height: '2rem' }}> <Link to='/signUp'>My Profile</Link></button></div>
    </div>
  )
}
export default Navbar2
