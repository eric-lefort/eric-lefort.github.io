import React from 'react';
import '../../../App.css';
import TimelineSection from '../../TimelineSection';
import TextSection from '../../TextSection';

function Education() {
  return (
    <>
      <TextSection header='Education'/> 
      <TimelineSection 
        title='BASc. Engineering Science: Robotics'
        location='University of Toronto'
        date='Sep 2020 - Jun 2025'
      >
      </TimelineSection>
    </>
  )
}

export default Education;