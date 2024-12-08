---
layout: page
title: Reinforcement Learning
description: Research in Munich. How to explore efficiently in highly overactuated environments
# img:
video: assets/video/lsy-rl/unitree_a1_duo_cropped.webm
importance: 1
category: learning
github: https://github.com/OliEfr/latent-action-priors
related_publications: hausdörfer2024latentactionpriorssingle
---

This project started off as an attempt to solve the problem of exploration in high-dof (overactuated) environments. An example is the human reacher environment from **DEP-RL: Embodied Exploration for Reinforcement Learning in Overactuated and Musculoskeletal Systems** (2023) by Schumacher et al.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/lsy-rl/human_reacher_0.webm" title="example image" class="img-fluid rounded z-depth-1" autoplay="true" loop="true"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/lsy-rl/human_reacher_1.webm" title="example image" class="img-fluid rounded z-depth-1" autoplay="true" loop="true"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/lsy-rl/human_reacher_2.webm" title="example image" class="img-fluid rounded z-depth-1" autoplay="true" loop="true"%}
    </div>
</div>
<div class="caption">
    Human reacher environment.
</div>

This problem is apparent in many robotic control problems, as high dof systems often require very specific synergies across actuators and across time. To address this, we propose learning a latent, lower dimensional, action representation from short expert demonstrations. This prior information allows the agent to learn much better gaits across a variety of locomotion environments, particularly when combined with style rewards.

See results on our [website](https://sites.google.com/view/latent-action-priors) or see our paper on [arXiv](https://arxiv.org/abs/2410.03246).

A big thanks to Oliver for working with me throughout this project. Thanks to you I learned a great deal about:

- designing gymnasium environments
- designing and running experiments
- how different RL algorithms work, in particular PPO

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/lsy-rl/unitree_a1_demo.webm" title="" class="img-fluid rounded z-depth-1" autoplay="true" loop="true"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/lsy-rl/unitree_a1_gallop.webm" title="" class="img-fluid rounded z-depth-1" autoplay="true" loop="true"%}
    </div>
</div>
<div class="caption">
    Left: 1 gait-cycle expert demonstration. Right: resulting learned gait, when combined with style rewards.
</div>
