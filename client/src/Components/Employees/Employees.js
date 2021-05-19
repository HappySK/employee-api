import React from 'react'
import Employee from './Employee/Employee'

const Employees = ({ setCurrentId }) => {
  return (
    <div>
      <h1>Employees Database</h1>
      <Employee setCurrentId={setCurrentId}/>
    </div>
  )
}

export default Employees
