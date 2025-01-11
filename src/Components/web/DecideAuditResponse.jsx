// src/Components/Pages/DecideAuditResponse.jsx
import React, { useState } from 'react';

const DecideAuditResponse = () => {
  const [decision, setDecision] = useState('');

  const handleDecide = () => {
    // ارسال القرار إلى الخادم
    alert('Decision Submitted!');
  };

  return (
    <div>
      <h1>Decide on Audit Report Responses</h1>
      <textarea
        value={decision}
        onChange={(e) => setDecision(e.target.value)}
        placeholder="Enter your decision..."
      />
      <button onClick={handleDecide}>Submit Decision</button>
    </div>
  );
};

export default DecideAuditResponse;
