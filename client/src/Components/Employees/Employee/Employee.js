import React from "react";
import {
	Button,
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { deleteEmployee } from "../../../actions/employees";


const Employee = ({ setCurrentId }) => {
	const dispatch = useDispatch();
	const emp = useSelector((state) => state.employeeReducer);

	const handleEmployeeDetails = (employee) => {
		setCurrentId(employee._id);
	};

	const deleteEmployeeDetails = (id) => {
		dispatch(deleteEmployee(id))
	};

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
						{emp.length !== 0 &&
							emp.map(
								(
									{ _id, emp_name, emp_email, emp_phone_no, emp_salary },
									index
								) => (
									<TableRow key={index}>
										<TableCell>{emp_name}</TableCell>
										<TableCell>{emp_email}</TableCell>
										<TableCell>{emp_phone_no}</TableCell>
										<TableCell>{emp_salary}</TableCell>
										<TableCell>
											<Button
												variant="outlined"
												color="secondary"
												onClick={() =>
													handleEmployeeDetails({
														_id,
														emp_name,
														emp_email,
														emp_phone_no,
														emp_salary,
													})
												}
											>
												Edit Employee
											</Button>
											<Button
												variant="outlined"
												color="primary"
												onClick={() => deleteEmployeeDetails(_id)}
											>
												Delete Employee
											</Button>
										</TableCell>
									</TableRow>
								)
							)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Employee;
