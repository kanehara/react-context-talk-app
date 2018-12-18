import React from 'react'
import createCharacterService from './services/createCharacterService'
import {withRouter} from 'react-router'
import AuthContext from './AuthContext'

class CharacterDetailRoute extends React.Component {
  state = {
    loading: false,
    character: null
  }
  
  static contextType = AuthContext

  componentDidMount () {
    this.setState({loading: true})
    createCharacterService(this.context.token).getCharacter(this.props.match.params.name)
      .then(character => this.setState({character}))
      .finally(() => this.setState({loading: false}))
  }

  render () {
    if (this.state.loading) return <h3>Loading...</h3>

    const {character} = this.state
    if (!character) return <h3>404 Not found</h3>
    return (
      <React.Fragment>
        {this.context.favoriteCharacter === character.name && <h3>*** Your favorite! ***</h3>}
        <h1>{character.name}</h1>
        <h2>Special skill: {character.specialSkill}</h2>
        <p>{character.bio}</p>
        <img src={character.imgSrc} alt={character.name} />
      </React.Fragment>
    )
  }
}

export default withRouter(CharacterDetailRoute)
