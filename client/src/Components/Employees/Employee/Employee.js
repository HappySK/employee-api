import React from 'react'
import { Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { updateEmployee } from '../../../actions/employees'

const Employee = () => {

  const emp = useSelector(state => state.employeeReducer)
  const dispatch = useDispatch()

  const handleEmployeeDetails = (employee) => {
    dispatch(updateEmployee(employee))
    console.log(employee)
  }

  return (
    <div>
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                (emp.length !== 0) && emp.map(({_id, emp_name, emp_email, emp_phone_no, emp_salary}, index) => 
                    <TableRow key={index}>
                      <TableCell >{emp_name}</TableCell>
                      <TableCell >{emp_email}</TableCell>
                      <TableCell>{emp_phone_no}</TableCell>
                      <TableCell>{emp_salary}</TableCell>
                      <TableCell>
                        <Button variant="outlined" color="secondary" onClick={() => handleEmployeeDetails({_id, emp_name, emp_email, emp_phone_no, emp_salary})}>Edit Employee</Button>
                      </TableCell>
                    </TableRow>
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Employee
