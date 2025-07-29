import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from './NavBar';
import '../App.css';

function WelcomePage(){
  return(
    <div className= "WelcomeBanner">
      <h1 className='Title'>Hello World!</h1>
      <p>I code things while drinking cofffee</p>
      <div className='ImageContainer'>
        <img className='ProfilePicture' src='/assets/stylizedProfileCropped.png' alt="I like Croissaints" sizes="540px"/>
      </div>
      
    </div>
  )
}


export default function MyApp() {

  return (
    <BrowserRouter>
      <div style={{ textAlign: "center"}}>
        <NavBar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/work" element={<div>Work Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
