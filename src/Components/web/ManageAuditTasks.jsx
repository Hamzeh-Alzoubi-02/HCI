// src/Components/Pages/ManageAuditTasks.jsx
import React, { useState, useEffect } from 'react';

const ManageAuditTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // افتراضياً سيتم تحميل المهام من قاعدة بيانات أو API
    setTasks([
      { id: 1, task: 'Audit Task 1' },
      { id: 2, task: 'Audit Task 2' }
    ]);
  }, []);

  return (
    <div>
      <h1>Manage Audit Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageAuditTasks;
