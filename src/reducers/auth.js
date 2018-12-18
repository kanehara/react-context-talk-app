const authReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_AUTHENTICATION':
      return action.payload
    case 'UNSET_AUTHENTICATION':
      return null
    default:
      return state
  }
}

export default authReducer
