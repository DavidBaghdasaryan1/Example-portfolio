import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import ProjectsDisplay from './pages/ProjectsDisplay'


function App() {



  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path="/project/:id" element={<ProjectsDisplay />} />
          <Route path='/experience' element={<Experience />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
