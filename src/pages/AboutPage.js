import { BasicInfo } from "./BasicInfo";
import './styles/AboutPage.css';
import { useTranslation } from 'react-i18next';

export function AboutPage(){
  const {t} = useTranslation();
  return(
    <div className="aboutBanner">
      <h1 className="aboutTitle">{t('aboutBanner.title')}</h1>
      <div className="description">
        <p>{t('aboutBanner.description1')}</p>
        <p>{t('aboutBanner.description2')}</p>
        <p>{t('aboutBanner.description3')}</p>
      </div>
      <div className="codeBlock"><BasicInfo /></div>
    </div>
  )
}