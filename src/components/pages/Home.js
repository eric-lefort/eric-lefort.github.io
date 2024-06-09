import React from 'react';
import '../../App.css';
import Description from './Description';
import Education from './Resume/Education';
import Background from './Background';
import Projects from './Projects';
function Home() {
  return (
    <>
        <Description />
        <Education />
        <Projects />
        <Background />
    </>
  );
}

export default Home