// src/Components/Pages/ViewAssignments.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ViewAssignments = () => {
  const { t } = useTranslation();

  const [assignments, setAssignments] = useState([]);

  // محاكاة جلب الواجبات من API أو قاعدة بيانات
  useEffect(() => {
    const fetchedAssignments = [
      { id: 1, title: 'Assignment 1', description: 'Description of Assignment 1' },
      { id: 2, title: 'Assignment 2', description: 'Description of Assignment 2' },
      { id: 3, title: 'Assignment 3', description: 'Description of Assignment 3' }
    ];
    setAssignments(fetchedAssignments);
  }, []);

  return (
    <div className="view-assignments">
      <h2>{t('viewAssignments.title')}</h2>
      {assignments.length === 0 ? (
        <p>{t('viewAssignments.noAssignments')}</p>
      ) : (
        <ul>
          {assignments.map((assignment) => (
            <li key={assignment.id}>
              <h3>{assignment.title}</h3>
              <p className="assignment-description">{assignment.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewAssignments;
