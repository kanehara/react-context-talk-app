const initialState = {
  auth: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTHENTICATION':
      return { auth: action.payload }
    case 'UNSET_AUTHENTICATION':
      return { auth: null }
    default:
      return state
  }
}

export default authReducer
