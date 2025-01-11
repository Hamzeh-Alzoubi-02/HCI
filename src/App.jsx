// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import AdminDashboard from './Components/Pages/AdminDashboard';
import AuditMemberDashboard from './Components/Pages/AuditMemberDashboard';
import DirectorDashboard from './Components/Pages/DirectorDashboard';
import AuditeeDashboard from './Components/Pages/AuditeeDashboard';
import StudentDashboard from './Components/Pages/student-dashboard';
import VicePresidentDashboard from './Components/Pages/VicePresidentDashboard';
import ViewAssignments from './Components/web/ViewAssignments';
import StudentProfile from './Components/web/StudentProfile';
import ViewExamSchedule from './Components/web/ViewExamSchedule';
import ViewPerformanceReports from './Components/web/ViewPerformanceReports';
import ManageAuditMembers from './Components/web/ManageAuditMembers';
import ApproveRejectAuditReport from './Components/web/ApproveRejectAuditReport';
import ReceiveAuditReportResponse from './Components/web/ReceiveAuditReportResponse';
import ForwardAuditResponseToMember from './Components/web/ForwardAuditResponseToMember';
import CheckAuditAssignmentStatus from './Components/web/CheckAuditAssignmentStatus';
import ManageAuditCriteria from './Components/web/ManageAuditCriteria';
import PrintAuditReport from './Components/web/PrintAuditReport';
import ForwardAuditReport from './Components/web/ForwardAuditReport';
import ViewAuditReport from './Components/web/ViewAuditReport'; // إضافة
import RespondToAuditReport from './Components/web/RespondToAuditReport'; // إضافة
import ReceiveDecision from './Components/web/ReceiveDecision'; // إضافة
import ManageAuditees from './Components/web/ManageAuditees'; // إضافة

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const storedRole = localStorage.getItem("role");
    if (storedUser && storedRole) {
      setLoggedInUser(storedUser);
      setRole(storedRole);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setLoggedInUser={setLoggedInUser} setRole={setRole} />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/audit-member-dashboard" element={<AuditMemberDashboard />} />
        <Route path="/director-dashboard" element={<DirectorDashboard />} />
        <Route path="/auditee-dashboard" element={<AuditeeDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/vice-president-dashboard" element={<VicePresidentDashboard />} />
        <Route path="/view-assignments" element={<ViewAssignments />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/view-exam-schedule" element={<ViewExamSchedule />} />
        <Route path="/view-performance-reports" element={<ViewPerformanceReports />} />
        <Route path="/manage-audit-members" element={<ManageAuditMembers />} />
        <Route path="/approve-reject-audit-report" element={<ApproveRejectAuditReport />} />
        <Route path="/forward-audit-report" element={<ForwardAuditReport />} />
        <Route path="/receive-audit-report-response" element={<ReceiveAuditReportResponse />} />
        <Route path="/forward-audit-response-to-member" element={<ForwardAuditResponseToMember />} />
        <Route path="/check-audit-assignment-status" element={<CheckAuditAssignmentStatus />} />
        <Route path="/print-audit-report" element={<PrintAuditReport />} />
        <Route path="/view-audit-report" element={<ViewAuditReport />} /> {/* Auditee */}
        <Route path="/respond-to-audit-report" element={<RespondToAuditReport />} /> {/* Auditee */}
        <Route path="/receive-decision" element={<ReceiveDecision />} /> {/* New Page */}
        <Route path="/manage-audit-criteria" element={<ManageAuditCriteria />} /> {/* New Page */}
        <Route path="/manage-auditees" element={<ManageAuditees />} /> {/* New Page */}
      </Routes>
    </Router>
  );
};

export default App;
