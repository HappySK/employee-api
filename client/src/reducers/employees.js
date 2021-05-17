export const employeeReducer = (employees = [], action) => {
  switch(action.type)
  {
    case 'GET_EMPLOYEES' : 
      return action.payload

    case 'CREATE_EMPLOYEE' :
      return [ ...employees, action.payload ]

    default : 
      return employees
  }
}