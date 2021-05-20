export const employeeReducer = (employees = [], action) => {
  switch(action.type)
  {
    case 'GET_EMPLOYEES' : 
      return action.payload

    case 'CREATE_EMPLOYEE' :
      return [ ...employees, action.payload ]

    case 'UPDATE_EMPLOYEE' : 
      return employees.map((employee) => employee.id === action.payload._id ? action.payload : employee)
    
    case 'DELETE_EMPLOYEE' : 
      return employees.filter((employee) => employee._id !== action.payload)

    default : 
      return employees
  }
}