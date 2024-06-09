import React from 'react';
import '../../../App.css';
import Education from './Education';
import Work from './Work';
import TextSection from '../../TextSection';

function Resume() {
  return (
    <>
      {/* Banner, Education, Work, Projects, Skills, Awards */}
      <Education />
      <Work />
      <TextSection header='CV Document'>
        <p>
          <a href="../doc/Resume.pdf" target="_blank" rel="noreferrer">View my CV</a>
        </p>
      </TextSection>
    </>
  )
}

export default Resume;