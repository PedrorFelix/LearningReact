import { ProfileImage } from './ProfileImage';
import './styles/WelcomePage.css';
import imageMaskSvg from '../assets/imageContainer.svg';

export function WelcomePage(){
  return(
    <div className="WelcomeBanner">
      <h1 className="WelcomeTitle">Hello_World!</h1>
      <div className="ImageSubtitleWrapper">
        <ProfileImage className="Photo" svgpath={ imageMaskSvg }/>
        <div className="SubtitleShape">
          <p className="Subtitle">I code things while drinking coffee</p>
        </div>
      </div>
      <div className="Content">
        <p>My name is Pedro Félix and I do keyboard magic</p>
      </div>
    </div>
  )
}