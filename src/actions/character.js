import createCharacterService from '../services/createCharacterService'

export const fetchCharacter = name => (dispatch, getState) => {
  dispatch({type: 'FETCH_CHARACTER_START'})

  createCharacterService(getState().auth.token).getCharacter(name)
    .then(c => dispatch({type: 'FETCH_CHARACTER_SUCCESS', payload: c}))
    .catch(e => dispatch({type: 'FETCH_CHARACTER_ERROR', payload: e}))
}

export const clearCharacter = () => ({type: 'CLEAR_CHARACTER'})
