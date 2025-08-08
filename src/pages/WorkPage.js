import { JobEntry } from "./JobEntry";
import './styles/WorkPage.css';
import { useTranslation } from 'react-i18next';

export function WorkPage(){
  const {t} = useTranslation();
  return(
    <div className="workBanner">
      <h1 className="workTitle">{t('workBanner.title')}</h1>
      <div className="jobList">
        <JobEntry position={t('workBanner.jobEntry1.position')} 
                  company={t('workBanner.jobEntry1.company')}
                  location={t('workBanner.jobEntry1.location')} 
                  beginnig={t('workBanner.jobEntry1.beginning')} end ={t('workBanner.jobEntry1.end')} 
                  description={t('workBanner.jobEntry1.description')}
        />

        <JobEntry position={t('workBanner.jobEntry2.position')}
                  company={t('workBanner.jobEntry2.company')}
                  location={t('workBanner.jobEntry2.location')} 
                  beginnig={t('workBanner.jobEntry2.beginning')} end ={t('workBanner.jobEntry2.end')} 
                  description={t('workBanner.jobEntry2.description')}
        />

        <JobEntry position={t('workBanner.jobEntry3.position')}
                  degree = {t('workBanner.jobEntry3.degree')}
                  company={t('workBanner.jobEntry3.company')}
                  location={t('workBanner.jobEntry3.location')}
                  beginnig={t('workBanner.jobEntry3.beginning')} end ={t('workBanner.jobEntry3.end')}
                  description={t('workBanner.jobEntry3.description')}
        />
      </div>
      <i class="fa-solid fa-briefcase briefcaseIcon"></i>
    </div>
  )
}