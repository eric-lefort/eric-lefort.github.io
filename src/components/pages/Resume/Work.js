import React from 'react';
import '../../../App.css';
import TimelineSection from '../../TimelineSection';
import TextSection from '../../TextSection';

function Work() {
  return (
    <>
      <TextSection header='Work'></TextSection>
      <TimelineSection 
        title='Research Student'
        location='Learning Systems and Robotics Lab, Technische Universität München'
        date='May 2024 - Aug 2024'
      >
        <p>
          Supervisor: <a href='https://www.dynsyslab.org/team/' target='_blank' rel='noreferrer'>Prof. Angela Schoellig</a>
        </p>
        <ul>
          <li>Experimental reinforcement learning using reduced latent action space for more efficient exploration. Applications with high-dimensional and redundant action spaces.</li>
          <li>Implemented control pipeline for Franka Emika FR3 robot using libfranka.</li>
          <li>Creation of simulation environment for lego brick assembly and tuning physics simulation for realistic contact</li>
        </ul>
      </TimelineSection>

      <TimelineSection 
        title='AI Silicon Digital Design Co-op'
        location='Tenstorrent Inc.'
        date='May 2023 - Apr 2024'
      >
        <p>
          System-On-Chip team
        </p>
        <ul>
          <li>Designed and optimized RISC-V CPU for data movement engine using Chipyard Rocket Chip generator. Benchmarking and optimizing memory system, bus widths, CDC, etc. for optimal PPA.</li>
          <li>Created SystemVerilog + C API for writing C-based Network-On-Chip tests in full-chip simulation.</li>
          <li>Maintained Python script for parametric generation of chip interconnect network, adding support for mesh interconnect topology.</li>
        </ul>
        <p>
          <a href='https://tenstorrent.com/' target='_blank' rel='noreferrer'>Company website</a>
        </p>
      </TimelineSection>

      <TimelineSection 
        title='Research Student'
        location='Computational Aerodynamics Group, University of Toronto Institute for Aerospace Studies'
        date='May 2022 - Aug 2022'
      >
        <p>

        Supervisor:  <a href='https://www.utias.utoronto.ca/computational-aerodynamics-lab/research-group/' target='_blank' rel='noreferrer'>Prof. David W. Zingg</a> 
        </p>
        <ul>
          <li>Analyzed flow solver performance to identify avenues for improving CFD algorithms.</li>
          <li>Researched unconventional methods to create meshes more quickly and easily.</li>
          <li>Implemented finite-difference algorithms for solving partial differential equations.</li>
        </ul>
      </TimelineSection>

      <TimelineSection 
        title='Senior Member, Aerodynamics, Manufacturing'
        location='University of Toronto Formula SAE Team'
        date='Sep 2021 - Feb 2023'
      >
        <ul>
          <li>Used StarCCM to run simulations and optimize parameters for aerodynamic performance.</li>
          <li>Designed parts in Solidworks and integration with assembly for early prototyping.</li>
        </ul>
      </TimelineSection>

      <TimelineSection 
        title='Software Developer'
        location='Rocscience Inc'
        date='May 2021 - Aug 2021'
      >
        <ul>
          <li>Automated UI testing and creation of documentation using TestComplete and Python.</li>
          <li>Improved scalability and automation of UI testing process using Azure DevOps.</li>
        </ul>
      </TimelineSection>
    </>
  )
}

export default Work;