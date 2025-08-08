import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/NavBar.css";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './languageSwitcher.js';

export function NavBar() {
  const {t} = useTranslation();
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
      <nav className="navBar">
        <button
          className="hamburger-btn"
          onClick={toggleMenu}>Menu</button>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <button
          className={location.pathname ==="/" ? "active-btn" : "not-active-btn"} 
          onClick={() => AutoCloseNav("/")}>{t('navBar.welcomeBtn')}</button>
          <button 
          className={location.pathname ==="/about" ? "active-btn" : "not-active-btn"} 
          onClick={() => AutoCloseNav("/about")}>{t('navBar.aboutBtn')}</button>
          <button 
          className={location.pathname ==="/work" ? "active-btn" : "not-active-btn"} 
          onClick={() => AutoCloseNav("/work")}>{t('navBar.workBtn')}</button>
          <button 
          className={location.pathname ==="/contact" ? "active-btn" : "not-active-btn"} 
          onClick={() => AutoCloseNav("/contact")}>{t('navBar.contactBtn')}</button>
        </div>
        <LanguageSwitcher />
        
      </nav>
  );
}