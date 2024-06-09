import React from 'react';
import Footer from '../Footer';
import Cards from '../Cards';
import TextSection from '../TextSection';

function Projects() {
    return (
        
      <>
        <TextSection header='Projects'>
          <p>
            <a href="https://github.com/eric-lefort" target="_blank" rel="noreferrer">
              <img style={{ height: '24px', marginRight: '24px' }} src="/svg/github-mark.svg" alt="GitHub Logo" />
            </a>
          </p>
        </TextSection>
        <Cards />
      </>
    );
}

export default Projects;