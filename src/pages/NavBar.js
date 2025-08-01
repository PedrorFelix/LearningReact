import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/NavBar.css";

export function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className="NavBar">
          {/* Navigation Buttons */}
          <button
          className={location.pathname ==="/" ? "active-tab" : "not-active-tab"} 
          onClick={() => navigate("/")}>Welcome</button>

          <button 
          className={location.pathname ==="/about" ? "active-tab" : "not-active-tab"} 
          onClick={() => navigate("/about")}>About</button>

          <button 
          className={location.pathname ==="/work" ? "active-tab" : "not-active-tab"} 
          onClick={() => navigate("/work")}>Work</button>

          <button 
          className={location.pathname ==="/contact" ? "active-tab" : "not-active-tab"} 
          onClick={() => navigate("/contact")}>Contact</button>
        </nav>
    );
}