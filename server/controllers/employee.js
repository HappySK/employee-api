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

	res.json(employee);
};

const updateEmployee = async (req, res) => {
	const { id } = req.params;
	const emp = req.body;

	const employee = await Employee.findByIdAndUpdate(
		{ _id: id },
		{ $set: emp },
		(err, emp) => {
			if (err) console.log(err);
		}
	);

	res.send(employee);
};

const deleteEmployee = async (req, res) => {
	const { id } = req.params;
	await Employee.findByIdAndRemove({ _id: id }, (err) => {
		if(err) 
		{
			return res.status(400).json({ message : err.message })
		}
	})

	res.status(200).json({ message : 'Employee Deleted Successfully' })
};

export { getEmployees, createEmployee, updateEmployee, deleteEmployee };
