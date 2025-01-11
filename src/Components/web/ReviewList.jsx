import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next"; // استخدام الترجمة

const ReviewList = () => {
  const { t } = useTranslation(); // الترجمة
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:9000/reviews");
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        setError(t("fetchError")); // استخدام الترجمة
        setLoading(false);
      }
    };

    fetchReviews();
  }, [t]);

  if (loading) {
    return <div className="loading">{t("loadingReviews")}</div>; // Consider a spinner or loader here
  }

  if (error) {
    return <div className="error-message">{error}</div>; // Display error with styling
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>{t("reviews")}</h2> {/* الترجمة الخاصة بعنوان التقييمات */}
      {reviews.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {reviews.map((review) => (
            <li
              key={review.id} // Prefer unique ID if available
              style={{
                border: "1px solid #ddd",
                marginBottom: "15px",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3>{review.username || review.doctorName}</h3>
              <p><strong>{t("overallRating")}:</strong> {review.rating}/5</p>
              {review.explanationRating && (
                <p><strong>{t("explanationRating")}:</strong> {review.explanationRating}/5</p>
              )}
              {review.interactionRating && (
                <p><strong>{t("interactionRating")}:</strong> {review.interactionRating}/5</p>
              )}
              <p><strong>{t("comment")}:</strong> {review.comment || t("noComment")}</p> {/* استخدام الترجمة */}
              <p><strong>{t("college")}:</strong> {review.college}</p>
              <p><strong>{t("department")}:</strong> {review.department}</p>
              <p><strong>{t("subjectName")}:</strong> {review.subjectName}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{t("noReviews")}</p> // الترجمة لحالة عدم وجود تقييمات
      )}
    </div>
  );
};

export default ReviewList;
