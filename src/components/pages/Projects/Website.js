import React from 'react';
import './Projects.css';
import TextSection from '../../TextSection';

function Website() {
  return (
    <>
      <TextSection header='Learning React for Website Development'>
        <ul>
          <li>Understanding React components and JSX.</li>
          <li>Handling user interactions and events.</li>
          <li>Using props to pass data between components.</li>
          <li>Rendering lists of data with map function.</li>
          <li>Styling components with CSS or CSS-in-JS libraries like styled-components.</li>
          <li>Navigating between pages with React Router.</li>
          <li>Implementing responsive design with media queries.</li>
          <li>Practicing through projects and experimenting with different features.</li>
        </ul>
      </TextSection>
    </>
  )
}

export default Website;