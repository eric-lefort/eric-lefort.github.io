import React from 'react'
import './Projects.css'
import Footer from '../../Footer';

function TurtlebotRacing() {
  return (
    <>
      <div className='article-container'>
        <div className='article-col'>
          <h1>TurtlebotRacing</h1>
          <p>
            In my third year Robotics course, I learned to use Python-ROS to program Turtlebot WafflePi robots. In the first few labs, I collaborated with my lab partner, to implement line following using a PID controller. To do this, we sliced a row of pixels from the camera image, providing us with a 1D vector, which was then denoised using a simple rolling average filter and searched for the darkest point in the vector. We then configured the controller to regulate the input signal to track the set point in the center of the camera. The control input was the angular velocity omega of the robot, causing it to turn to correct its course.
          </p>
          <p>
            After tuning the parameters of the PID, we participated in a race between the dozen or so teams in the lab section. 
          </p>
          <p>
            In the final few labs, we implemented a bayesian localization algorithm, which effectively allowed the robot to localize itself along a 1D path dotted with landmarks, being colored tiles.
          </p>
          <h2> Bayesian Localization </h2>
          <p>
            The robot begins with no information on its locality, characterized by a uniform distribution over the domain. As it moves around, it occasionally passes a landmark, at which point we consider that it can make an observation, updating the probability distribution for its location. Specifically, When passing over the tile, the robot uses its camera to identify the color. Given the possibility of measurement error, each color measurement taken has a chance of having been produced by a tile of any of the colors, with a probability given by the following table: 
          </p>
          <table>
            <tr>
              <th className='table_col1'>Z_k | x_k</th>
              <th>red</th>
              <th>green</th>
              <th>blue</th>
              <th>yellow</th>
            </tr>
            <tr>
              <td className='table_col1'>red</td>
              <td>0.7</td>
              <td>0.05</td>
              <td>0.05</td>
              <td>0.6</td>
            </tr>
            <tr>
              <td className='table_col1'>green</td>
              <td>0.15</td>
              <td>0.7</td>
              <td>0.25</td>
              <td>0.3</td>
            </tr>
            <tr>
              <td className='table_col1'>blue</td>
              <td>0.15</td>
              <td>0.25</td>
              <td>0.7</td>
              <td>0.1</td>
            </tr>
          </table> 
          <p>
            For more details, see the full project report <a href='/doc/ROB301_Lab_Report.pdf'>here</a>.
          </p>
        </div>
        <div className='article-col small'>
          <div>
            <img
              src='/img/turtlebots/img1.jpeg'
              alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TurtlebotRacing;