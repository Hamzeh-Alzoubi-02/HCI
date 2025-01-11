// src/Components/Pages/ViewPerformanceReports.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const ViewPerformanceReports = () => {
  const { t } = useTranslation();

  return (
    <div className="view-performance-reports">
      <h2>{t('viewPerformanceReports.title')}</h2>
      <p>{t('viewPerformanceReports.gpa')} 3.5</p>
      <ul>
        <li>{t('viewPerformanceReports.math')}: B+</li>
        <li>{t('viewPerformanceReports.physics')}: A</li>
        <li>{t('viewPerformanceReports.chemistry')}: B</li>
      </ul>
    </div>
  );
};

export default ViewPerformanceReports;
