import React from 'react'
import {Link} from 'react-router-dom'
const Character = props => (
  <div className='character' onClick={props.onClick}>
    <img src={props.imgSrc} alt={props.name} />
    <Link to={`/characters/${props.name}`}>
      <h3>{props.name}</h3>
    </Link>
  </div>
)

export default Character
