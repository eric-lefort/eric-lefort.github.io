import TextSection from "../TextSection";

export default function Background() {

    return (
        <>
            {/* div for space */}
            <div style={{height: '50px'}}></div>
            <TextSection>
                <p>
                    A bit about Engineering Science:
                </p>
                <p>
                    <a href="https://discover.engineering.utoronto.ca/programs/engineering-programs/engineering-science/">Engineering Science</a> (NΨ) is an acedemically rigorous 4-to-5-year program offered at the University of Toronto that emphasizes a strong foundation in mathematics and natural sciences. The robotics major covers primarily mechanics, control theory, embedded systems, and machine learning.
                </p>
                <p>
                    Courses listed <a href='https://engineering.calendar.utoronto.ca/section/Engineering-Science#ui-id-423' target='_blank' rel='noreferrer'>here</a>.
                </p>
            </TextSection>
        </>
    );
};