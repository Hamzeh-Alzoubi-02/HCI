import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../Auth/Navbar';

const AdminDashboard = () => {
  const { t } = useTranslation();

 

  return (
    <div className="admin-dashboard">
      <Navbar />
      <h1>{t('admin.title')}</h1>
     
      <nav>
        <ul>
          <li>
            <a href="/manage-audit-members">{t('admin.links.manageAuditMembers')}</a>
          </li>
          <li>
            <a href="/approve-reject-audit-report">{t('admin.links.approveRejectAuditReport')}</a>
          </li>
          <li>
            <a href="/manage-audit-criteria">{t('admin.links.manageAuditCriteria')}</a>
          </li>
          <li>
            <a href="/manage-auditees">{t('admin.links.manageAuditees')}</a>
          </li>
          <li>
            <a href="/print-audit-report">{t('admin.links.printAuditReport')}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
