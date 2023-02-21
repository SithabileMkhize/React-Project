import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Athlete from './components/Athlete'
import './App.css'

function App() {
  

  return (
    <>
      <Header />
      <Athlete />
    </>
  )
}

export default App

let AthleteArray = [{
  image: 'serena-williams.jpg',
  name: 'Serena Williams',
  sport: 'Tennis',
},{
  image: 'simone-biles.jpg',
  name: 'Simone Biles',
  sport: 'Gymnastics',
},{
  image: 'shelly-Ann.jpg',
  name: 'Shelly-Anne Fraser-Pryce',
  sport: 'Athletics',
}]