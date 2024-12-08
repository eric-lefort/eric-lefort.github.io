---
layout: page
title: Ray Tracing
description: an other project with a background image and giscus comments
img: assets/img/computer-graphics/ball_scene_cropped.png
importance: 2
category: learning
---

I wanted to learn about 3d representation and graphics, so I decided to experiment with ray tracing algorithms. Okay that's a little misleading; what actually happened is that [this incredible YouTube video](https://youtu.be/Qz0KTGYJtUk) by Sebastian Lague inspired me to take a computer graphics course (CSC317) during my last year of undergrad. While overloading courses is not fun, ray tracing is, and I learned a lot in the course.

## The Idea

Ray tracing is a simple idea. Imagine an eye or camera in 3D space with a particular orientation. In front of the eye, we have a rectangular screen, divided into a grid of square cells, or pixels. For each pixel, we shoot a ray from the eye through the cell, tracking which surfaces the ray interacts with. In the ideal case, we consider that when the ray contacts a surface, some light is reflected specularly, while some is reflected diffusely. The proportion of each depends on the properties of the surface in question. We can perform this process recursively so that with each successive bounce, the ray dims and takes on the color of the surface. The ray collisions will end when the ray intersects a light source, reaches its maximum number of reflections, or fails to collide with any object. At this point, the cell corresponding to the ray is colored based on the gathered light and the surfaces on which the ray has bounced. This process needs to be repeated for every pixel on the screen, so upwards of a million times for a modern display.

So, while the idea is simple, there is a good reason why rasterization has been the default mechanism for graphics in the past. Rasterization takes objects in the scene and projects them onto the image plane. This way, the complexity of the algorithm is proportional to the number of objects in the scene rather than the number of pixels on the screen.
Here’s a concise explanation of the three sections:

<div class="row">
    <div class="col-sm-4">
        {% include figure.liquid path="assets/img/computer-graphics/ray_sphere.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Spheres, Boxes, and the Infamous Triangle

Spheres and planes are the simplest objects for which we can compute their intersection with a ray. In order to construct a more complex 3D objects, we can specify three points that lie in a plane to define a triangle. Combining many triangles allows us to represent arbitrary objects.

### Blinn-Phong Shader Model

The Blinn-Phong model is a commonly used lighting model in ray tracing for calculating the color of surfaces based on light interaction. It combines ambient, diffuse, and specular reflection components:

- **Ambient**: General light present in the scene.
- **Diffuse**: Light scattered uniformly from the surface.
- **Specular**: Light reflected in a mirror-like way from shiny surfaces. The model uses the _halfway vector_ between the light and camera directions to simulate this more efficiently than the original Phong model.

$$
L = k_a \cdot I_a + \sum_{i=1}^{n} \left( k_d \cdot \max(0, \mathbf{n} \cdot \mathbf{l_i}) \cdot I_i + k_s \cdot \left( \max(0, \mathbf{n} \cdot \mathbf{h_i}) \right)^{\alpha} \cdot I_i \right)
$$

Where:

- $L$ is the final color (lighting) at the point,
- $k_a$ is the ambient reflection coefficient,
- $I_a$ is the ambient light intensity,
- $k_d$ is the diffuse reflection coefficient,
- $\mathbf{n}$ is the surface normal vector,
- $\mathbf{l_i}$ is the light direction for light $i$,
- $I_i$ is the intensity of light $i$,
- $k_s$ is the specular reflection coefficient,
- $\mathbf{h_i}$ is the halfway vector between the view direction and light direction for light $i$,
- $\alpha$ is the Phong exponent (shininess),
- $n$ is the number of lights in the scene.

<div class="caption">Some pseudocode for my basic Blinn-Phong ray tracer.</div>

{% raw %}

```python
p = ray.origin + t * ray.direction
v = ray.direction
material = object.material

ambient = material.ambient * 0.1
L = ambient

for each light in lights:
    light_direction, t_light = light.direction(p)

    # check if in shadow
    if in_shadow():
        continue

    diffuse = material.diffuse * max(0, dot(n, light_direction)) * light.intensity
    specular = material.specular * pow(max(0, dot(n, h)), material.phong_exponent) * light.intensity

    L += diffuse + specular

return L
```

{% endraw %}

<div class="row">
    <div class="col-sm-4">
        {% include figure.liquid path="assets/img/computer-graphics/yellow_sphere.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4">
        {% include figure.liquid path="assets/img/computer-graphics/bunny.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4">
        {% include figure.liquid path="assets/img/computer-graphics/ball_scene.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Bounding Volume Hierarchies

Bounding Volume Hierarchies (BVH) are used to optimize ray tracing by grouping objects into hierarchical volumes. These volumes, typically boxes, sets of objects and allow for quicker intersection tests. When a ray is cast, it first tests for intersections with the bounding volumes, which are easy to compute. Only if a volume is hit will the algorithm check its children, repeating this recursively until an intersection with a primitive (usually a triangle) is found. This drastically speeds up the ray tracing process, especially in scenes with many objects.

<div class="row">
    <div class="col-sm-4">
        {% include figure.liquid path="assets/img/computer-graphics/bvh_duck.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4">
        {% include video.liquid path="assets/video/computer-graphics/bvh_2.webm" title="" class="img-fluid rounded z-depth-1" autoplay="true" loop="true" %}
    </div>
    <div class="col-sm-4">
        {% include figure.liquid path="assets/img/computer-graphics/bvh_collision.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
