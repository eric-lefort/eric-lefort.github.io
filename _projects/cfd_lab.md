---
layout: page
title: "Computational Aerodynamics Group"
description: Research in meshing and computational fluid dynamics
img: assets/img/cfd-lab/naca0012_cropped.jpeg
importance: 2
category: learning
---

From May to August 2022, I worked as a summer research student in the University of Toronto Institute for Aerospace Studies Computational Aerodynamics Group under Dr. David W. Zingg.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cfd-lab/utias_photo.jpeg" title="UTIAS Photo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image shows the University of Toronto Institute for Aerospace Studies Computational Aerodynamics Group.
</div>

Throughout the summer, I divided my attention between three main tasks:

- **Performance analysis of the current generation multithreaded 2D and 3D flow solver Diablo with the older 2D flow solver Optima2D**
- **Experimenting with using low density automated hexahedral mesh generators to perform blocking**
- **MATLAB**: Implementing 1D meshing algorithm, multiple time-marching schemes, including explicit Euler and 4th-order Runge-Kutta, as well as 2nd and 4th order spatial difference operators.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cfd-lab/naca0012.jpeg" title="NACA 0012 Airfoil" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image shows the NACA 0012 airfoil, which I frequently used as a test case.
</div>

See the [lab report]({{ site.baseurl }}/assets/pdf/CFD_Lab_Report.pdf) for more information.
