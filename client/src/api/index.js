import axios from 'axios'

const URL = 'http://localhost:5000/employee'

export const getEmployees = () => axios.get(URL)
export const createEmployee = (employeeData) => axios.post(`${URL}/create`, employeeData)
export const updateEmployee = (employee) => axios.patch(`${URL}/update/${employee._id}`, employee)
export const deleteEmployee = (id) => axios.delete(`${URL}/delete/${id}`)