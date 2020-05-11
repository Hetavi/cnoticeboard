import React from 'react'
import moment from 'moment'
const hospSummary = ({ passing_hosp }) => {
  //console.log(passing_hosp)
  const phone = "tel://+91" + passing_hosp.phone1
  const p1 = "https://www.google.com/"
  return (
    <div className=" container ">
     
       {/* <div className='col s1' m1>
         <a phone><i class="material-icons">local_phone</i></a> 
  </div>*/}
        <div className='col s12 m6'>
          <div className='card'  >
            <span > <b>{passing_hosp.hospName}</b></span><br></br>
            <span className="black-text">{passing_hosp.city.toUpperCase()}</span>
            {/* following visting day sholud be print on all doctors list */}
            <div style={{ display: 'none' }}><span > </span><span className="yellow-text">{passing_hosp.id}</span></div>
            <div style={{ display: 'none' }}><span className="gray-text">By {passing_hosp.authorFirstName} {passing_hosp.authorLastName} {moment(passing_hosp.createdAt.toDate()).calendar()} </span>-
          </div>
          </div>
        
      </div >
    </div >
  )
}
export default hospSummary
