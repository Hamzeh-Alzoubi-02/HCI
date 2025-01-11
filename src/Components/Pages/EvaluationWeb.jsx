import React, { useState } from "react";
import { useTranslation } from "react-i18next";  // إضافة هذا السطر
import elearning from "../Img/download.jpg";
import juexam from "../Img/images.jpg";
import Register from "../Img/University_of_Jordan_Logo.svg.png";
import NavBarDash from "./NavBarDash";

export default function EvaluationDR() {
  const { t } = useTranslation(); // استخدام الترجمة
  const [siteName, setSiteName] = useState("");
  const [usability, setUsability] = useState(1);
  const [design, setDesign] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [information, setInformation] = useState(1);
  const [overallRating, setOverallRating] = useState(1);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const sites = [
    { name: "E-learning", img: elearning },
    { name: "JU Exam", img: juexam },
    { name: "Register", img: Register },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if siteName is selected
    if (!siteName) {
      setMessage(t("selectSiteFirst")); // Use a translation for the message
      return;
    }

    const newEvaluation = {
      siteName,
      usability,
      design,
      speed,
      information,
      overallRating,
      comment,
      siteImage: sites.find((site) => site.name === siteName)?.img,
    };

    try {
      const response = await fetch("http://localhost:9000/EvaluationWeb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvaluation),
      });

      if (response.status === 201) {
        setMessage(t("successMessage")); // استخدام الترجمة
        setSiteName("");
        setUsability(1);
        setDesign(1);
        setSpeed(1);
        setInformation(1);
        setOverallRating(1);
        setComment("");
      } else {
        setMessage(t("errorMessage")); // استخدام الترجمة
      }
    } catch (error) {
      console.error("Error submitting evaluation:", error);
      setMessage(t("errorMessage")); // استخدام الترجمة
    }
  };

  return (
    <div className="container">
       
      <form onSubmit={handleSubmit} className="form">
       
        <div className="section">
          <label className="label">{t("selectSite")}</label>
          <div className="site-container">
            {sites.map((site, index) => (
              <div
                key={index}
                className={`site-card ${siteName === site.name ? "selected" : ""}`}
                onClick={() => setSiteName(site.name)}
              >
                <img src={site.img} alt={site.name} className="site-image" />
                <p className="site-name">{site.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <label className="label">{t("usability")}</label>
          <select value={usability} onChange={(e) => setUsability(Number(e.target.value))} aria-label={t("usability")}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {t("star", { count: num })}
              </option>
            ))}
          </select>
        </div>

        <div className="section">
          <label className="label">{t("design")}</label>
          <select value={design} onChange={(e) => setDesign(Number(e.target.value))} aria-label={t("design")}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {t("star", { count: num })}
              </option>
            ))}
          </select>
        </div>

        <div className="section">
          <label className="label">{t("speed")}</label>
          <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))} aria-label={t("speed")}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {t("star", { count: num })}
              </option>
            ))}
          </select>
        </div>

        <div className="section">
          <label className="label">{t("information")}</label>
          <select value={information} onChange={(e) => setInformation(Number(e.target.value))} aria-label={t("information")}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {t("star", { count: num })}
              </option>
            ))}
          </select>
        </div>

        <div className="section">
          <label className="label">{t("overallRating")}</label>
          <select value={overallRating} onChange={(e) => setOverallRating(Number(e.target.value))} aria-label={t("overallRating")}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {t("star", { count: num })}
              </option>
            ))}
          </select>
        </div>

        <div className="section">
          <label className="label">{t("comment")}</label>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} aria-label={t("comment")}></textarea>
        </div>

        <button type="submit">{t("submit")}</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}
