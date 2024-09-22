import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume/Resume';
import Projects from './components/pages/Projects';
import AtomicAI from './components/pages/Projects/AtomicAI';
import Turtlebots from './components/pages/Projects/Turtlebots';
import CFDLab from './components/pages/Projects/CFDLab';
import Website from './components/pages/Projects/Website';
import PhysicsEngine from './components/pages/Projects/PhysicsEngine';
import MansfieldMap from './components/pages/Projects/MansfieldMap';
import SeamCarving from './components/pages/Projects/SeamCarving';
import LSYLab from './components/pages/Projects/LSYLab';
import LSYRL from './components/pages/Projects/LSYRL';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div style={{height: '200px'}}>{/* Empty div to push content down */}</div>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/resume' exact Component={Resume}/>
        <Route path='/projects' exact Component={Projects}/>
        <Route path='/projects/atomic-ai' exact Component={AtomicAI}/>
        <Route path='/projects/turtlebots' exact Component={Turtlebots}/>
        <Route path='/projects/cfd-lab' exact Component={CFDLab}/>
        <Route path='/projects/physics-engine' exact Component={PhysicsEngine}/>
        <Route path='/projects/mansfield-map' exact Component={MansfieldMap}/>
        <Route path='/projects/seam-carving' exact Component={SeamCarving}/>
        <Route path='/projects/lsy-lab' exact Component={LSYLab}/>
        <Route path='/projects/lsy-rl' exact Component={LSYRL}/>
        <Route path='/projects/website' exact Component={Website}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
