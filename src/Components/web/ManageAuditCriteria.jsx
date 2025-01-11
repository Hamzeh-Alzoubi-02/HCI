import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ManageAuditCriteria = () => {
  const { t, i18n } = useTranslation();
  const [criteria, setCriteria] = useState([]);
  const [newCriteria, setNewCriteria] = useState("");
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState("");

  // جلب بيانات معايير التدقيق من API أو JSON Server
  useEffect(() => {
    const fetchCriteria = async () => {
      try {
        const response = await fetch("http://localhost:5000/audit-criteria");
        const data = await response.json();
        setCriteria(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching criteria:", error);
        setLoading(false);
      }
    };

    fetchCriteria();
  }, []);

  // دالة لإضافة معيار جديد
  const handleAddCriteria = async () => {
    if (!newCriteria) {
      setNotification(t('admin.criteria.addError'));
      return;
    }

    const newAuditCriteria = {
      id: criteria.length + 1,
      name: newCriteria,
    };

    try {
      await fetch("http://localhost:9000/audit-criteria", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAuditCriteria),
      });
      setCriteria([...criteria, newAuditCriteria]);
      setNewCriteria("");
      setNotification(t('admin.criteria.addSuccess'));
    } catch (error) {
      console.error("Error adding criteria:", error);
      setNotification(t('admin.criteria.addError'));
    }
  };

  // دالة لحذف معيار
  const handleDeleteCriteria = async (id) => {
    try {
      await fetch(`http://localhost:9000/audit-criteria/${id}`, {
        method: "DELETE",
      });
      setCriteria(criteria.filter((item) => item.id !== id));
      setNotification(t('admin.criteria.deleteSuccess'));
    } catch (error) {
      console.error("Error deleting criteria:", error);
      setNotification(t('admin.criteria.deleteError'));
    }
  };

  // دالة لتبديل اللغة
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="manage-audit-criteria">
      <div className="language-switch">
        <button onClick={() => handleLanguageChange("en")}>
          English
        </button>
        <button onClick={() => handleLanguageChange("ar")}>
          العربية
        </button>
      </div>

      <h2>{t('admin.criteria.manageTitle')}</h2>
      {notification && <p className="notification">{notification}</p>}
      {loading ? (
        <p>{t('admin.criteria.loading')}</p>
      ) : (
        <div>
          <h3>{t('admin.criteria.addTitle')}</h3>
          <input
            type="text"
            value={newCriteria}
            onChange={(e) => setNewCriteria(e.target.value)}
            placeholder={t('admin.criteria.namePlaceholder')}
          />
          <button onClick={handleAddCriteria}>{t('admin.criteria.addButton')}</button>

          <h3>{t('admin.criteria.existingTitle')}</h3>
          <table>
            <thead>
              <tr>
                <th>{t('admin.criteria.id')}</th>
                <th>{t('admin.criteria.name')}</th>
                <th>{t('admin.criteria.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((criterion) => (
                <tr key={criterion.id}>
                  <td>{criterion.id}</td>
                  <td>{criterion.name}</td>
                  <td>
                    <button onClick={() => handleDeleteCriteria(criterion.id)}>
                      {t('admin.criteria.deleteButton')}
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

export default ManageAuditCriteria;
