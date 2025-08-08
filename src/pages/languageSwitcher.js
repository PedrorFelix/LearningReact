import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/LanguageSwitcher.css';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'gr', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ];

  const getCurrentLanguage = () => {
    const current = languages.find(lang => lang.code === i18n.language);
    return current || languages[0];
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-hamburger-btn"
        onClick={toggleLanguageMenu}
        aria-label="Select Language"
      >
        <span className="current-language">
          {getCurrentLanguage().flag} {getCurrentLanguage().name}
        </span>
        <span className={`language-arrow ${isLanguageMenuOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      <div className={`language-menu ${isLanguageMenuOpen ? 'open' : ''}`}>
        {languages.map((language) => (
          <button
            key={language.code}
            className={`language-option ${i18n.language === language.code ? 'active' : ''}`}
            onClick={() => changeLanguage(language.code)}
          >
            <span className="flag">{language.flag}</span>
            <span className="language-name">{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}