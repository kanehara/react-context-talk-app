import CharacterService from '../services/character.service'

export const fetchCharacter = name => dispatch => {
  dispatch({type: 'FETCH_CHARACTER_START'})

  CharacterService.getCharacter(name)
    .then(c => dispatch({type: 'FETCH_CHARACTER_SUCCESS', payload: c}))
    .catch(e => dispatch({type: 'FETCH_CHARACTER_ERROR', payload: e}))
}

export const clearCharacter = () => ({type: 'CLEAR_CHARACTER'})
