import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import '../../Style/ReviewForm.css';  
import NavBarDash from "../Pages/NavBarDash";

const ReviewForm = ({ loggedInUser }) => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [doctorName, setDoctorName] = useState("");
  const [explanationRating, setExplanationRating] = useState(0);
  const [interactionRating, setInteractionRating] = useState(0);
  const [comment, setComment] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/reviews", {
        username: loggedInUser,
        doctorName,
        rating,
        explanationRating,
        interactionRating,
        comment,
        college,
        department,
        subjectName,
      });
      setMessage(t("successMessage"));
      // Clear form fields after submission
      setRating(0);
      setExplanationRating(0);
      setInteractionRating(0);
      setComment("");
      setDoctorName("");
      setCollege("");
      setDepartment("");
      setSubjectName("");
      // Clear message after a short delay
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage(t("errorMessage"));
    }
  };

  const isFormValid = rating && explanationRating && interactionRating && doctorName && college && department && subjectName;

  return (
    <div className="review-form-container">
    
      <h2>{t('hello')} {loggedInUser}، {t('rating')}</h2>
      <p className="note">(ملاحظة: هذه المعلومات تتعامل بسرية تامة)</p>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="input-group">
          <label>{t('overallRating')}:</label>
          <input
            type="number"
            placeholder={t('overallRating')}
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
            min="1"
            max="5"
          />
        </div>
        <div className="input-group">
          <label>{t('explanationRating')}:</label>
          <input
            type="number"
            placeholder={t('explanationRating')}
            value={explanationRating}
            onChange={(e) => setExplanationRating(Number(e.target.value))}
            required
            min="1"
            max="5"
          />
        </div>
        <div className="input-group">
          <label>{t('interactionRating')}:</label>
          <input
            type="number"
            placeholder={t('interactionRating')}
            value={interactionRating}
            onChange={(e) => setInteractionRating(Number(e.target.value))}
            required
            min="1"
            max="5"
          />
        </div>
        <div className="input-group">
          <label>{t('comment')}:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={t('comment')}
          />
        </div>
        <div className="input-group">
          <label>{t('college')}:</label>
          <input
            type="text"
            placeholder={t('college')}
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>{t('department')}:</label>
          <input
            type="text"
            placeholder={t('department')}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>{t('subjectName')}:</label>
          <input
            type="text"
            placeholder={t('subjectName')}
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn" disabled={!isFormValid}>
          {t('submit')}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ReviewForm;
