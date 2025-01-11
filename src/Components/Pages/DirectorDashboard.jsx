// src/Components/Pages/DirectorDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Auth/Navbar';
import { useTranslation } from 'react-i18next';

const DirectorDashboard = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <h1>{t('directorDashboard.welcome')}</h1>
      <nav>
        <ul>
          <li><Link to="/approve-reject-audit-report">{t('directorDashboard.approveRejectAuditReport')}</Link></li>
          <li><Link to="/forward-audit-report">{t('directorDashboard.forwardAuditReport')}</Link></li>
          <li><Link to="/print-audit-report">{t('directorDashboard.printAuditReport')}</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default DirectorDashboard;
