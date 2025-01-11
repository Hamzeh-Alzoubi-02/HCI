// src/Components/Pages/ViewAuditSchedule.jsx
import React, { useState, useEffect } from 'react';

const ViewAuditSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // تحميل جدول التدقيق من API
    setSchedule([
      { date: '2025-01-10', task: 'Audit Task 1' },
      { date: '2025-01-12', task: 'Audit Task 2' }
    ]);
  }, []);

  return (
    <div>
      <h1>Audit Schedule</h1>
      <ul>
        {schedule.map((item, index) => (
          <li key={index}>
            {item.date}: {item.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAuditSchedule;
