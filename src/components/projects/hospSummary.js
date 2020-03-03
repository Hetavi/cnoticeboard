import React from 'react'
import moment from 'moment'
const hospSummary = ({ passing_hosp }) => {
  console.log(passing_hosp)
  return (
    <div className=" container ">
      <div className='card'  >
        <span className="black-text"> <b>{passing_hosp.hospName}</b></span>
        <div className="black-text darken-5">{passing_hosp.city}</div>
        {/* following visting day sholud be print on all doctors list */}
        <div style={{ display: 'none' }}><span > </span><span className="yellow-text">{passing_hosp.id}</span></div>
        <div style={{ display: 'none' }}><span className="gray-text">By {passing_hosp.authorFirstName} {passing_hosp.authorLastName} {moment(passing_hosp.createdAt.toDate()).calendar()} </span>-
          </div>
      </div>
    </div>
  )
}
export default hospSummary
