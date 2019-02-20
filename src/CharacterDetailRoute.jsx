import React, {useContext} from 'react'
import {withRouter} from 'react-router'
import CharacterFetcher from './CharacterFetcher'
import AuthContext from './AuthContext'

const CharacterDetailRoute = props => {
  const auth = useContext(AuthContext)

  return (
    <CharacterFetcher name={props.match.params.name}>
      {({loading, error, data: character}) => {
        if (loading) return <h3>Loading...</h3>
        if (error) return <h3>Something went wrong</h3>

        if (!character) return <h3>404 Not found</h3>
        return (
          <React.Fragment>
            {auth.favoriteCharacter === character.name && <h3>*** Your favorite! ***</h3>}
            <h1>{character.name}</h1>
            <h2>Special skill: {character.specialSkill}</h2>
            <p>{character.bio}</p>
            <img src={character.imgSrc} alt={character.name} />
          </React.Fragment>
        )
      }}
    </CharacterFetcher>
  )
}

export default withRouter(CharacterDetailRoute)
