import * as api from '../api'

export const getAllEmployees = () => async (dispatch) => {
  try {
    const { data } = await api.getEmployees()
    dispatch({ type: 'GET_EMPLOYEES', payload: data})
  } catch (error) {
    console.log(error.message)
  } 
}

export const createEmployee = (employeeData) => async (dispatch) => {
  try {
    const { data } = await api.createEmployee(employeeData)
    dispatch({ type: 'CREATE_EMPLOYEE', payload: data})
  } catch (error) {
    console.log(error.message)
  } 
}

export const updateEmployee = (employee) => async (dispatch) => {
  try {
    const { data } = await api.updateEmployee(employee)
    dispatch({ type: 'UPDATE_EMPLOYEE', payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await api.deleteEmployee(id)
    dispatch({ type : 'DELETE_EMPLOYEE', payload: id })
  } catch (error) {
    console.log(error)
  }
}
