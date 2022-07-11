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
  // The Mole objects in dens change their visability every 1.5 seconds
  // This method is called in useEffect.
  // But WHEN is useEffect called? 
  // I think... it's called automatically the moment the browser is loaded or reloaded
  function startGame() {
    setInterval(() => {
      setDens(getDensState())
    }, 1500)
  }

  // Uses map() to loop thru the dens array and gives it an isMoleVisible attribute
  // that's either true or false. Used in Mole.js to determine whether to render it
  // or not.
  function getDensState() {
    return new Array(9).fill({}).map(() => {
      return {
        isMoleVisible: [true, false][Math.round(Math.random())]
      }
    })
  }

  // Passed into Mole.js. For the img tag, it has an onClick={} attribute.
  // When the image is clicked, points is incremented by 1.
  // The Image currently doesn't disappear
  function onMoleWhacked() {
    setPoints(points + 1)
  }

  // renders
  const denElements = dens.map((den, index) => {
    return (
      <Mole key={`mole-${index}`} den={den} onMoleWhacked={onMoleWhacked} />
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
