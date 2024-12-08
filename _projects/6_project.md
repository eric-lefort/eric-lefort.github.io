---
layout: page
title: "Turtlebot Racing"
description: PID controllers and bayesian localization
img: assets/img/turtlebots/img2_cropped.jpeg
importance: 4
category: learning
---

# Turtlebot Racing

In my third-year Robotics course, I learned to use Python-ROS to program Turtlebot WafflePi robots. In the first few labs, I collaborated with my lab partner to implement line following using a PID controller. To do this, we sliced a row of pixels from the camera image, providing us with a 1D vector, which was then denoised using a simple rolling average filter and searched for the darkest point in the vector. We then configured the controller to regulate the input signal to track the set point in the center of the camera. The control input was the angular velocity omega of the robot, causing it to turn to correct its course.

After tuning the parameters of the PID, we participated in a race between the dozen or so teams in the lab section.

In the final few labs, we implemented a Bayesian localization algorithm, which effectively allowed the robot to localize itself along a 1D path dotted with landmarks, being colored tiles.

## Bayesian Localization

The robot begins with no information on its locality, characterized by a uniform distribution over the domain. As it moves around, it occasionally passes a landmark, at which point we consider that it can make an observation, updating the probability distribution for its location. Specifically, when passing over the tile, the robot uses its camera to identify the color. Given the possibility of measurement error, each color measurement taken has a chance of having been produced by a tile of any of the colors, with a probability given by the following table:

| Z<sub>k</sub> \| x<sub>k</sub> | Red  | Green | Blue | Yellow |
| ------------------------------ | ---- | ----- | ---- | ------ |
| **Red**                        | 0.7  | 0.05  | 0.05 | 0.6    |
| **Green**                      | 0.15 | 0.7   | 0.25 | 0.3    |
| **Blue**                       | 0.15 | 0.25  | 0.7  | 0.1    |

For more details, see the full project report [here]({{ site.baseurl }}/assets/pdf/ROB301_Lab_Report.pdf).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/turtlebots/img1.jpeg" title="Turtlebot project image" class="img-fluid rounded z-depth-1" style="transform: rotate(90deg);" %}
    </div>
</div>
<div class="caption">
    Image from the Turtlebot Racing project.
</div>
