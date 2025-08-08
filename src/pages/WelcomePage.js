import { ProfileImage } from './ProfileImage';
import './styles/WelcomePage.css';
import imageMaskSvg from '../assets/imageContainer.svg';
import { useTranslation } from 'react-i18next';

export function WelcomePage(){
  const {t} = useTranslation();
  return(
    <div className="welcomeBanner">
      <h1 className="welcomeTitle">{t('welcomeBanner.title')}</h1>
      <div className="imageSubtitleWrapper">
        <ProfileImage className="photo" svgpath={ imageMaskSvg }/>
        <div className="subtitleShape">
          <p className="subtitle">{t('welcomeBanner.subtitle')}</p>
        </div>
      </div>
      <div className="content">
        <p>{t('welcomeBanner.content')}</p>
      </div>
    </div>
  )
}