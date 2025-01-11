// src/Components/Pages/ViewExamSchedule.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const ViewExamSchedule = () => {
  const { t } = useTranslation();

  return (
    <div className="view-exam-schedule">
      <h2>{t('viewExamSchedule.title')}</h2>
      <table>
        <thead>
          <tr>
            <th>{t('viewExamSchedule.course')}</th>
            <th>{t('viewExamSchedule.examDate')}</th>
            <th>{t('viewExamSchedule.location')}</th>
          </tr>
        </thead>
        <tbody>
          {/* هنا يمكنك إضافة بيانات الجدول */}
          <tr>
            <td>Math 101</td>
            <td>2025-01-15</td>
            <td>Room 105</td>
          </tr>
          <tr>
            <td>Physics 102</td>
            <td>2025-01-16</td>
            <td>Room 106</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewExamSchedule;
