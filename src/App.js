import './App.css'
import React, { useEffect, useState } from 'react'
import Mole from './components/mole/Mole.js'

function App() {
  // states
  const [dens, setDens] = useState(getDensState())    //dens: array of the holes for the mole game
  const [points, setPoints] = useState(0)             // points: number of times a mole was clicked

  // effects
  useEffect(() => {
    startGame()
  }, [])

  // helpers
  function startGame() {
    setInterval(() => {
      setDens(getDensState())
    }, 1500)
  }

  function getDensState() {
    return new Array(9).fill({}).map(() => {
      return {
        isMoleVisible: [true, false][Math.round(Math.random())]
      }
    })
  }

  function onMoleWhacked() {
    setPoints(points + 1)
  }

  // renders
  const denElements = dens.map((den, index) => {
    return (
      <Mole key={`mole-${index}`} den={den} />
    )
  })

  return (
    <div className="App">
      <h1>WHACK-A-MOLE!</h1>
      <h2>Points: {points}</h2>
      <div className="dens">
        {denElements}
        <div style={{ clear: 'both' }}></div>
      </div>
    </div>
  )
}

export default App
