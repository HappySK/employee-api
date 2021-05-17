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
	const { id } = req.params
	const emp = req.body
	
	const employee = await Employee.findByIdAndUpdate({_id : id}, { $set : emp}, (err, emp) => {
		if(err) console.log(err)
	})

	res.send(employee)
}

export { getEmployees, createEmployee, updateEmployee };
