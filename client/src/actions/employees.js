import * as api from '../api'

export const getAllEmployees = () => async (dispatch) => {
  try {
    const { data } = await api.getEmployees()
    dispatch({ type: 'GET_EMPLOYEES', payload: data})
  } catch (error) {
    console.log(error.message)
  } 
}