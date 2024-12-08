---
layout: page
title: Seam Carving
description: Content-Aware Image Resizing
img: assets/img/seam-carving/BroadwayTowerSeamCarvingC.png
importance: 3
category: projects
---

Thumbnail image: Broadway_tower.jpg: Newton2 at en.wikipedia  
Derivative work: Damir-NJITWILL - Broadway_tower.jpg, CC BY 2.5, [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=12125987)

# Seam Carving: Content-Aware Image Resizing


Seam carving is an image resizing technique that allows for content-aware scaling of images. Seam carving intelligently removes or inserts pixels in areas of lower visual significance, preserving important elements without altering them. This is especially useful when adjusting an image's aspect ratio without distorting important features.

The algorithm was first introduced in [a paper](https://perso.crans.org/frenoy/matlab2012/seamcarving.pdf) by Avidan and Shamir back in 2007. This method uses an image energy function to define the optimal seams for removal or insertion.

The algorithm works by identifying "seams" — paths of connected pixels that run from one edge of the image to another — that have the least visual importance. The least important seams are then removed or duplicated to shrink or expand the image while maintaining the overall composition.

The authors highlight the beneficial features of the algorithm as well as some of its limitations. In the case of my implementation, I use the color gradient as the energy function to identify the importance of a pixel in a seam. Using gradients as the energy function, we rely on important areas of the image to have higher gradients. If subjects are smooth or uniformly colored, this may not be the case, leading to distortions appearing in the subject.

## Some More Examples

![Surfing image before and after seam carving](assets/img/seam-carving/surfing/img000.jpg)
![Surfing output](assets/img/seam-carving/surfing/output.gif)

![Rock and water image before and after seam carving](assets/img/seam-carving/rock-water/img000.jpg)
![Rock and water output](assets/img/seam-carving/rock-water/output.gif)

## Additional Information

See my project on [GitHub](https://github.com/eric-lefort/seamcarving).
