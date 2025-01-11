import logo from "../Img/University_of_Jordan_Logo.svg.png";
import i18n from "./Next";
import { useTranslation } from "react-i18next"; // لاستيراد الترجمة

export default function NavAdmin() {
    const { t } = useTranslation(); // للحصول على الترجمة
    const currentLanguage = i18n.language;

    return (
        <div className="navBarDash">
            <img src={logo} alt="University of Jordan logo, main campus" />
            <h1 dir="rtl">{t('home')}</h1> {/* استخدام الترجمة هنا */}

            {/* أزرار تغيير اللغة مع إخفاء الزر الذي لا يتوافق مع اللغة الحالية */}
            <div className="language-selector">
                {currentLanguage !== 'en' && (
                    <button
                        onClick={() => i18n.changeLanguage("en")}
                        aria-label={t("changeToEnglish")}
                    >
                        {t('english')} {/* استخدام الترجمة هنا */}
                    </button>
                )}
                {currentLanguage !== 'ar' && (
                    <button
                        onClick={() => i18n.changeLanguage("ar")}
                        aria-label={t("changeToArabic")}
                    >
                        {t('arabic')} {/* استخدام الترجمة هنا */}
                    </button>
                )}
            </div>
        </div>
    );
}
