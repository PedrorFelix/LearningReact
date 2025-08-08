import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>
        English
      </button>
      <button onClick={() => changeLanguage('pt')}>
        Português
      </button>
      <button onClick={() => changeLanguage('es')}>
        Español
      </button>
      <button onClick={() => changeLanguage('gr')}>
        Deutsch
      </button>
      <button onClick={() => changeLanguage('it')}>
        Italiano
      </button>
    </div>
  );
}