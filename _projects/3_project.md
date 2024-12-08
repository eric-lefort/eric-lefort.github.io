---
layout: page
title: Topographic Map of Mount Mansfield, VT
description: A small personal project to learn GIS and laser cutting
img: assets/img/mansfield-map/semi-finished-cropped.jpg
importance: 3
category: learning
---

As a way of commemorating a hike I did with a close friend of mine, I decided to create a topographical map of Mount Mansfield, VT, as a gift.

After doing some research on the topic, I found that the state of Vermont has a great open-source data set for topographical maps. See [geodata.vermont.gov](https://geodata.vermont.gov/).

Initially, I considered using an .obj file and writing a program to trace contours, but I soon discovered that there were already a plethora of existing geographic analysis tools that would do this for me.

I used QGIS to process the data and generate contours, opting for a 60 m resolution after some experimentation. I then filtered these to remove contours below a certain size. After exporting the contour lines as SVGs, I undertook the laborious process of arranging all the contours to fit nicely on the plywood sheet I was to be laser cutting. At the same time, I decided to laser-engrave all the sheets with the locations where there was to be a sheet above it, making assembly much easier later on.

## Approximate Coordinates of Map

- SE corner: (44.5, -72.77)
- NW corner: (44.6, -72.85)

## Process Summary

1. **Install QGIS**: Software for viewing, editing, and analyzing geospatial data.
2. **Fetch Data**: From geodata.vermont.gov and USGS.
3. Faced difficulty navigating data; found a 2014 Lidar dataset split into tiles.
4. **Process Data in QGIS**:
   - Download all tiles.
   - Combine tiles into a virtual raster.
   - Generate contours using QGIS mesh operation.
5. Encountered issues filtering for contour length.
6. **Learning QGIS**:
   - Discussed various functions.
7. **Filter Contours**: Script to remove contours below a certain size.
   - Faced challenges filtering based on contour length; considered using a new data source.
8. **Arrange Contours**: Prepare for laser cutting.
9. Glue all the laser cut pieces together, working with a few layers at a time.

## Result

I also engraved a small plaque with info about the peak, its coordinates, and the date of the hike. The final product was a 3D topographical map of Mount Mansfield, VT, which I gifted to my friend.

I've attached

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mansfield-map/semi-finished.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mansfield-map/mansfield-landscape-s.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: a photo a picture of the nearly completed map on a backing of pine boards.

    Right: For fun, a photo I took on the hike.

</div>

## Future Work

I was happy with the result of this project and I would consider developing a more automated process for generating these maps, particularly with the arranging of the contours for laser cutting, as this was tedious and could be automated readily.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mansfield-map/vermont-photos/1000006902.jpg" title="vermont photos" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mansfield-map/vermont-photos/1000007015.jpg" title="vermont photos" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mansfield-map/vermont-photos/1000007152.jpg" title="vermont photos" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mansfield-map/vermont-photos/1000006807.jpg" title="vermont photos" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mansfield-map/vermont-photos/1000007180.jpg" title="vermont photos" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
