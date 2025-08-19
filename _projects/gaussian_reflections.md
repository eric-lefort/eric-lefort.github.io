---
layout: page
title: "Gaussian Reflections"
description: Constrained rendering of reflected gaussians
img: assets/img/gaussian-reflections/vanilla.png
importance: 2
category: hidden
# github: https://github.com/eric-lefort/gaussian-reflections
---

A few friends of mine are working on high quality 3d reconstruction for sports broadcasting. The startup is Peripheral Labs out of Toronto and they have developed some impressive demos leveraging dynamic gaussians and numerous additional processing stages to show their proof of concept for NBA broadcasting in 3d for potential new immersive / VR experiences. Regardless, I felt that the demo lacked some visual believability due to the lack of lighting effects on the players, which are inserted into the pretrained background scene after the fact.

<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gaussian-reflections/vanilla.png" title="Vanilla 3dgs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Observe the lack of lighting effects affecting the scene's realism.
</div>

To address this, I undertook a short 2 week project to explore methods to achieve some new lighting effects, primarily reflections off the ground plane.

## Papers

#### GaussianShader
[arxiv](https://arxiv.org/abs/2311.17977) | [project page](https://asparagus15.github.io/GaussianShader.github.io/)

One of the first papers in the area of reflections in 3dgs. This paper introduces a heuristic for determining the normal, using the direction of least variance of the gaussian and learns a residual on top of this. Not true reflections—Doesn’t actually perform ray tracing in the scene. Achieves apparent reflections through learning an environment map. (think a low res image of the surroundings, mapped to the inside of a sphere, high fidelity is not assumed to be important because their applications are primarily reflections in curved and irregular objects, where you cannot clearly see the reflected scene anyways) and then querying the environment map with the reflected ray direction. In this case, they learn a 64x64x6 environment map, where the 6 layers match the lighting for different specularity levels. Their shading function is a differentiable function of the scene, including additional learned parameters such as specularity per gaussian. This continuous learned value allow them to interpolate over the environment mip maps.

#### 3dgs with deferred reflection
[arxiv](https://arxiv.org/abs/2404.18454) | [project page](https://gapszju.github.io/3DGS-DR/)

Builds on top of GaussianShader. Start by learning using the vanilla 3dgs method. This provides baseline normal and structural information. Second pass learns a reflectiveness per gaussian and rasterizes the image, reflectiveness and normal map to screen space. They leverage an empirical observation that high-reflectivity gaussians are more likely to be correct and propagate these normals to neighboring gaussians.

Both of these previous papers use primarily examples of irregular shapes with reflective surfaces in the middle of a scene. This is a relatively low accuracy, and unconstrained problem.

#### MirrorGaussian
[arxiv](https://arxiv.org/abs/2405.11921) | [project page](https://mirror-gaussian.github.io/)

This paper learns an additional mirror flag property to the gaussians, which you can rasterize to get a mirror mask. Estimate the plane fit and use it to reflect the whole scene about the mirror. Crop the mirror scene based on the mask. To get an initial guess for mirror points, lift SAM mask to 3d. (After having trained gaussians using vanilla method) Jointly optimize everything together to fine tune. Initial training is done with ground truth SAM masks, until mirror plane is optimized, then switch to masks from rasterized mirror flag / label

This paper focuses more on applications similar to what Peripheral needs. It is much more constrained but higher accuracy compared to the previous papers.

#### 3d Gaussian Unscented Transform
[arxiv](https://arxiv.org/abs/2412.12507) | [project page](https://research.nvidia.com/labs/toronto-ai/3DGUT/) | [github](https://github.com/nv-tlabs/3dgrut)

In  3dgs, you need to take 3d gaussians to 2d image space. Instead of using a linearization of the affine 3D to 2D projection which gives errors even for pinhole camera model, use 2N+1 sigma points. Apply transformation, recover approximate transformed distribution from transformed sigma points. Based on OG unscented kalman filtering paper. This makes it flexible for many more projections functions that are highly nonlinear, like fisheye cameras.
UT avoids having to backprop through the projection function by sampling the color values directly in 3d space. Trace a ray for a pixel. Computes the maximum response along that ray for each gaussian (call this the maximum response point). Sorts them using “MLAB” formulation to get the accurate z-sort (ie based on tau_max instead of means). The challenge is to leverage the fact that they are already sorted by tile (by their means) in 3dgs so you need to perform additional steps on top of that to correct the sort by the max response point.

What about reflections? Reflections are possible with this method because it produces renders consistent with 3d-grt and you can level tau_max along with normal information to perform this ray tracing. Compared to vanilla 3dgs you can get this “intersection point” (tau max) and ray trace from there. The paper also claims that they have “aligned” the rendering method from 3d-gut with that from 3d-grt, likely because of their qualitatively similar output and this additional geometric / surface information you can get out, allowing potential ray tracing. Note that reflectivity and other such demonstrated properties are not actually trained into the scene.

## Project
In the end, I decided to focus on running the dataset through the 3d-GRUT pipeline to verify that it would be possible, given the scale of the dataset. This preliminary work will facilitate future improvements that can leverage 3D-GRUT's support for secondary rays. This pipeline also enable more computationally efficient capture through the use of fisheye cameras.

Furthermore, I experimented with naive methods for giving the appearance of reflections that would be quick to prototype. This involves mirroring the players below the ground plane, and is inspired by the fact that the model learns to do this with certain features, like the net, during optimization, to give this appearance of reflections.

<div class="row">
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gaussian-reflections/vanilla_vs_3dgut.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## Cloud compute

This was my first time using Nvidia Brev and one of the first times I used cloud compute in general.

I primarily used the A10G and A100 GPUs with the following specs:

| Specification            | NVIDIA A10G                  | NVIDIA A100                  |
|--------------------------|------------------------------|------------------------------|
| Memory Size              | 24 GB GDDR6                  | 40 GB or 80 GB HBM2e         |
| Memory Bandwidth         | 600 GB/s                     | > 2 TB/s (≈ 2000 GB/s)       |
| Tensor Cores             | 320 (3rd-Gen Tensor Cores)   | 512 (3rd-Gen Tensor Cores)   |
| RT (Ray Tracing) Cores   | 80 (2nd-Gen RT Cores)        | None                  |

An important note, and something that I overlooked initially, is that 3d-GRT **requires** ray tracing hardware and will not be able to run on an A100, for this reason.

For the purposes of running 3d-GUT and 3d-GRT on the provided dataset, golden1_bg_colmap_done_noZcams_cleaned_aligned, more than the 20GB provided by an A10G are required, particularly for the rendering / eval operations. This issue is likely able to be overcome by making slight modifications to the way data is loaded into memory at the evaluation stage. If training memory also becomes problematic, a possible solution would be to make a conservative estimate of the maximum batch size that would fit in VRAM at runtime (or hardcoded) and randomly sample batches of the input images of that size. (Likely would want to perform many optimizations steps with each batch to reduce the effect of the memory transfer bottleneck). The A100 is able to handle the entire training + eval procedure, with 2x downsampling, but does not contain ray tracing hardware, making it incompatible with GRT. 
Image downsampling script with pillow
Ran a 2x downsampled version of the dataset and determined configuration that produced reasonably good results with both classic approach and monte carlo (mcmc) sampling.
Wrote a script that takes a ply of court / floor gaussians (manually selected), fits a plane, reflects foreground (ie players) gaussians while reducing opacity, brightness and clipping below the plane. Additionally experimented with casting shadows directly on the ground below players.


## Results
Best configuration achieved: 2x downsampled 3d-gut on A100, using mcmc config 0. More configuration tweaking would likely produce improvements, especially for the vanilla sampling approach.

Demonstrated the improved realism with a simple reflection approach, and provided scripts that can be used to perform tests on different visual features and analyze what approaches are the most promising, i.e. shadows, reflections, etc.

<div class="row">
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gaussian-reflections/output_1.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gaussian-reflections/output_2.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gaussian-reflections/output_3.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gaussian-reflections/output_4.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: with "reflected" players inserted in 3d-GUT-trained scene. Right: same scene with no reflected players. We can see some artifacts related to poor regularization of the floor and a few other regions. Despite this, in regions with less court artifacts, such as the key, the appearance of reflections improves realism.
</div>


## Going Forward
There remain many low hanging fruit for improving these results. 

- Continuing to optimize training configurations for gut
- Optimize memory loading to reduce outOfMemory errors
- Running trained models in playground to get visual effects. (maybe train a slightly lower fidelity model / take first one I trained, just for proof of concept, large model is causing memory issues on A10G)
- Incorporating regularization to help flatten ground plane
- Training GUT with depth regularization

Some more ambitious future projects:
- Leveraging prior information about the ground: i.e. that it is flat and combining regularization enforcing this with learned specular / reflective properties, similar to *GaussianShader* and 3dgs-DR. Experiment with using secondary rays to perform accurate reflection.
- Many new and interesting papers from SIGGRAPH 2025. Including *Echoes of the Coliseum*, which implements various stages that may enable faster and smoother optimization of the scene, particularly for real-time applications.
- Reducing noise on the players, train a model to help bootstrap optimization, explore methods such as Difix3D.

<div class="row">
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gaussian-reflections/real.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A photo from a real NBA game, we can see the specularity of the ground and other effects.
</div>
