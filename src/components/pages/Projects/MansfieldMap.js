import TextSection from "../../TextSection";

export default function MansfieldMap() {
    return (
        <>
            <TextSection header='Topographic map of Mount Mansfield, VT'>
                <p>
                    As a way of commemorating a hike I did with a close friend of mine, I decided to create a topographical map of Mount Mansfield, VT, as a gift.
                </p>
                <p>
                    After doing some research on the topic, I found that the state of Vermont has a great open-source data set for topographical maps. See <a href='https://geodata.vermont.gov/' target='_blank' rel="noreferrer">https://geodata.vermont.gov/</a>
                </p>
                <p>
                    Initially considered using an .obj file and writing a program to trace contours, but I soon discovered that there were already a plethora of existing geographic analysis tools that would do this for me.
                </p>
                <p>
                    I used QGIS to process the data and generate contours, opting for a 60 m resolution after some experimentation. I then filtered these to remove contours below a certain size. After exporting the contour lines as SVGs, I undertook the laborious process of arranging all the contours to fit nicely on the plywood sheet I was to be laser cutting. At the same time, I decided to laser-engrave all the sheets with the locations where there was to be a sheet above it, making assembly much easier later on.
                </p>
            </TextSection>
                
            <TextSection header='Approximate coordinates of map'>
                <p>SE corner: (44.5, -72.77)</p>
                <p>NW corner: (44.6, -72.85)</p>
            </TextSection>
            <TextSection header='Process Summary'>
                <ul>
                    <li>Install QGIS: Software for viewing, editing, and analyzing geospatial data.</li>
                    <li>Fetch Data: From geodata.vermont.gov and USGS.</li>
                    <li>Faced difficulty navigating data; found a 2014 Lidar dataset split into tiles.</li>
                    <li>Process Data in QGIS:</li>
                    <li>Download all tiles.</li>
                    <li>Combine tiles into a virtual raster.</li>
                    <li>Generate contours using QGIS mesh operation.</li>
                    <li>Encountered issues filtering for contour length.</li>
                    <li>Learning QGIS:</li>
                    <li>Discussed various functions.</li>
                    <li>Filter Contours: Script to remove contours below a certain size.</li>
                    <li>Faced challenges filtering based on contour length; considered using a new data source.</li>
                    <li>Arrange Contours: Prepare for laser cutting.</li>
                    <li>Glue all the laser cut pieces together, working with a few layers at a time.</li>
                </ul>
            </TextSection>

            <TextSection header='Result'>
                <p>
                    I also engraved a small plaque with info about the peak, its coordinates, and the date of the hike. The final product was a 3D topographical map of Mount Mansfield, VT, which I gifted to my friend.
                </p>
                <p>
                    I've attached a picture of the nearly completed map on a backing of pine boards.
                </p>
                <img width='100%' src='/img/mansfield-map/semi-finished.jpg' alt='Semi-finished map' />
            </TextSection>

            <TextSection>
                <p>For fun, here is a photo I took on the hike</p>
                <img width='100%' src='/img/mansfield-map/mansfield-landscape-s.jpg' alt='Hike 1' />
            </TextSection>

            <TextSection header='Future Work'>
                <p>
                    I was happy with the result of this project and I would consider developing a more automated process for generating these maps, particularly with the arranging of the contours for laser cutting.
                </p>
            </TextSection>
        </>
    );
}