import { ProfileImage } from './ProfileImage';
import './styles/WelcomePage.css';
import imageMaskSvg from '../assets/imageContainer.svg';

export function WelcomePage(){
  return(
    <div className="welcomeBanner">
      <h1 className="welcomeTitle">Hello_World!</h1>
      <div className="imageSubtitleWrapper">
        <ProfileImage className="photo" svgpath={ imageMaskSvg }/>
        <div className="subtitleShape">
          <p className="subtitle">I code things while drinking coffee</p>
        </div>
      </div>
      <div className="content">
        <p>My name is Pedro Félix and I do keyboard magic</p>
      </div>
    </div>
  )
}