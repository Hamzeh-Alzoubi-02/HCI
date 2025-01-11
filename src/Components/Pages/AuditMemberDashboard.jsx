import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Auth/Navbar';
import { useTranslation } from 'react-i18next';

const AuditMemberDashboard = () => {
  const { t, i18n } = useTranslation();

  // وظيفة تغيير اللغة
  const handleLanguageSwitch = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';  // تبديل اللغة بين الإنجليزية والعربية
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <Navbar />
      <h1>{t('auditMemberDashboard.welcome')}</h1>

      {/* زر تبديل اللغة */}
      
     

      <nav>
        <ul>
          <li><Link to="/manage-audit-members">{t('auditMemberDashboard.manageAuditTasks')}</Link></li>
          <li><Link to="/manage-auditees">{t('auditMemberDashboard.viewAuditSchedule')}</Link></li>
          <li><Link to="/manage-audit-criteria">{t('auditMemberDashboard.evaluateAuditeeWebsite')}</Link></li>
          <li><Link to="/approve-reject-audit-report">{t('auditMemberDashboard.submitAuditReport')}</Link></li>
          <li><Link to="/receive-audit-report-response">{t('auditMemberDashboard.receiveAuditReportResponses')}</Link></li>
          <li><Link to="/check-audit-assignment-status">{t('auditMemberDashboard.checkAuditStatus')}</Link></li>
          <li><Link to="/print-audit-report">{t('auditMemberDashboard.printAuditReport')}</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AuditMemberDashboard;
