import Employee from "../models/employee.js";

const getEmployees = async (req, res) => {
	const emp = await Employee.find();
	res.send(emp);
};

const createEmployee = (req, res) => {
	const emp = req.body;
	const employee = new Employee(emp);

	employee.save((err, emp) => {
		if (err) console.log(err);
	});

	res.send("Employee Details added successfully");
};

export { getEmployees, createEmployee };
