const initialState = {
  loading: false,
  character: null,
  error: null
}

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'FETCH_CHARACTER_START':
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null
    //   }
    case 'FETCH_CHARACTER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        character: action.payload
      }
    case 'FETCH_CHARACTER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'CLEAR_CHARACTER':
      return {
        ...state,
        character: null
      }
    default:
      return state
  }
}

export default charactersReducer
