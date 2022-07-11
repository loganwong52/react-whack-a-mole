import './Mole.css'
import React from 'react'
import MoleIcon from './Mole.svg'

function Mole(props) {
  // const { dens, setDens } = props; // destructuring 

  return (
    <div className="den">
      {props.den.isMoleVisible &&
        <img src={MoleIcon} className="Mole" alt="Mole" />}

    </div>
  )
}

export default Mole
