import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div>
      <Header />
      <Home></Home>
      <Projects />
    </div>
  )
}

export default App
