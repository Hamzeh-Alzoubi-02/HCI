import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import NavBarDash from "./NavBarDash";
import elearning from "../Img/download.jpg";
import juexam from "../Img/images.jpg";
import Evaluation from "../Img/rb_14810.png";
import EvaluationDR from "../Img/rb_2691.png";
import { Link } from "react-router-dom";

export default function DashBord({ loggedInUser }) {
  const { t } = useTranslation();  // استخدام الترجمة هنا
  const [backgroundColor, setBackgroundColor] = useState("white");  // تحديد اللون الافتراضي

  // دالة لتغيير اللون
  const toggleBackgroundColor = () => {
    const newColor = backgroundColor === "white" ? "black" : "white";
    setBackgroundColor(newColor);
    document.body.style.backgroundColor = newColor; // تغيير اللون في الـ body
  };

  const links = [
    { title: t("elearning"), image: elearning, url: "https://elearning.ju.edu.jo/" },
    { title: t("juExam"), image: juexam, url: "https://juexams.com/moodle/" },
    { title: t("evaluationDoctors"), image: Evaluation, url: "/evaluation" },
    { title: t("evaluationWebsite"), image: EvaluationDR, url: "/EvaluationWeb" },
  ];

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor; // التأكد من تفعيل اللون عند التحميل
  }, [backgroundColor]);

  return (
    <div className={`dashboard-container ${backgroundColor}`}>
      <NavBarDash />

      <div className="welcome-message">
        <h1>🖐️ {t("hello")} {loggedInUser}</h1>
      </div>

      <div className="container">
        {links.map((link, index) => (
          <div className="card" key={index}>
            <img src={link.image} alt={`${link.title} logo`} className="card-image" />
            <h2>{link.title}</h2>
            <button className="open-button">
              <Link to={link.url} className="open-link" aria-label={`Go to ${link.title} page`}>
                {t("open")}
              </Link>
            </button>
          </div>
        ))}
      </div>

      {/* زر لتغيير اللون */}
      <button className="toggle-background-button" onClick={toggleBackgroundColor}>
        {backgroundColor === "white" ? t("darkMode") : t("lightMode")}
      </button>
    </div>
  );
}
