
const reducer = (state = [], action = {}) => {
    switch (action.type) {
      case 'SELECT_MODEL':
        return [...state, action.payload]
      default:
        return state
    }
  }
  
  export default reducer