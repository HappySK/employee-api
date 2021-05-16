import React from 'react'
import { useSelector } from 'react-redux'

const Employee = () => {

  const emp = useSelector(state => state.employeeReducer)

  return (
    <div>
      {
        emp.map((employee, index) => 
          <div key={index}>
            <h2>Employee Name : {employee.emp_name}</h2>
            <h6>Employee Email : {employee.emp_email}</h6>
            <h6>Employee Email : {employee.emp_phone_no}</h6>
            <h6>Employee Email : {employee.emp_salary}</h6>
          </div>)
      }
    </div>
  )
}

export default Employee
