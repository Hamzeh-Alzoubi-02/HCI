// src/Components/web/RespondToAuditReport.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const RespondToAuditReport = () => {
  const { t } = useTranslation();
  const [auditReports, setAuditReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [response, setResponse] = useState('');

  useEffect(() => {
    // استدعاء البيانات من API أو ملف JSON
    const fetchedReports = [
      { id: 1, title: "Audit Report 1", description: "Details of Audit Report 1", status: "Pending" },
      { id: 2, title: "Audit Report 2", description: "Details of Audit Report 2", status: "Pending" },
    ];
    setAuditReports(fetchedReports);
  }, []);

  const handleSubmitResponse = (reportId) => {
    // إرسال الرد إلى السيرفر (يمكن استخدام fetch أو axios)
    console.log(`Response for report ${reportId}:`, response);

    // تحديث حالة التقرير إلى "Responded"
    setAuditReports((prevReports) =>
      prevReports.map((report) =>
        report.id === reportId ? { ...report, status: "Responded" } : report
      )
    );

    // إعادة تعيين الحقول
    setSelectedReport(null);
    setResponse('');
  };

  return (
    <div className="respond-to-audit-report">
      <h1>{t('respondToAuditReport.title')}</h1>
      <p>{t('respondToAuditReport.description')}</p>

      {selectedReport ? (
        <div className="response-form">
          <h2>{t('respondToAuditReport.respondTo')} {selectedReport.title}</h2>
          <p>{selectedReport.description}</p>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder={t('respondToAuditReport.enterResponse')}
          />
          <button onClick={() => handleSubmitResponse(selectedReport.id)}>
            {t('respondToAuditReport.submitResponse')}
          </button>
          <button onClick={() => setSelectedReport(null)}>{t('respondToAuditReport.cancel')}</button>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>{t('respondToAuditReport.tableTitle')}</th>
              <th>{t('respondToAuditReport.tableDescription')}</th>
              <th>{t('respondToAuditReport.tableStatus')}</th>
              <th>{t('respondToAuditReport.tableActions')}</th>
            </tr>
          </thead>
          <tbody>
            {auditReports.map((report) => (
              <tr key={report.id}>
                <td>{report.title}</td>
                <td>{report.description}</td>
                <td>{report.status}</td>
                <td>
                  {report.status === "Pending" && (
                    <button onClick={() => setSelectedReport(report)}>
                      {t('respondToAuditReport.respondButton')}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RespondToAuditReport;
