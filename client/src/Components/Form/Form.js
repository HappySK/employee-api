import React, { useState } from "react";
import { Paper, Button, TextField } from "@material-ui/core";

import makeStyles from "./styles";

const Form = () => {
	const classes = makeStyles();

  const initialState = {
    emp_name : '',
    emp_email : '',
    emp_phone_no : '',
    emp_salary : ''
  }
  const [employeeData, setEmployeeData] = useState(initialState) 

	const handleChange = (e) => {
    setEmployeeData({...employeeData, [e.target.name] : e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  };

	return (
		<div>
			<form onSubmit={handleSubmit} className={classes.form} method="post">
				<Paper elevation={3} className={classes.paper}>
					<TextField
            name="emp_name"
						variant="outlined"
						label="Employee Name"
						className={classes.textField}
						size="small"
            value={employeeData.emp_name}
            onChange={handleChange}
						placeholder="Enter Employee Name"
					/>
					<TextField
            name="emp_email"
						variant="outlined"
						label="Employee Email"
						className={classes.textField}
						size="small"
            value={employeeData.emp_email}
            onChange={handleChange}
						placeholder="Enter Employee Email"
					/>
					<TextField
            name="emp_phone_no"
						variant="outlined"
						label="Employee Phone Number"
						className={classes.textField}
						size="small"
            value={employeeData.emp_phone_no}
            onChange={handleChange}
						placeholder="Enter Employee Phone Number"
					/>
					<TextField
            name="emp_salary"
						variant="outlined"
						label="Employee Salary"
						className={classes.textField}
						size="small"
            value={employeeData.emp_salary}
            onChange={handleChange}
						placeholder="Enter Employee Salary"
					/>
					<Button type="submit" variant="contained" color="primary" fullWidth>
						Submit
					</Button>
				</Paper>
			</form>
		</div>
	);
};

export default Form;
