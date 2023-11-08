import React from 'react'
import './Projects.css'

function TurtlebotRacing() {
  return (
    <>
      <div>TurtlebotRacing</div>

      <div className='article-container'>
        <div className='article-col'>
          <p>
            In my third year Robotics course, I learned to use Python-ROS to program Turtlebot WafflePi robots. In the first few labs, I implemented line following using a PID controller. To do this, I sliced a row of pixels from the camera image, providing me with a 1D vector, which I then denoised using a simple rolling average filter and searched for the darkest point in the vector. I then configured my controller to regulate the input signal to track the set point in the center of the camera. The control input was the angular velocity omega of the robot, causing it to turn to correct its course.
          </p>
          <p>
            In the final few labs, we implemented a bayesian localization algorithm, which effectively allowed the robot to localize itself along a 1D path dotted with landmarks, being colored tiles.
          </p>
          <h3> Bayesian Localization </h3>
          <p>
            The robot begins with no information on its locality, characterized by a uniform distribution over the domain. As it moves around, it occasionally passes a landmark, at which point we consider that it can make an observation, updating the probability distribution for its location. Specifically, When passing over the tile, the robot uses its camera to identify the color. Given the possibility of measurement error, each color measurement taken has a chance of having been produced by a tile of any of the colors, with a probability given by the following table: 
          </p>
          
        </div>
      </div>

      <Footer />
    </>
  )
}

export default TurtlebotRacing;