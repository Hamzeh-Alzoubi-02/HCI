// src/Components/Pages/AuditeeDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Auth/Navbar';
import { useTranslation } from 'react-i18next';

const AuditeeDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="auditee-dashboard">
      <Navbar />
      <h1>{t('auditeeDashboard.title')}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/view-audit-report">{t('auditeeDashboard.viewAuditReport')}</Link>
          </li>
          <li>
            <Link to="/respond-to-audit-report">{t('auditeeDashboard.respondToAuditReport')}</Link>
          </li>
          <li>
            <Link to="/receive-decision">{t('auditeeDashboard.receiveDecision')}</Link>
          </li>
          <li>
            <Link to="/check-audit-assignment-status">{t('auditeeDashboard.checkAuditStatus')}</Link>
          </li>
          <li>
            <Link to="/print-audit-report">{t('auditeeDashboard.printAuditReport')}</Link>
          </li>
          <li>
            <Link to="/">{t('auditeeDashboard.logout')}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AuditeeDashboard;
