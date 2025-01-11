// src/Components/Pages/SubmitAuditReport.jsx
import React, { useState } from 'react';

const SubmitAuditReport = () => {
  const [report, setReport] = useState('');

  const handleSubmit = () => {
    // إرسال التقرير إلى الديركتور
    alert('Audit Report Submitted!');
  };

  return (
    <div>
      <h1>Submit Audit Report</h1>
      <textarea
        value={report}
        onChange={(e) => setReport(e.target.value)}
        placeholder="Enter your audit report..."
      />
      <button onClick={handleSubmit}>Submit Report</button>
    </div>
  );
};

export default SubmitAuditReport;
