import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Education from './components/pages/Education';
import Projects from './components/pages/Projects';
import AtomicAI from './components/pages/Projects/AtomicAI';
import Turtlebots from './components/pages/Projects/Turtlebots';
import About from './components/pages/About';
import CFDLab from './components/pages/Projects/CFDLab';
import Website from './components/pages/Projects/Website';
import PhysicsEngine from './components/pages/Projects/PhysicsEngine';

function App() {
  return (
    <>
    <Router>

      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/resume' exact Component={Resume}/>
        <Route path='/education' exact Component={Education}/>
        <Route path='/projects' exact Component={Projects}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/projects/atomic-ai' exact Component={AtomicAI}/>
        <Route path='/projects/turtlebots' exact Component={Turtlebots}/>
        <Route path='/projects/cfd-lab' exact Component={CFDLab}/>
        <Route path='/projects/website' exact Component={Website}/>
        <Route path='/projects/physics-engine' exact Component={PhysicsEngine}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
