import React from 'react';
import '../../../App.css';
import Education from './Education';
import Work from './Work';

function Resume() {
  return (
    <>
      {/* Banner, Education, Work, Projects, Skills, Awards */}
      <Education />
      <Work />
    </>
  )
}

export default Resume;