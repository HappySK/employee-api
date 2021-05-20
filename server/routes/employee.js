import express from 'express'

import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employee.js'

const route = express.Router()

route.get('/', getEmployees)
route.post('/create', createEmployee)
route.patch('/update/:id', updateEmployee)
route.delete('/delete/:id', deleteEmployee)

export default route