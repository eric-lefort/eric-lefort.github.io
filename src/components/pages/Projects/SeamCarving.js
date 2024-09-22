import TextSection from "../../TextSection";
import SplitView from "../../SplitView";


export default function SeamCarving() {
    return (
        <>
            <TextSection header=''>
                <p style={{ fontSize: 14, color: '#ddd' }}>
                    Thumbnail image: Broadway_tower.jpg: Newton2 at en.wikipedia
                    Derivative work: Damir-NJITWILL - Broadway_tower.jpg, CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=12125987
                </p>
            </TextSection>
            <SplitView left={
                <img width='40%' src='/img/seam-carving/img_sm_4.jpg' alt='' />
            } right={
                <img width='40%' src='/img/seam-carving/sunset-campus/output.gif' alt=''/>
            } />
            <TextSection header='Seam Carving: Content-Aware Image Resizing'>
                <p> 
                    Seam carving is an image resizing technique that allows for content-aware scaling of images. Seam carving intelligently removes or inserts pixels in areas of lower visual significance, preserving important elements without altering them. This is especially useful when adjusting an image's aspect ratio without distorting important features. 
                </p> 
                <p> 
                    The algorithm was first introduced in <a href="https://perso.crans.org/frenoy/matlab2012/seamcarving.pdf" target="_blank" rel="noreferrer">a paper</a> by Avidan and Shamir back in 2007. This method uses an image energy function to define the optimal seams for removal or insertion. 
                    
                </p> 
                <p>
                    The algorithm works by identifying "seams" — paths of connected pixels that run from one edge of the image to another — that have the least visual importance. The least important seams are then removed or duplicated to shrink or expand the image while maintaining the overall composition.  
                </p>
                <p>
                    The authors highlight the beneficial features of the algorithm as well as some of its limitations. In the case of my implementation I use the color gradient as the energy function to identify the importance of a pixel in a seam. Using gradients as the energy function, we rely on important areas of the image to have higher gradients. If subjects are smooth or uniformly colored, this may not be the case, leading to distortions appearing in the subject. 
                </p>

            </TextSection>

            <SplitView left={
                <>
                <h1> Some More Examples</h1>
                </>
            } right={<></>} />

            <SplitView left={
                <img width='90%' src='/img/seam-carving/surfing/img000.jpg' alt='' />
            } right={
                <img width='90%' src='/img/seam-carving/surfing/output.gif' alt=''/>
            } />
            <SplitView left={
                <img width='60%' src='/img/seam-carving/rock-water/img000.jpg' alt='' />
            } right={
                <img width='60%' src='/img/seam-carving/rock-water/output.gif' alt=''/>
            } />

            <TextSection>
                <p> See my project on <a href="https://github.com/eric-lefort/seamcarving" target="_blank" rel="noreferrer">github</a></p>
            </TextSection>
        </>
    );
}