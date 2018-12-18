import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {fetchCharacter} from './actions/character'

class CharacterDetailRoute extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchCharacter(this.props.match.params.name))
  }

  render () {
    const {character} = this.props.character
    if (!character) return <h3>404 Not found</h3>
    return (
      <React.Fragment>
        {this.props.auth.favoriteCharacter === character.name && <h3>*** Your favorite! ***</h3>}
        <h1>{character.name}</h1>
        <h2>Special skill: {character.specialSkill}</h2>
        <p>{character.bio}</p>
        <img src={character.imgSrc} alt={character.name} />
      </React.Fragment>
    )
  }
}

export default withRouter(connect(state => ({
  auth: state.auth,
  character: state.character
}))(CharacterDetailRoute))
