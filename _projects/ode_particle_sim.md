---
layout: page
title: ODE Particle Simulation
description: Particle motion and rendering with pygame
# img:
video: assets/video/ode-particle-sim/05.webm
importance: 2
category: learning
---

As a short art project and learning experience, I teamed up with my friend and, together, we built an ordinary differential equation visualizer based on the flow of particles.

We built the project in one evening, using Python and pygame to do rendering. Effectively, the code simply creates a number of randomly positioned particles and simulates their motion using the specified governing equation. (Which was usually a matrix specifying a linear, homogeneous ODE) In addition to simply rendering the pixels to the screen as circles, we create a fade effect by adding some factor (~0.99) times the previous screen to the current one. This simple trick improves the visualization greatly.

### Linear Homogeneous

$$ \textbf{\dot x} = \textbf{A} \textbf{x} $$

In general solutions for a 2d system are simple. Based on the eigenvalues, for the real component of the eigenvalues, we will see exponential convergence or divergence centered around 0, and for the complex component, we will see a periodic revolution centered on the origin.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/ode-particle-sim/09-wide.webm" title="example image" class="img-fluid rounded z-depth-1" autoplay="true" loop="true"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/ode-particle-sim/02.webm" title="example image" class="img-fluid rounded z-depth-1" autoplay="true" loop="true"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/ode-particle-sim/14.webm" title="example image" class="img-fluid rounded z-depth-1" autoplay="true" loop="true"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/ode-particle-sim/12.webm" title="example image" class="img-fluid rounded z-depth-1" autoplay="true" loop="true"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/ode-particle-sim/10.webm" title="example image" class="img-fluid rounded z-depth-1" autoplay="true" loop="true"%}
    </div>
</div>
<div class="caption">
    Linear homogeneous ODE simulations
</div>

### Going Further

- Nonhomogeneous
- Second-order
