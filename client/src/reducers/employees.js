export const employeeReducer = (employees = [], action) => {
  switch(action.type)
  {
    case 'GET_EMPLOYEES' : 
      return action.payload

    default : 
      return employees
  }
}