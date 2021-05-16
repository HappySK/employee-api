import express from 'express'

import { getEmployees, createEmployee } from '../controllers/employee.js'

const route = express.Router()

route.get('/', getEmployees)
route.post('/create', createEmployee)

export default route