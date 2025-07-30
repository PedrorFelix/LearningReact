export function JobEntry( { position, company, location, begginig, end, description } ) {

    return(
        <div className="JobEntry">
            <div className="PositionName"><h3>{position} @ {company}</h3></div>
            <div className="BegginingDate">{begginig}</div>
            <div className="EndDate">{end}</div>
            <div className="WorkPlace">{location}</div>
            <div className="Description">{description}</div>
        </div>
    )
}