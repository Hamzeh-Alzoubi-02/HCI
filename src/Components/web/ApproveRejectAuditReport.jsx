import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const ApproveRejectAuditReport = () => {
  const { t, i18n } = useTranslation();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // جلب التقارير من JSON Server
    axios.get('http://localhost:9000/auditReports')
      .then(response => setReports(response.data))
      .catch(error => console.error('Error fetching audit reports', error));
  }, []);

  const handleApproval = (reportId, status) => {
    // تحديث حالة التقرير
    axios.patch(`http://localhost:9000/auditReports/${reportId}`, { status })
      .then(() => {
        const updatedReports = reports.map(report => 
          report.id === reportId ? { ...report, status } : report
        );
        setReports(updatedReports);
      })
      .catch(error => console.error('Error updating report status', error));
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="approve-reject-audit">
      <button onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'عربي' : 'English'}
      </button>
      <h2>{t('admin.reports.approveRejectTitle')}</h2>
      {reports.map(report => (
        <div key={report.id}>
          <p>{report.content}</p>
          <button onClick={() => handleApproval(report.id, "approved")}>
            {t('admin.reports.approveButton')}
          </button>
          <button onClick={() => handleApproval(report.id, "rejected")}>
            {t('admin.reports.rejectButton')}
          </button>
          <p>{t('admin.reports.status')}: {report.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ApproveRejectAuditReport;
