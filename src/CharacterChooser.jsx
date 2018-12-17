import React from 'react'
import Character from './Character'

class CharacterChooser extends React.Component {
  render () {
    return (
      <div  className='characterGrid'>
        {this.props.characters
          .sort((c1, c2) => c1.name.localeCompare(c2.name))
          .filter(c => !this.props.selectedCharacters.some(sc => sc.name === c.name))
          .map(c => <Character key={c.name} name={c.name} imgSrc={c.imgSrc} onClick={() => this.props.onClick(c)} />)
        }
      </div>
    )
  }
}

export default CharacterChooser
