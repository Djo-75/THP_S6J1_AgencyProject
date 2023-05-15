import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Works from './components/Works/Works'
import Home from './components/Home/Home'
import StudyCase from './components/StudyCase/StudyCase'
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectsSlug-study-case" element={<StudyCase />} /> //routing dynamique avec le slug
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
