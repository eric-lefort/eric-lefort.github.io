import React from 'react'
import './Projects.css';
import TextSection from '../../TextSection';

function PhysicsEngine() {
  return (
    <>
      <TextSection header='Physics Engine'>
        Work-in-progress, see <a href='https://github.com/eric-lefort/doorknob/' target='_blank' rel='noreferrer'>my github repo</a>
      </TextSection>

      <TextSection header='Sweep and Prune Algorithm'>
          <p>
              The Sweep and Prune algorithm is a clever technique used in physics engines to efficiently handle collision detection in a 2D space. It's particularly effective for scenarios involving a large number of dynamic objects that may overlap or collide.
          </p>

          <h3>Spatial Organization:</h3>
          <ul>
              <li>The algorithm organizes objects along two axes (X and Y) to create intervals or "swept" regions. These intervals represent the extents of each object along the respective axis, in other words the intervals covered by the axis-aligned bounding boxes (AABB) for each object.</li>
              <li>Define the AABBs of each object.</li>
              <li>For the X and Y axes, define the occupied intervals as those containing the AABB of an object.</li>
          </ul>

          <h3>Sort Intervals:</h3>
          <ul>
              <li>Sort the intervals along each axis separately, based on their min-coord. This can be efficiently done using a sorting algorithm like quicksort or mergesort.</li>
          </ul>

          <h3>Broadphase Detection:</h3>
          <ul>
              <li>To detect potential collisions, iterate through the sorted intervals along one axis (e.g., X-axis) and check for overlaps.</li>
              <li>As you iterate, maintain a list of active intervals. When you encounter the end of an interval, remove it from the active list. When you encounter the start of an interval, add it to the active list.</li>
              <li>For each active interval, check for overlaps along the other axis. Any overlaps correspond to collisions of the axis-aligned bounding boxes, which need to be examined again to determine if there is in fact a collision.</li>
          </ul>

          <h3>Efficiency:</h3>
          <ul>
              <li>The key efficiency of this algorithm lies in the fact that you only need to check for collisions between adjacent intervals along the sorted axis. This reduces the number of pair-wise collision checks significantly.</li>
              <li>The algorithm exploits the fact that if two intervals along one axis don't overlap, then there's no need to check for collisions along the other axis.</li>
          </ul>

          <h3>Dynamic Update:</h3>
          <ul>
              <li>When objects move or change their positions, the intervals need to be updated accordingly. This involves updating the minimum and maximum coordinates and adjusting the sorted order.</li>
          </ul>

          <p>
              By efficiently narrowing down the potential collision candidates through interval sorting and checking, the Sweep and Prune algorithm significantly optimizes collision detection in a 2D physics engine, making it well-suited for real-time applications with numerous dynamic objects.
          </p>
      </TextSection>
    </>
  )
}

export default PhysicsEngine;