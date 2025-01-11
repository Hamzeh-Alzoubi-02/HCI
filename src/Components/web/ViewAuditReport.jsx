// src/Components/web/ViewAuditReport.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ViewAuditReport = () => {
  const { t } = useTranslation();
  const [auditReports, setAuditReports] = useState([]);

  useEffect(() => {
    // استدعاء البيانات من API أو ملف JSON
    // مثال: fetch('/api/audit-reports').then(response => response.json()).then(data => setAuditReports(data));
    const fetchedReports = [
      { id: 1, title: "Audit Report 1", description: "Details of Audit Report 1", date: "2024-12-01" },
      { id: 2, title: "Audit Report 2", description: "Details of Audit Report 2", date: "2024-12-10" },
    ];
    setAuditReports(fetchedReports);
  }, []);

  return (
    <div className="view-audit-report">
      <h1>{t('viewAuditReport.title')}</h1>
      <p>{t('viewAuditReport.description')}</p>

      {auditReports.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>{t('viewAuditReport.tableTitle')}</th>
              <th>{t('viewAuditReport.tableDescription')}</th>
              <th>{t('viewAuditReport.tableDate')}</th>
            </tr>
          </thead>
          <tbody>
            {auditReports.map((report) => (
              <tr key={report.id}>
                <td>{report.title}</td>
                <td>{report.description}</td>
                <td>{report.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>{t('viewAuditReport.noReports')}</p>
      )}
    </div>
  );
};

export default ViewAuditReport;
