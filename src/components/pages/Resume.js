import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { Button } from '../Button';

function Resume() {
  return (
    <>
      <h1 className='resume'>RESUME</h1>
      <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >
        SEE MY RESUME <i className='fas fa-chevron-right' />
      </Button>
      <Footer />
    </>
  )
}

export default Resume;