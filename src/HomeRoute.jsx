import React, { Component } from 'react'
import './App.css'
import CharacterChooser from './CharacterChooser'
import Character from './Character'
import createCharacterService from './services/createCharacterService'
import AuthContext from './AuthContext'

class HomeRoute extends Component {
  state = {
    loading: false,
    selectedCharacters: [],
    characters: []
  }

  static contextType = AuthContext

  componentDidMount () {
    this.setState({loading: true})
    createCharacterService(this.context.token).getCharacters()
      .then(c => this.setState({characters: c}))
      .finally(() => this.setState({loading: false}))
  }

  render() {
    if (this.state.loading) return <h3>Loading...</h3>
    return (
      <React.Fragment>
        <img src='/RickAndMortyLogo.png' alt="logo" width="50%" />
        <div>
          {this.state.selectedCharacters.length > 0 && <h1>Chosen characters:</h1>}
          <div className='selectedCharacters'>
            {this.state.selectedCharacters.map(c => (
              <Character key={c.name} name={c.name} imgSrc={c.imgSrc} onClick={() => this.setState({
                selectedCharacters: this.state.selectedCharacters.filter(x => x.name !== c.name)
              })}/>
            ))}
          </div>
        </div>
        <h1>Choose up to 6 Vindicators</h1>
        <CharacterChooser 
          characters={this.state.characters}
          selectedCharacters={this.state.selectedCharacters}
          onClick={c => 
            this.state.selectedCharacters.length < 6
             && this.setState({selectedCharacters: [...this.state.selectedCharacters, c]})
          } 
        />
      </React.Fragment>
    );
  }
}

export default HomeRoute;
