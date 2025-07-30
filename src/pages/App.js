import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from './NavBar';
import { ProfileImage } from './ProfileImage';
import { BasicInfo } from "./BasicInfo";
import { JobEntry } from "./JobEntry";
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
      <h1 className="AboutTitle">"Tell me about yourself..."</h1>
      <div className="CodeBlock"><BasicInfo /></div>
      <div className="Description">
        <p>I'm an aspiring junior developer with a deep passion for coding and a will to build impactful software. 
        I'm eager to apply my skills, focusing in JavaScript and Python but I thrive to continuously learn from my experiences.
        My goal is to contribute with clean and effective code and grow into a skilled developer.
        Contact Me! I'm always open to talk about new opportunities.</p>
      </div>
    </div>
  )
}

function Work(){

  return(
    <div className="WorkBanner">
      <h1 className="WorkTitle">Main Quests Completed</h1>
      <div className="JobList">
        <JobEntry position={"Junior Software Developer"} 
                  company={"VisionSpace Portugal"} 
                  location={"Figueira da Foz, Portugal"} 
                  begginig={"May 2023"} end ={"February 2025"} 
                  description={"A small description why working here was shit"}
        />

        <JobEntry position={"Intern"}
                  company={"VisionSpace Technologies GmbH"}
                  location={"Darmstadt, Germany"}
                  begginig={"October 2022"} end ={"March 2023"} 
                  description={"A small description why this intership was actually great"}
        />

        <JobEntry position={"Bachelor's Degree"}
                  company={"Superior School of Technology, Polythecnical Institute of Castelo Branco"}
                  location={"Castelo Branco, Portugal"}
                  begginig={"September 2017"} end ={"September 2022"}
                  description={"A small description of my degree"}
        />
      </div>
    </div>
  )
}

function Contact(){

  return(
    <div className="ContactBanner">
      <h1>Let's Talk</h1>
      <p> email </p>
      <p> social media (insta?MAYBE twitter?MAYBE github?YES ) </p>
      <p> Linked In </p>
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