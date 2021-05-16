import mongoose from "mongoose";

const employee = mongoose.Schema({
	emp_name: String,
	emp_email: String,
	emp_phone_no: String,
	emp_salary: String,
});

const emp_model = mongoose.model("employee_model", employee);

export default emp_model;