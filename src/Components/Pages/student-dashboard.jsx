// src/Components/Pages/StudentDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../Auth/Navbar';

const StudentDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="student-dashboard">
      <Navbar />
      <h1>{t('studentDashboard.title')}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/view-exam-schedule">{t('studentDashboard.viewExamSchedule')}</Link>
          </li>
          <li>
            <Link to="/view-performance-reports">{t('studentDashboard.viewPerformanceReports')}</Link>
          </li>
          <li>
            <Link to="/view-assignments">{t('studentDashboard.viewAssignments')}</Link>
          </li>
          <li>
            <Link to="/student-profile">{t('studentDashboard.viewProfile')}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentDashboard;
