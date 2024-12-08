---
layout: page
title: "Physics Engine"
description:
img: assets/img/physics-engine/mozilla_aabb.png
importance: 3
category: learning
---

Work-in-progress, see [my GitHub repo](https://github.com/eric-lefort/doorknob/).

## Sweep and Prune Algorithm

The Sweep and Prune algorithm is used in physics engines to efficiently handle collision detection in a 2D space. It's particularly effective for scenarios involving a large number of dynamic objects that may overlap or collide.

### Spatial Organization

- The algorithm organizes objects along two axes (X and Y) to create intervals or "swept" regions. These intervals represent the extents of each object along the respective axis, in other words, the intervals covered by the axis-aligned bounding boxes (AABB) for each object.
- Define the AABBs of each object.
- For the X and Y axes, define the occupied intervals as those containing the AABB of an object.

### Sort Intervals

- Sort the intervals along each axis separately, based on their min-coord. This can be efficiently done using a sorting algorithm like quicksort or mergesort.

### Broadphase Detection

- To detect potential collisions, iterate through the sorted intervals along one axis (e.g., X-axis) and check for overlaps.
- As you iterate, maintain a list of active intervals. When you encounter the end of an interval, remove it from the active list. When you encounter the start of an interval, add it to the active list.
- For each active interval, check for overlaps along the other axis. Any overlaps correspond to collisions of the axis-aligned bounding boxes, which need to be examined again to determine if there is in fact a collision.

### Efficiency

- The key efficiency of this algorithm lies in the fact that you only need to check for collisions between adjacent intervals along the sorted axis. This reduces the number of pair-wise collision checks significantly.
- The algorithm exploits the fact that if two intervals along one axis don't overlap, then there's no need to check for collisions along the other axis.

### Dynamic Update

- When objects move or change their positions, the intervals need to be updated accordingly. This involves updating the minimum and maximum coordinates and adjusting the sorted order.

By efficiently narrowing down the potential collision candidates through interval sorting and checking, the Sweep and Prune algorithm significantly optimizes collision detection in a 2D physics engine, making it well-suited for real-time applications with numerous dynamic objects.
