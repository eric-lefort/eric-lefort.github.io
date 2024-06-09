import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';
import './ExperienceTimeline.css';
const ExperienceTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2024 - Aug 2024"
        iconStyle={{ color: '#bbb' }}
        icon={<FaUniversity />}
      >
        <h3 className="vertical-timeline-element-title">Research Student</h3>
        <h4 className="vertical-timeline-element-subtitle">Learning Systems and Robotics Lab</h4>
        <p>
          Technische Universität München. Supervisor: Dr. Angela Schoellig.
          <ul>
            <li>Experimental reinforcement learning using reduced latent action space for more efficient exploration. Applications with high-dimensional and redundant action spaces.</li>
            <li>Implemented control pipeline for Franka Emika FR3 robot using libfranka.</li>
            <li>Creation of simulation environment for lego brick assembly and tuning physics simulation for realistic contact.</li>
          </ul>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2023 - Apr 2024"
        iconStyle={{ color: '#bbb' }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">AI Silicon Digital Design Co-op</h3>
        <h4 className="vertical-timeline-element-subtitle">Tenstorrent Inc.</h4>
        <p>
          System-On-Chip team.
          <ul>
            <li>Maintained Python script for parametric generation of chip interconnect network.</li>
            <li>Added support for mesh interconnect topology.</li>
            <li>Created SystemVerilog + C API for writing C-based Network-On-Chip tests in full-chip simulation.</li>
            <li>Design and optimized RISC-V CPU for data movement engine using Chipyard Rocket Chip generator. Benchmarking and optimizing memory system, bus widths, CDC, etc. for optimal PPA.</li>
          </ul>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2022 - Aug 2022"
        iconStyle={{ color: '#bbb' }}
        icon={<FaUniversity />}
      >
        <h3 className="vertical-timeline-element-title">Research Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Computational Aerodynamics Group</h4>
        <p>
          University of Toronto Institute for Aerospace Studies. Supervisor: Dr. David W. Zingg.
          <ul>
            <li>Analyzed flow solver performance to identify avenues for improving CFD algorithms.</li>
            <li>Researched unconventional methods to create meshes more quickly and easily.</li>
            <li>Implemented finite-difference algorithms for solving partial differential equations.</li>
          </ul>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep 2021 - Feb 2023"
        iconStyle={{ color: '#bbb' }}
        icon={<FaUniversity />}
      >
        <h3 className="vertical-timeline-element-title">Senior Member</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Toronto Formula SAE Team</h4>
        <p>
          Aerodynamics, Manufacturing.
          <ul>
            <li>Used StarCCM to run simulations and optimize parameters for aerodynamic performance.</li>
            <li>Designed parts in Solidworks and integration with assembly for early prototyping.</li>
          </ul>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2021 - Aug 2021"
        iconStyle={{ color: '#bbb' }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Software Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Rocscience Inc.</h4>
        <p>
          <ul>
            <li>Automated UI testing and creation of documentation using TestComplete and Python.</li>
            <li>Improved scalability and automation of UI testing process using Azure DevOps.</li>
          </ul>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default ExperienceTimeline;
