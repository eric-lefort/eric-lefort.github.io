---
layout: page
title: Summer Research in Munich
description: 
img: assets/img/lsy-lab/lego-3.jpg
importance: 1
category: work
related_publications: false
---

In May 2024, I moved to the city of Munich, Germany to work in the [Learning Systems Lab](https://www.dynsyslab.org/research/) under Professor Angela Schoellig for four months.

### Skills I Developed:

- Programming manipulators (Franka Emika Panda / FR3); forward and inverse kinematics; motion planning
- Using mujoco; creating simulation environments using URDF
- Task scheduling: ordering Lego brick placements to ensure more reliability
- Bayesian optimization
- Reinforcement learning. See [this page](/projects/lsy-rl).

## Lego Assembly

### Robot Controller
For controlling the robot, we used the [franky](https://github.com/TimSchneider42/franky) repository. We implemented our own high-level functions on top of this library in various controller files. The main controller is `demo_controller.py`, and `controller.py` attempts to implement a controller that works both in simulation and on the real robot, which is challenging for manual demonstrations.

### Planning Algorithm

#### Current Status

- [ ] Motion planning
- [x] Task planning

Task planning determines the sequence for placing Lego bricks, ensuring the FR3 gripper has free spaces on opposite sides to avoid collisions. The algorithm minimizes cases where bricks lack two opposing free sides.

After challenges with MoveIt integration, we opted for a simpler layer-by-layer approach for motion planning. Future integration may require either custom motion control on top of MoveIt or giving it a read-only interface for planning.

### Vision

We integrate perception feedback into the system by using an Orbbec RGB-D camera in a third-person view to locate and track Lego bricks. De-ViT model is employed for object recognition, allowing us to detect and draw bounding boxes around the bricks. We then use Foundation Pose (Nvidia) to perform object tracking and extract the precise pose of each brick, enabling more accurate placement during construction.

### Simulation

See the [LegoPanda](https://github.com/eric-lefort/LegoPanda) repository.

#### Features

- [x] Franka FR3 and custom Duplo Lego baseplate
- [x] XML injection to add arbitrary Lego bricks based on a config file
- [x] Robot control using inverse kinematics (Python robotics toolbox)

### Force Sensing

The robot is equipped with sensors for force, torque, and other metrics. We are logging data to train a neural network classifier in the future, aiming to identify failed placements in real time based on force feedback.

<div class="row">
    <div class="col-sm-6">
        {% include figure.liquid path="assets/img/lsy-lab/force_img_success.png" title="Success" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6">
        {% include figure.liquid path="assets/img/lsy-lab/force_img_fail.png" title="Fail" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        {% include figure.liquid loading="eager" path="assets/img/lsy-lab/force_img_fail.png" title="Fail" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6">
        {% include figure.liquid loading="eager" path="assets/img/lsy-lab/force_plot_fail.png" title="Fail Plot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

In this example, it's relatively easy to distinguish between success and failure cases, but detecting failures in real time can be much harder in practice.

### Web Interface

The website enhances the Lego project by allowing users to design and position blocks through a drag-and-drop interface. Blocks can be placed on a constrained grid, stacked, and then sent as instructions to the robot for construction. The interface uses data from a camera to retrieve the pose of the blocks for visualization, with the option to use preset data if the camera is not available.

{% include figure.liquid loading="eager" path="assets/img/lsy-lab/web_interface_demo.gif" title="Web Interface Demo" class="img-fluid rounded z-depth-1" %}

{% include figure.liquid path="/img/lsy-lab/web_interface_demo.gif" title="Web Interface Demo" class="img-fluid rounded z-depth-1" %}


### Limitations

The greatest challenge with the current setup is the dependency on a preprogrammed linear transformation between the Lego grid coordinate system and the robot frame. Despite extensive calibration, the robot accumulates errors between the specified origin and destination coordinates, which may lead to failed placements. This issue is partially addressed by the slower "drop and push" scheme, which is more robust to small errors, but the system remains prone to failure, especially when the desired brick location is between two existing bricks.
<div class="row">
    <div class="col-sm-6">
        <iframe src="https://www.youtube.com/embed/4ls3Hxa8JiY?si=bD9OYBjm8fH7tZRy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>