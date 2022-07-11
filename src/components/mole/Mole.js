import './Mole.css'
import React from 'react'
import MoleIcon from './Mole.svg'

function Mole(props) {
  const { den, onMoleWhacked } = props; // destructuring 

  return (
    <div className="den">
      {den.isMoleVisible &&
        <img src={MoleIcon} className="Mole" alt="Mole" onClick={onMoleWhacked} />}

    </div>
  )
}

export default Mole
