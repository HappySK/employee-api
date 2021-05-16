import React from 'react'
import { useSelector } from 'react-redux'

const Employee = () => {

  const emp = useSelector(state => state.employeeReducer)

  return (
    <div>
      <h1>Employee</h1>
      {
        emp.map((employee, index) => <h5 key={index}>{employee.emp_name}</h5>)
      }
    </div>
  )
}

export default Employee
