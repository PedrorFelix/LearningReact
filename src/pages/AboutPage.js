import { BasicInfo } from "./BasicInfo";
import './styles/AboutPage.css';

export function AboutPage(){

  return(
    <div className="AboutBanner">
      <h1 className="AboutTitle">"Tell me about yourself..."</h1>
      <div className="CodeBlock"><BasicInfo /></div>
      <div className="Description">
        <p>I'm an aspiring junior developer with a deep passion for coding and a will to build impactful software.</p>
        <p>I'm eager to apply my skills, focusing in JavaScript and Python but I thrive to continuously learn from my experiences.
        My goal is to contribute with clean and effective code and grow into a skilled developer.</p>
        <p>Contact Me! I'm always open to talk about new opportunities.</p>
      </div>
    </div>
  )
}