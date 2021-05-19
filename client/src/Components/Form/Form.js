import React, { useEffect, useState } from "react";
import { Paper, Button, TextField, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import makeStyles from "./styles";
import { createEmployee, updateEmployee } from "../../actions/employees";

const Form = ({ currentId, setCurrentId }) => {
	const classes = makeStyles();

	const dispatch = useDispatch();
	const employee = useSelector(state => currentId ? state.employeeReducer.find(emp => emp._id === currentId) : null)

	const initialEmployeeState = {
		emp_name: "",
		emp_email: "",
		emp_phone_no: "",
		emp_salary: "",
	};

	const [employeeData, setEmployeeData] = useState(initialEmployeeState);

	useEffect(() => {
		if(currentId)
		{
			setEmployeeData(employee)
		}
	}, [currentId, employee])

	const handleChange = (e) => {
		setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(currentId)
		{
			await dispatch(updateEmployee(employeeData))
		}
		else
		{
			dispatch(createEmployee(employeeData));
		}
		clear()
	};

	const clear = () => {
		setCurrentId(null)
		setEmployeeData(initialEmployeeState)
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className={classes.form} method="post">
				<Paper elevation={3} className={classes.paper}>
					<Typography variant="h5" align="center">
						{currentId ? 'Employee Data Updation' : 'Employee Data Submission'}
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
					<Button type="submit" variant="contained" color="primary" disableRipple fullWidth>
						{currentId ? 'Update' : 'Submit'}
					</Button>
				</Paper>
			</form>
		</div>
	);
};

export default Form;
