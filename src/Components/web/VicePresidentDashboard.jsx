import React, { useState, useEffect } from 'react';

const VicePresidentDashboard = () => {
  const [auditReports, setAuditReports] = useState([]);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const fetchAuditReports = async () => {
      try {
        const response = await fetch('/api/audit-reports');  
        const data = await response.json();
        setAuditReports(data);
      } catch (error) {
        console.error('Failed to fetch audit reports:', error);
      }
    };

    fetchAuditReports();
  }, []);

  const handleApproveReport = async (reportId) => {
    try {
      await fetch(`/api/audit-reports/${reportId}/approve`, { method: 'POST' });
      setAuditReports((prevReports) =>
        prevReports.map((report) =>
          report.id === reportId ? { ...report, status: 'Approved' } : report
        )
      );
      setFeedback('Report has been approved!');
    } catch (error) {
      console.error('Failed to approve report:', error);
      setFeedback('Failed to approve report. Please try again.');
    }
  };

  const handleRejectReport = async (reportId) => {
    try {
      await fetch(`/api/audit-reports/${reportId}/reject`, { method: 'POST' });
      setAuditReports((prevReports) =>
        prevReports.map((report) =>
          report.id === reportId ? { ...report, status: 'Rejected' } : report
        )
      );
      setFeedback('Report has been rejected!');
    } catch (error) {
      console.error('Failed to reject report:', error);
      setFeedback('Failed to reject report. Please try again.');
    }
  };

  const handleSubmitToAuditee = async (reportId) => {
    try {
      await fetch(`/api/audit-reports/${reportId}/submit-to-auditee`, { method: 'POST' });
      setFeedback('Audit report has been submitted to the Auditee!');
    } catch (error) {
      console.error('Failed to submit report to Auditee:', error);
      setFeedback('Failed to submit report to Auditee. Please try again.');
    }
  };

  const Feedback = ({ message, onClose }) => (
    <div className="feedback">
      {message}
      <button onClick={onClose}>×</button>
    </div>
  );

  return (
    <div className="vice-president-dashboard">
      <h1>Vice President Dashboard</h1>
      <p>Welcome to the Vice President's Dashboard, where you can manage audit reports.</p>

      {/* إشعار المستخدم */}
      {feedback && <Feedback message={feedback} onClose={() => setFeedback('')} />}

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
            <tr key={report.id} className={report.status.toLowerCase()}>
              <td>{report.reportName}</td>
              <td>{report.status}</td>
              <td>
                {report.status === 'Pending' && (
                  <>
                    <button onClick={() => handleApproveReport(report.id)}>Approve</button>
                    <button onClick={() => handleRejectReport(report.id)}>Reject</button>
                  </>
                )}
                <button onClick={() => handleSubmitToAuditee(report.id)}>Submit to Auditee</button>
                <button onClick={() => console.log('Printing report...')}>Print Report</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VicePresidentDashboard;
