import React from 'react';
import './Projects.css';
import Footer from '../../Footer';
import CardItemText from '../../CardItemText';

function CFDLab() {
  return (
    <>
      <div className='article-container'>
        <div className='article-col'>
          <h1>Computational Aerodynamics Group</h1>
          <p>
            From May to August 2022, I worked as a summer research student in the University of Toronto Institute for Aerospace Studies Computational Aerodynamics Group under Dr. David W. Zingg.
          </p>
          <img src='/img/cfd-lab/utias_photo.jpeg' alt=''/>
          <p>
            Throughout the summer I divided my attention between 3 main tasks: 
            <ul>
              <li><span>Performance analysis of the current generation multithreaded 2D and 3D flow solver Diablo with the older 2D flow solver Optima2D</span></li>
              <li><span>Experimenting with using low density automated hexahedral mesh generators to perform blocking</span></li>
              <li><span>MATLAB: implementing 1D meshing algorithm, multiple time-marching schemes, including explicit euler and 4th-order Runge-Kutta, as well as 2nd and 4th order spatial difference operators. </span></li>
            </ul>
          </p>
          <img src='/img/cfd-lab/naca0012.jpeg' alt=''/>
          <p>
            See the <a href='/doc/CFD_Lab_Report.pdf' target='_blank'>lab report</a> for more information.
          </p>
        </div>
      </div>
    </>
  )
}

export default CFDLab;