import './styles/JobEntry.css';
export function JobEntry( { position, degree= null, company, location, begginig, end, description } ) {

    return(
        <div className="JobEntry">
            <div className="PositionName"><h3>{position} @ {company}</h3></div>
            <div className="Details">
                {degree && (
                    <div className="Degree">{degree}</div>
                )}
                <div className="Dates">From {begginig} until {end}</div>
                <div className="WorkLocation">{location}</div>
                <div className="JobDescription">{description}</div>
            </div>
        </div>
    )
}