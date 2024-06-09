import SplitView from "./SplitView";
import './TimelineSection.css';

export default function TimelineSection(
    {title, location, date, children}
) {
    return (
        <div className="timeline-entry">
            <SplitView left={
                <h3>{date}</h3>
            } right={
                <>
                    <h1 className="vertical-timeline-element-title">{title}</h1>
                    <h2 className="vertical-timeline-element-subtitle">{location}</h2>
                    {children} 
                </>
            } />
        </div>
    );
}