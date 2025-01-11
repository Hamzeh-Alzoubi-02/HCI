import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import logo from "../Img/University_of_Jordan_Logo.svg.png";
import ref from "../Img/raf,750x1000,075,t,192033_321fc38aa7.u2.jpg";
import whit from "../Img/images.png";

 
export default function NavBarLogin() {
    const { i18n } = useTranslation(); // للوصول إلى i18n

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); // تغيير اللغة
    };

    const currentLanguage = i18n.language;

    const [image, setImage] = useState(ref); // الصورة الافتراضية
    const [backgroundColor, setBackgroundColor] = useState("white"); // اللون الافتراضي

    const toggleImageAndBackground = () => {
        const newImage = image === ref ? whit : ref;
        const newBackgroundColor = backgroundColor === "white" ? "black" : "white";
        setImage(newImage);
        setBackgroundColor(newBackgroundColor);
        document.body.style.backgroundColor = newBackgroundColor;
    };

    return (
        <div className={`navbar-login-custom ${backgroundColor}`}>
            <div className="logo-container-custom">
                <img src={logo} alt={i18n.t('universityLogoAlt')} className="logo-custom" />
            </div>

            <h1 className="title-custom">{i18n.t('loginPageTitle')}</h1>

            <div className="language-selector-custom">
                {currentLanguage !== 'en' && (
                    <button onClick={() => changeLanguage("en")} className="language-button-custom">
                        {i18n.t('english')}
                    </button>
                )}
                {currentLanguage !== 'ar' && (
                    <button onClick={() => changeLanguage("ar")} className="language-button-custom">
                        {i18n.t('arabic')}
                    </button>
                )}
                <button onClick={toggleImageAndBackground} className="toggle-button-custom">
                    <img src={image} alt={i18n.t("toggleImageAlt")} className="toggle-image-custom" />
                </button>
            </div>
        </div>
    );
}
