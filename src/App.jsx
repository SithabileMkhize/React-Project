import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Header from './components/Header'
import AthleteSection from './components/AthleteSection'
import './App.css'
import Routing from './Routing'
import NewAthlete from './Pages/NewAthlete'

function App() {
  

  return (
    <>
      <Routing />
      <Header />
      <AthleteSection />
    </>
  )
}

export default App

