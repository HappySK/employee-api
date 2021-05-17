import express from 'express'

import { getEmployees, createEmployee, updateEmployee } from '../controllers/employee.js'

const route = express.Router()

route.get('/', getEmployees)
route.post('/create', createEmployee)
route.patch('/update/:id', updateEmployee)

export default route