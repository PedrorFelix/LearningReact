import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/NavBar.css";

export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  };

  const AutoCloseNav = (path) =>{
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
      <nav className="NavBar">
        <button
          className="hamburger-btn"
          onClick={toggleMenu}
        >Menu</button>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <button
          className={location.pathname ==="/" ? "active-btn" : "not-active-btn"} 
          onClick={() => AutoCloseNav("/")}>Welcome</button>
          <button 
          className={location.pathname ==="/about" ? "active-btn" : "not-active-btn"} 
          onClick={() => AutoCloseNav("/about")}>About</button>
          <button 
          className={location.pathname ==="/work" ? "active-btn" : "not-active-btn"} 
          onClick={() => AutoCloseNav("/work")}>Work</button>
          <button 
          className={location.pathname ==="/contact" ? "active-btn" : "not-active-btn"} 
          onClick={() => AutoCloseNav("/contact")}>Contact</button>
        </div>
        
      </nav>
  );
}