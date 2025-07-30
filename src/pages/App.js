import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from './NavBar';
import { ProfileImage } from './ProfileImage';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import './style/App.css';
import './style/WelcomePage.css';


function WelcomePage(){
  return(
    <div className="WelcomeBanner">
      <h1 className='Title'>Hello World!</h1>
      <div className="ImageSubtitleWrapper">
        <ProfileImage className='Photo' svgpath={'/assets/imageContainer.svg'}/>
        <div className="SubtitleShape">
          <p className="Subtitle">I code things while drinking coffee</p>
        </div>
      </div>
    </div>
  )
}

function About(){

  return(
    <div>About Page</div>
  )
}

function Work(){

  return(
    <div>Work Page</div>
  )
}

function Contact(){

  return(
    <div>Contact Page</div>
  )
}

export default function MyApp() {

  return (
    <BrowserRouter>
      <div className="MainPage">
        <NavBar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}