import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ProjectDetails from './components/Projects/ProjectDetails'
import Projects from './components/Projects/Projects';
import { Routes, Route } from 'react-router-dom';
import ContactMe from './components/ContactMe'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/projects' element={<Projects />} ></Route>
        <Route path='projects/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/contact' element={<ContactMe></ContactMe>}></Route>
        <Route path='projects/:id' element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
    </div>
  )
}

export default App
