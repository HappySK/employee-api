import React, { useState } from "react";
import { Paper, Button, TextField, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import makeStyles from "./styles";
import { createEmployee } from "../../actions/employees";

const Form = () => {
	const classes = makeStyles();

	const dispatch = useDispatch();

	const initialEmployeeState = {
		emp_name: "",
		emp_email: "",
		emp_phone_no: "",
		emp_salary: "",
	};

	const [employeeData, setEmployeeData] = useState(initialEmployeeState);

	const handleChange = (e) => {
		setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createEmployee(employeeData));
		setEmployeeData(initialEmployeeState)
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className={classes.form} method="post">
				<Paper elevation={3} className={classes.paper}>
					<Typography variant="h5" align="center">
						Employee Data Submission
					</Typography>
					<TextField
						name="emp_name"
						variant="outlined"
						label="Employee Name"
						className={classes.textField}
						size="small"
						value={employeeData.emp_name}
						onChange={handleChange}
					/>
					<TextField
						name="emp_email"
						variant="outlined"
						label="Employee Email"
						className={classes.textField}
						size="small"
						value={employeeData.emp_email}
						onChange={handleChange}
					/>
					<TextField
						name="emp_phone_no"
						variant="outlined"
						label="Employee Phone Number"
						className={classes.textField}
						size="small"
						value={employeeData.emp_phone_no}
						onChange={handleChange}
					/>
					<TextField
						name="emp_salary"
						variant="outlined"
						label="Employee Salary"
						className={classes.textField}
						size="small"
						value={employeeData.emp_salary}
						onChange={handleChange}
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
