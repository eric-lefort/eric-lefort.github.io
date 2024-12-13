---
layout: page
title: "Fundamentals of Computer Vision"
description: Learning to process image input
img: assets/img/computer-vision/3-stereo/cones/cones_composite.png
importance: 2
category: learning
github: https://github.com/eric-lefort/ROB501-computer-vision
---

This repository contains the code and solutions for the assignments given by Professor Jonathan Kelly in the ROB501 course during the Fall 2024 semester. These assignments cover a variety of computer vision concepts and algorithms, detailed below.

### Assignment 1: Image Transformations & Billboard Hacking

1. **Perspective Transformations**
   - Compute the perspective homography using the DLT algorithm to map points between images.

2. **Bilinear Interpolation**
   - Implement interpolation for subpixel accuracy during image warping.

3. **Histogram Equalization**
   - Enhance the contrast of grayscale images.

4. **Billboard Hacking**
   - Combine all components to create a realistic composite image replacing the billboard.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/1-homography-histogram-eq/yonge_dundas_square.jpg" title="Yonge-Dundas Square" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/1-homography-histogram-eq/billboard_hacked.png" title="Billboard Hacked" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

### Assignment 2: Camera Pose Estimation

1. **Image Smoothing and Subpixel Feature Extraction**
   - Implement a function to compute saddle points of cross-junctions in a checkerboard image using the method described by Lucchese and Mitra.

2. **Cross-Junction Detection**
   - Extract and refine all cross-junctions in a target image to subpixel accuracy.

3. **Jacobian Computation**
   - Derive and implement a function to compute the Jacobian matrix for image plane observations with respect to camera pose parameters.

4. **Pose Estimation**
   - Solve the Perspective-n-Points (PnP) problem using nonlinear least squares to estimate the camera pose.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/2-checkerboard/01.png" title="Checkerboard Example 1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/2-checkerboard/02.png" title="Checkerboard Example 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

### Assignment 3: Stereo Correspondence Algorithms

1. **Your Secret Identifier**
   - Create a function in `secret_id.py` that returns a polite secret ID string (max 32 characters). This ID will be used on the leaderboard tracking performance.

2. **Fast Local Correspondence Algorithms**
   - Implement a simple stereo correspondence algorithm using a fixed window size and the Sum of Absolute Differences (SAD) similarity measure.

3. **A Different Approach**
   - Develop and implement an alternative stereo correspondence algorithm to exceed the performance of your Part 1 implementation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/cones/cones_image_02.png" title="Stereo Correspondence - Cones Left Image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/cones/cones_image_06.png" title="Stereo Correspondence - Cones Right Image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/cones/cones_disp_02.png" title="Stereo Correspondence - Cones Ground Truth" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/cones/cones_output.png" title="Stereo Correspondence - Cones Algorithm Output" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/teddy/teddy_image_02.png" title="Stereo Correspondence - Teddy Left Image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/teddy/teddy_image_06.png" title="Stereo Correspondence - Teddy Right Image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/teddy/teddy_disp_02.png" title="Stereo Correspondence - Teddy Ground Truth" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/teddy/teddy_output.png" title="Stereo Correspondence - Teddy Algorithm Output" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Cones dataset (top) and Teddy dataset (bottom). Each row shows the left and right stereo images, ground truth disparity map, and the algorithm's output.
</div>


---

### Assignment 4: Image-Based Visual Servoing

1. **Image-Based Jacobian**
   - Implement a function in `ibvs_jacobian.py` to compute velocities of a point on the image plane, converting image coordinates to normalized image plane coordinates.

2. **Image-Based Servo Controller**
   - Implement a proportional controller in `ibvs_controller.py` that calculates camera velocities using the Jacobian matrix and a Moore-Penrose pseudo-inverse.

3. **Performance Evaluation**
   - Experiment with gain values and evaluate the IBVS controller's performance with exact vs. estimated depth values.

<div class="row">
    <div class="col-sm-8">
        {% include video.liquid loading="eager" path="assets/img/computer-vision/4-ibvs/ibvs_jac_controller.webm" title="IBVS Controller Demo" class="img-fluid rounded z-depth-1" autoplay="true" loop="true" %}
    </div>
</div>

---

### Assignment 5: Deep Visual Sun Sensing

1. **Network Setup and Baseline Model**
   - Implement a CNN to classify images from the KITTI dataset into azimuth angle bins (8 bins, 45-degree intervals).

2. **Improving Network Performance**
   - Modify the network to improve validation set accuracy using advanced techniques such as adding more layers, applying batch normalization, and implementing dropout.

3. **Expanding Azimuth Bins**
   - Update the network to classify into 20-degree azimuth bins and evaluate the model's performance.

---

For more details, see my [github repository](https://github.com/eric-lefort/ROB501-computer-vision) containing code and additional images.
