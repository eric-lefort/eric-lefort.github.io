import React from 'react';
import { Button } from './Button';
import './HeroSection.css'
import '../App.css'; // OPTIONAL??

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>ERIC LEFORT</h1>
        <p>
            I am an undergraduate Engineering Science student at the University of Toronto, with a major in Robotics Engineering. I am particularly interested in simulation of robotics systems and machine learning compute.
        </p>
        <div className='hero-btns'>
            <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >
                SEE MY RESUME <i className='fas fa-chevron-right' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection