import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Works from './components/Works/Works'
import Home from './components/Home/Home'
import StudyCase from './components/StudyCase/StudyCase'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/studycase/:projectsSlug" element={<StudyCase />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
