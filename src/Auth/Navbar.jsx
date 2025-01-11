import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Joedan from '../Components/Img/University_of_Jordan_Logo.svg.png';  

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [backgroundColor, setBackgroundColor] = useState('white'); // Default background is white

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const handleBackgroundChange = () => {
    setBackgroundColor(backgroundColor === 'white' ? 'black' : 'white');
    document.body.style.backgroundColor = backgroundColor === 'white' ? 'black' : 'white';
  };

  return (
    <nav className={`navbar ${backgroundColor}`}>
      <div className="navbar-container">
        <img src={Joedan} alt={t('navbar.alt')} className="navbar-logo" />
        <div className="navbar-settings">
          <button className="language-button" onClick={handleLanguageChange}>
            { i18n.language === 'en' ? t('Arabic') : t('English') }
          </button>
          <button className="background-button" onClick={handleBackgroundChange}>
            {backgroundColor === 'white' ? t('black') : t('white')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
