import React from 'react';
import './Highlight.css';
import { Button } from './Button';

function Highlight() {
  return (
    <div className='highlight-container'>
        {/* <div className='highlight-banner'>
            <img 
                src='/svg/robot-arm.svg' 
                alt='University of Toronto'
                className='highlight-img'/> 
            <img 
                src='/svg/University_of_Toronto-Logo.svg' 
                alt='University of Toronto'
                className='highlight-img'/> 
            <img 
                src='/img/cfddwz_300x126.png' 
                alt='Computational Aerodynamics'
                className='highlight-img'/> 
        </div>
        <div className='highlight-banner'>
            <Button
                // className='highlight-btn' 
                buttonStyle='btn--primary'
                buttonSize='btn--xl'
            >
                EDUCATION
            </Button>
        </div>
        <div className='highlight-banner'>
            <img 
                src='/svg/grad-hat.svg'
                className='education-icon'
                alt='graduation hat'
            ></img>
        </div> */}



        <div className='highlight-banner'>
            <Button
                // className='highlight-btn' 
                buttonStyle='btn--primary-outline'
                buttonSize='btn--xl'
            >
                EDUCATION
            </Button>
        </div>
        {/* <div className='highlight-banner'>
            <img 
                src='/svg/grad-hat.svg'
                className='education-icon'
                alt='graduation hat'
            ></img>
        </div> */}
    </div>
  )
}

export default Highlight;