import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from './NavBar';
import { ProfileImage } from './ProfileImage';
import { BasicInfo } from "./BasicInfo";
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import './style/App.css';
import './style/WelcomePage.css';


function WelcomePage(){
  return(
    <div className="WelcomeBanner">
      <h1 className="WelcomeTitle">Hello World!</h1>
      <div className="ImageSubtitleWrapper">
        <ProfileImage className="Photo" svgpath={'/assets/imageContainer.svg'}/>
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

function About(){

  return(
    <div className="AboutBanner">
      <h1>About Me</h1>
      <div className="CodeBlock"><BasicInfo /></div>
      <div className="Description">
        <p>I'm an aspiring junior developer with a deep passion for coding and a will to build impactful software. 
        I'm eager to apply my skills, focusing in JavaScript and Python' but I thrive to continuously learn from experienced teams.
        My goal is to contribute with clean and effective code and grow into a skilled developer.
        Let's connect! I'm always open to talk about new opportunities.</p>
      </div>
    </div>
  )
}

function Work(){

  return(
    <div className="WorkBanner">
      <p>First job here</p>
      <p>Intership here</p>
      <p>Teenager jobs here</p>
      <p>University Education</p>
      <p>High School</p>
    </div>
  )
}

function Contact(){

  return(
    <div className="ContactBanner">
      <p> email </p>
      <p> social media </p>
      <p> Linked In</p>
    </div>
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