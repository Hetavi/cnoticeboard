import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const Navbar2 = (props) => {
  return (
    <div className='center'>
      <h3>Admin Board</h3>
      <div ><button style={{width:'300px',height:'2rem'}}> <Link to='/create'>New news</Link></button></div>
      <div><button style={{width:'300px',height:'2rem'}}><Link to='/dr'>New doctor</Link></button></div>
      <div><button style={{width:'300px',height:'2rem'}}><Link to='/hosp'>New Hospitals</Link></button></div>
      <div><button style={{width:'300px',height:'2rem'}}><Link to='/'>New Advertise</Link></button></div>
      <div><button style={{width:'300px',height:'2rem'}}><Link to='/media'>New media</Link></button></div>
  
     <p></p>
      <div ><button style={{width:'300px',height:'2rem'}}> <Link to='/Old'>Edit old news</Link></button></div>
      <p></p>
      <div><button style={{width:'300px',height:'2rem'}}> <Link to='/signUp'>my profile</Link></button></div>
   
    </div>
  )
}
export default Navbar2
