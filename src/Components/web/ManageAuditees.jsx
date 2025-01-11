import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ManageAuditees = () => {
  const { t, i18n } = useTranslation();
  const [auditees, setAuditees] = useState([]);
  const [loading, setLoading] = useState(true);

  // تحميل بيانات المراجعين من JSON Server أو API
  useEffect(() => {
    const fetchAuditees = async () => {
      try {
        const response = await fetch("http://localhost:9000/auditees");  
        const data = await response.json();
        setAuditees(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching auditees:", error);
        setLoading(false);
      }
    };

    fetchAuditees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:9000/auditees/${id}`, {
        method: "DELETE",
      });
      setAuditees(auditees.filter((auditee) => auditee.id !== id));
    } catch (error) {
      console.error("Error deleting auditee:", error);
    }
  };

  // دالة لتغيير اللغة
  const handleLanguageSwitch = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="manage-auditees">
      <h2>{t('admin.auditees.manageTitle')}</h2>
      <button onClick={handleLanguageSwitch}>
        {i18n.language === "en" ? "Switch to Arabic" : "Switch to English"}
      </button>
      {loading ? (
        <p>{t('admin.auditees.loading')}</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>{t('admin.auditees.id')}</th>
                <th>{t('admin.auditees.name')}</th>
                <th>{t('admin.auditees.email')}</th>
                <th>{t('admin.auditees.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {auditees.map((auditee) => (
                <tr key={auditee.id}>
                  <td>{auditee.id}</td>
                  <td>{auditee.name}</td>
                  <td>{auditee.email}</td>
                  <td>
                    <button onClick={() => handleDelete(auditee.id)}>
                      {t('admin.auditees.deleteButton')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageAuditees;
