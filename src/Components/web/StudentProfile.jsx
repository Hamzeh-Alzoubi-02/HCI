// src/Components/Pages/StudentProfile.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const StudentProfile = () => {
  const { t } = useTranslation();

  const [studentInfo, setStudentInfo] = useState(null);

  // محاكاة جلب البيانات من API أو قاعدة بيانات
  useEffect(() => {
    const fetchedStudentInfo = {
      name: 'حمزة الزعبي',
      id: '123456',
      department: 'نظم المعلومات الحاسوبية',
      email: 'hamza@example.com',
      phone: '123-456-7890',
    };
    setStudentInfo(fetchedStudentInfo);
  }, []);

  if (!studentInfo) {
    return <p>{t('studentProfile.loading')}</p>;
  }

  return (
    <div className="student-profile">
      <h2>{t('studentProfile.title')}</h2>
      <div>
        <strong>{t('studentProfile.name')}:</strong> {studentInfo.name}
      </div>
      <div>
        <strong>{t('studentProfile.id')}:</strong> {studentInfo.id}
      </div>
      <div>
        <strong>{t('studentProfile.department')}:</strong> {studentInfo.department}
      </div>
      <div>
        <strong>{t('studentProfile.email')}:</strong> {studentInfo.email}
      </div>
      <div>
        <strong>{t('studentProfile.phone')}:</strong> {studentInfo.phone}
      </div>
    </div>
  );
};

export default StudentProfile;
