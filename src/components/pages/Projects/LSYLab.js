import TextSection from "../../TextSection";


export default function LSYLab() {
    return (
        <>
            <TextSection header='Summer Research'>
                <p>
                    In May 2024, I moved to the city of Munich, Germany to work in the <a href="https://www.dynsyslab.org/research/" target="_blank" rel="noreferrer">Learning Systems Lab</a> under Professor Angela Schoellig for four months.
                </p>
                <p>
                    Skills I developed:
                    <ul>
                        <li>Programming manipulators (franka emika Panda / FR3); forward and inverse kinematics; motion planning</li>
                        <li>Using mujoco; creating simulation environments using URDF</li>
                        <li>Task scheduling: ordering lego brick placements to ensure more reliability</li>
                        <li>Bayesian optimization</li>
                        <li>Reinforcement learning. See <a href="">this page</a>.</li>
                    </ul>
                </p>
            </TextSection>
            
            <TextSection header='Lego Assembly'>

                <h2>Robot Controller</h2>
                <p>
                    For controlling the robot, we used the <a href="https://github.com/TimSchneider42/franky" target="_blank" rel="noreferrer">franky</a> repository. We implement our own high-level functions on top of this library in various controller files. The main controller is <code>demo_controller.py</code>, and <code>controller.py</code> attempts to implement a controller that works both in simulation and on the real robot, which is challenging for manual demonstrations.
                </p>

                <h2>Planning Algorithm</h2>
                <h3>Current Status</h3>
                <ul>
                    <li>[ ] Motion planning</li>
                    <li>[x] Task planning</li>
                </ul>
                <p>
                    Task planning determines the sequence for placing Lego bricks, ensuring the FR3 gripper has free spaces on opposite sides to avoid collisions. The algorithm minimizes cases where bricks lack two opposing free sides.
                </p>
                <p>
                    After challenges with MoveIt integration, we opted for a simpler layer-by-layer approach for motion planning. Future integration may require either custom motion control on top of MoveIt or giving it a read-only interface for planning.
                </p>
                <h2>Vision</h2>
                <p>
                    We integrate perception feedback into the system by using an Orbbec RGB-D camera in a third-person view to locate and track Lego bricks. De-ViT model is employed for object recognition, allowing us to detect and draw bounding boxes around the bricks. We then use Foundation Pose (Nvidia) to perform object tracking and extract the precise pose of each brick, enabling more accurate placement during construction.
                </p>
                <h2>Simulation</h2>
                <p>
                    See the <a href="https://github.com/eric-lefort/LegoPanda" target="_blank" rel="noreferrer">LegoPanda</a> repository.
                </p>
                <h3>Features</h3>
                <ul>
                    <li>[x] Franka FR3 and custom Duplo Lego baseplate</li>
                    <li>[x] XML injection to add arbitrary Lego bricks based on a config file</li>
                    <li>[x] Robot control using inverse kinematics (Python robotics toolbox)</li>
                </ul>

                <h2>Force Sensing</h2>
                <p>
                    The robot is equipped with sensors for force, torque, and other metrics. We are logging data to train a neural network classifier in the future, aiming to identify failed placements in real time based on force feedback.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <h3>Success</h3>
                    <img src="/img/lsy-lab/force_img_success.png" alt="Success" width="200" />
                    <img src="/img/lsy-lab/force_plot_success.png" alt="Success Plot" width="600" />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h3>Fail</h3>
                    <img src="/img/lsy-lab/force_img_fail.png" alt="Fail" width="200" />
                    <img src="/img/lsy-lab/force_plot_fail.png" alt="Fail Plot" width="600" />
                </div>

                <p>
                    In this example, it's relatively easy to distinguish between success and failure cases, but detecting failures in real-time can be much harder in practice.
                </p>
                <h2>Web Interface</h2>
                <p>
                    The website enhances the Lego project by allowing users to design and position blocks through a drag-and-drop interface. Blocks can be placed on a constrained grid, stacked, and then sent as instructions to the robot for construction. The interface uses data from a camera to retrieve the pose of the blocks for visualization, with the option to use preset data if the camera is not available.
                </p>

                {/* <img src="/img/lsy-lab/website_image_2.png" alt="Web Interface 2" height="200"/>
                <img src="/img/lsy-lab/website_image_1.png" alt="Web Interface 1" height="200"/> */}
                <img src="/img/lsy-lab/web_interface_demo.gif" alt="Web Interface Demo" width="600"/>

                <h2>Limitations</h2>
                <p>
                    The greatest challenge with the current setup is the dependency on a preprogrammed linear transformation between the Lego grid coordinate system and the robot frame. Despite extensive calibration, the robot accumulates errors between the specified origin and destination coordinates, which may lead to failed placements. This issue is partially addressed by the slower "drop and push" scheme, which is more robust to small errors, but the system remains prone to failure, especially when the desired brick location is between two existing bricks.
                </p>


            </TextSection>

            <iframe width="1080" height="720" style={{display: 'block', margin: 'auto'}} src="https://www.youtube.com/embed/4ls3Hxa8JiY?si=bD9OYBjm8fH7tZRy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div style={{ margin: '20px 0' }}></div>

            {/* <p> See my project on <a href="https://github.com/eric-lefort/seamcarving" target="_blank" rel="noreferrer">github</a></p> */}

        </>
    );
}