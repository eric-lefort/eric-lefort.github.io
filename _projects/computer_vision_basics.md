---
layout: page
title: "Fundamentals of Computer Vision"
description: Learning to process image input
img: assets/img/computer-vision/3-stereo/cones/cones_composite.png
importance: 2
category: learning
github: https://github.com/eric-lefort/ROB501-computer-vision
---

To learn about computer vision and image processing I took a course on computer vision taught by Professor Jonathan Kelly. Here I will outline five of the fundamental topics covered in the course.

### Camera Models and Image Transformations

The most fundamental concept in computer vision is that of the camera model, more specifically the pinhole camera model. In the absence of distortion, rectangular objects appear as quadrilaterals with straight sides in the image plane. The transformation that describes this perspective transformation is called a homography.

\[
\tilde{H} = 
\begin{bmatrix}
    h_{00} & h_{01} & h_{02} \\
    h_{10} & h_{11} & h_{12} \\
    h_{20} & h_{21} & 1 \\
\end{bmatrix}
\]

One can think of a homography as transforming the points from their original 2D image plane to a new arbitrary, plane in R3. These points are then normalized, which effectively projects them along a straight line to camera onto the new image plane. 

For this particular assignment, we take a picture of the University of Toronto's Soldiers Tower and perform histogram equalization to increase contrast. We then use a homography to warp the image onto a billboard in Yonge-Dundas Square. Specifically, we perform an inverse warp using bilinear interpolation to compute the pixel values in the transformed image.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/1-homography-histogram-eq/yonge_dundas_square.jpg" title="Yonge-Dundas Square" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/1-homography-histogram-eq/uoft_soldiers_tower_light.png" title="UofT Soldiers Tower" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/1-homography-histogram-eq/billboard_hacked.png" title="Billboard Hacked" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

### Checkerboards and Pose Estimation

Estimating camera parameters and performing camera pose estimation is often done using specially designed checkboards, because they are contain many features, such as the corners or edges, that can be easy to identify in an image. The appearance of these features can be analyzed and compared to their known size and shape in order to gain information about the camera, relative to the object.

Here, I take the known outer corners of a checkboard and apply a saddle point feature detector to locate (with subpixel accuracy) all the junctions on the checkerboard, providing me with complete relative pose information of the checkerboard with respect to the camera. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/2-checkerboard/01.png" title="Checkerboard Example 1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/2-checkerboard/02.png" title="Checkerboard Example 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

### Stereo Correspondence Algorithms

A classical algorithm for computing dense depth for a pair of stereo images is to perform a line search for matching features between the two images. Specifically, I do this by comparing a small window and identifying the best match, providing me with a disparity value for each pixel in the image. By applying some additional filtering operations, it is possible to improve the performance of this algorithm. Ultimately, this method is significantly outperformed by modern deep learning-based methods, but it continues to provide good results given its simplicity and provides a good starting point for the development of new algorithms.

In particular, I used a Laplacian of Gaussian (LoG) operation with a std of 0.5. This operation is an edge detection technique that first smooths the image using a Gaussian filter to reduce noise and then applies the Laplacian operator to highlight regions of rapid intensity change. This method detects edges by identifying zero-crossings in the second derivative of the image. It is very common in a variety of feature-matching applications.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/log/input.png" title="Input Image for LoG Operation" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/log/output_01.png" title="LoG Output - Std 0.1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/log/output_05.png" title="LoG Output - Std 0.5" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer-vision/3-stereo/log/output_10.png" title="LoG Output - Std 1.0" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption mt-2">
    Results of the Laplacian of Gaussian operation on the input image. From left to right, top to bottom: the original input image, and outputs with standard deviations of 0.1, 0.5, and 1.
</div>


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

### Image-Based Visual Servoing

1. **Image-Based Jacobian**
2. **Image-Based Servo Controller**
3. **Experiment with gain values and evaluate the IBVS controller's performance**

<div class="row">
    <div class="col-sm-8">
        {% include video.liquid loading="eager" path="assets/img/computer-vision/4-ibvs/ibvs_jac_controller.webm" title="IBVS Controller Demo" class="img-fluid rounded z-depth-1" autoplay="true" loop="true" %}
    </div>
</div>

---

### Deep Visual Sun Sensing

1. **Network Setup and Baseline Model**
   - CNN
   - KITTI dataset
   - azimuth angle bins (8 bins, 45-degree intervals).

2. **Improving Network Performance**
   - more layers
   - batch normalization
   - dropout

3. **Expanding Azimuth Bins**
   - 20-degree azimuth bins

---

For more details, see my [github repository](https://github.com/eric-lefort/ROB501-computer-vision) containing code and additional images.
