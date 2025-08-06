import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from './NavBar';
import { WelcomePage } from "./WelcomePage";
import { AboutPage } from "./AboutPage";
import { WorkPage } from "./WorkPage";
import { ContactPage } from "./ContactPage";
import './styles/App.css';

export default function App() {
  return (
    <BrowserRouter basename="/LearningReact">
      <div className="mainPage">
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}