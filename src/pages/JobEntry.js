import './styles/JobEntry.css';
export function JobEntry( { position, degree= null, company, location, beginnig, end, description } ) {

    return(
        <div className="jobEntry">
            <div className="positionName"><h3>{position} @ {company}</h3></div>
            <div className="details">
                {degree && (
                    <div className="degree">{degree}</div>
                )}
                <div className="dates">From {beginnig} until {end}</div>
                <div className="workLocation">{location}</div>
                <div className="jobDescription">{description}</div>
            </div>
        </div>
    )
}