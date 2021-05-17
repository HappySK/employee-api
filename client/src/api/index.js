import axios from 'axios'

const URL = 'http://localhost:5000/employee'

export const getEmployees = () => axios.get(URL)
export const createEmployee = (employeeData) => axios.post(`${URL}/create`, employeeData)