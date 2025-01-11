import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ReviewListWeb() {
  const { t } = useTranslation(); // استخدام الترجمة
  const [reviews, setReviews] = useState([]);   
  const [message, setMessage] = useState("");    
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:9000/EvaluationWeb");   
        if (!response.ok) {
          throw new Error("حدث خطأ أثناء جلب البيانات");
        }
        const data = await response.json();  
        setReviews(data);  
      } catch (error) {
        setMessage(error.message);   
      } finally {
        setLoading(false); // Stop loading when request is done
      }
    };

    fetchReviews();  
  }, []);  

  return (
    <div className="review-list-container">
      <h1 className="review-list-header">{t('reviewList')}</h1>

      {message && <p className="review-list-error-message">{message}</p>}

      {/* Show loading spinner or message */}
      {loading && <p>{t("loadingReviews")}</p>}

      <ul className="review-list-items">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id || review.siteName} className="review-list-item">
              <div className="review-list-content">
                <img 
                  src={review.siteImage || "https://via.placeholder.com/150"} 
                  alt={review.siteName || "Site"} 
                  className="review-list-image" 
                />
                <div>
                  <p className="review-list-site-name"><strong>{t('site')}:</strong> {review.siteName || t('unknownSite')}</p>
                  <p><strong>{t('usability')}:</strong> {review.usability || "N/A"} {t('stars')}</p>
                  <p><strong>{t('design')}:</strong> {review.design || "N/A"} {t('stars')}</p>
                  <p><strong>{t('speed')}:</strong> {review.speed || "N/A"} {t('stars')}</p>
                  <p><strong>{t('information')}:</strong> {review.information || "N/A"} {t('stars')}</p>
                  <p><strong>{t('overallRating')}:</strong> {review.overallRating || "N/A"} {t('stars')}</p>
                  <p><strong>{t('comment')}:</strong> {review.comment || t('noComment')}</p>
                </div>
              </div>
              <hr />
            </li>
          ))
        ) : (
          <p>{t('noReviews')}</p>
        )}
      </ul>
    </div>
  );
}
