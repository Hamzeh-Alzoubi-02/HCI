import React, { useState, useEffect } from 'react';

const AuditeeDashboard = () => {
  const [auditReports, setAuditReports] = useState([]);
  const [responseFeedback, setResponseFeedback] = useState('');

  useEffect(() => {
    // هنا يمكن إضافة استرجاع البيانات من API أو ملف JSON
    // مثلا: fetchAuditReports()
    const fetchedReports = [
      { id: 1, reportName: "Audit Report 1", status: "Under Review" },
      { id: 2, reportName: "Audit Report 2", status: "Reviewed" },
    ];
    setAuditReports(fetchedReports);
  }, []);

  const handleSubmitResponse = (reportId) => {
    // التعامل مع إرسال الرد على تقرير الأوديت
    setResponseFeedback('Your response has been submitted successfully!');
    setAuditReports((prevReports) =>
      prevReports.map((report) =>
        report.id === reportId ? { ...report, status: 'Reviewed' } : report
      )
    );
  };

  return (
    <div className="auditee-dashboard">
      <h1>Auditee Dashboard</h1>
      <p>Welcome to the Auditee Dashboard, where you can review audit reports and submit responses.</p>
      
      {/* مكون الإشعارات */}
      {responseFeedback && <div className="feedback">{responseFeedback}</div>}

      <h2>Audit Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {auditReports.map((report) => (
            <tr key={report.id}>
              <td>{report.reportName}</td>
              <td>{report.status}</td>
              <td>
                {report.status === 'Under Review' && (
                  <button onClick={() => handleSubmitResponse(report.id)}>Submit Response</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditeeDashboard;
