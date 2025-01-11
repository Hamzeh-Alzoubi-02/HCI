// src/Components/Pages/EvaluateWebsite.jsx
import React, { useState } from 'react';

const EvaluateWebsite = () => {
  const [evaluation, setEvaluation] = useState('');

  const handleSubmit = () => {
    // إرسال التقييم إلى الخادم أو حفظه
    alert('Evaluation submitted!');
  };

  return (
    <div>
      <h1>Evaluate Auditee's Website</h1>
      <textarea
        value={evaluation}
        onChange={(e) => setEvaluation(e.target.value)}
        placeholder="Enter your evaluation..."
      />
      <button onClick={handleSubmit}>Submit Evaluation</button>
    </div>
  );
};

export default EvaluateWebsite;
