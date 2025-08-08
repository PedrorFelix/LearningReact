import './styles/JobEntry.css';
import { useTranslation } from 'react-i18next';

export function JobEntry( { position, degree= null, company, location, beginnig, end, description } ) {
    const {t} = useTranslation();
    return(
        <div className="jobEntry">
            <div className="positionName"><h3>{position} @ {company}</h3></div>
            <div className="details">
                {degree && (
                    <div className="degree">{degree}</div>
                )}
                <div className="dates">{t('componentText.jobEntryDates.0')} {beginnig} {t('componentText.jobEntryDates.1')} {end}</div>
                <div className="workLocation">{location}</div>
                <div className="jobDescription">{description}</div>
            </div>
        </div>
    )
}