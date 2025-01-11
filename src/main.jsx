import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

/* Styles */
import './Style/App.css';
import './Style/DashBord.css';
import './Style/AdminDash.css';
import './Style/ManageAuditMembers.css';
import './Style/approve-reject-audit.css';
import './Style/manage-audit-criteria.css';
import './Style/ManageAuditees.css';
import './Style/PrintAuditReport.css';
import './Style/check-audit-assignment-status.css';
import './Style/receive-audit-report-response.css';
import './Style/forward-audit-report.css';
import './Style/view-audit-report.css';
import './Style/respond-to-audit-report.css';
import './Style/view-exam-schedule.css';
import './Style/view-performance-reports.css';
import './Style/view-assignments.css';
import './Style/student-profile.css';
import './Style/audit-member-dashboard.css';
import './Style/Navbar.css';

// Only import necessary components for now
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
