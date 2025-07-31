import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from './NavBar';
import { ProfileImage } from './ProfileImage';
import { BasicInfo } from "./BasicInfo";
import { JobEntry } from "./JobEntry";
import './style/App.css';
import './style/WelcomePage.css';
import './style/AboutPage.css';
import './style/WorkPage.css';
import './style/ContactPage.css';
import { Component, useEffect, useState } from "react";

class XPTO extends Component {

  constructor(props) {    
    super();

    this.state = {felipe: 'Olá, sou o Fifi', buttonClicked: false}
    //Aqui é a primeira ocorrência de código
  }
  
  componentDidMount() {
    //Terceiro passo do lifecycle
    //O teu componente acabou de dar mount e já tens a tua view loaded
    console.log('Class Montou');
    
  }

  shouldComponentUpdate() {
    return false;
  }
  
  componentWillUnmount() {
    //Quinto e último passo do lifecycle
    // quando o lifecycle chega ao fim, isto corre
  }

  privateFunction = (event) => {
    
    this.setState({
      ...this.state,
      felipe: event?.target?.value ?? ''
    });
  }

  render() {
    // Segundo passo do lifecycle
    this.privateFunction();
    const {felipe} = this.state;
    //Logica fdp
    return <div>
      <span>{felipe} com coisas</span>
      <button onClick={this.toggleVisibilityButton}>Click me to disable recurring on update</button>
      <input type="text" onChange={(event) => this.privateFunction(event)}></input>
    </div>
  }
}

function WelcomePage(inputs){
  const {name, code} = inputs;
  
  const [state, setState] = useState({
    props: {
      a: "Pilinha"
    },
    felipe: '',
    coiso: {
      b: 0
    }
  });

  //ComponentDidMount, precisa do array vazio
  useEffect(() => console.log('Montou', name, code), []);

  useEffect(() => {
    //Aqui é território do didUpdate
    console.log('isto é o update', state.coiso);
  }, [state.coiso]/*Isto são as dependências do didUpdate*/);

  const updateState = () => {
    //Isto vai dar alterar uma das dependências do useEffect,
    //Portanto vai dar trigger
    setState({...state, coiso: {b: state.coiso.b + 1}});
  }

  const setStateProps = (newValue) => {
    setState({...state, props: {a: newValue.target.value}});
  }

  return(
    <div className="WelcomeBanner">
      <h1 className="WelcomeTitle">Hello World!</h1>
      <div className="ImageSubtitleWrapper">
        <ProfileImage className="Photo" svgpath={'/assets/imageContainer.svg'}/>
        <div className="SubtitleShape">
          <p className="Subtitle">I code things while drinking coffee {state.props.a}</p>
          <button onClick={updateState}>Click me</button>
          <input type="text" onChange={(event) => setStateProps(event)}></input>
        </div>
      </div>
      <div className="Content">
        <p>My name is Pedro Félix and I do keyboard magic</p>
      </div>
    </div>
  )
}

function AboutPage(){

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
                  degree = {"IT and Multimedia"}
                  company={"Polythecnical Institute of Castelo Branco"}
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
      <h1 className="ContactTitle">Let's Talk!</h1>
      <p> email </p>
      <p> social media (<i class="fa-brands fa-github"></i>github and <i class="fa-brands fa-linkedin"></i>LinkedIn  ) </p>
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
          <Route path="/" element={<WelcomePage name="Pedro" code="abc123" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
