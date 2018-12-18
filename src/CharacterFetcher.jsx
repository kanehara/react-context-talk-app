import React from 'react'
import AuthContext from './AuthContext'
import createCharacterService from './services/createCharacterService'

class CharacterFetcher extends React.Component {
  state = {
    loading: false,
    error: null,
    data: null
  }

  static contextType = AuthContext

  componentDidMount () {
    this.service = createCharacterService(this.context.token)
    this.setState({loading: true})
    if (this.props.name) {
      this.service.getCharacter(this.props.name)
        .then(data => this.setState({data}))
        .catch(error => this.setState({error}))
        .finally(() => this.setState({loading: false}))
    } else {
      this.service.getCharacters()
        .then(data => this.setState({data}))
        .catch(error => this.setState({error}))
        .finally(() => this.setState({loading: false}))
    }
  }

  render () {
    const {loading, error, data} = this.state
    return this.props.children({
      loading,
      error,
      data
    })
  }
}

export default CharacterFetcher
