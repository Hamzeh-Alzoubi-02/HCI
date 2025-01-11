import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./Auth/Login";
import AdminDashboard from "./Components/Pages/AdminDashboard";
import AuditMemberDashboard from "./Components/Pages/AuditMemberDashboard";
import DirectorDashboard from "./Components/Pages/DirectorDashboard";
import VicePresidentDashboard from "./Components/Pages/VicePresidentDashboard";
import AuditeeDashboard from "./Components/Pages/AuditeeDashboard";
import StudentDashboard from "./Components/Pages/StudentDashboard"; // صفحة الطلاب

const MainApp = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const storedRole = localStorage.getItem("role");
    if (storedUser && storedRole) {
      setLoggedInUser(storedUser);
      setRole(storedRole);
    }
  }, []);

  useEffect(() => {
    if (loggedInUser && role) {
      switch (role) {
        case "Administrator":
          navigate("/admin-dashboard");
          break;
        case "Audit Member":
          navigate("/audit-member-dashboard");
          break;
        case "Director of AQAC":
          navigate("/director-dashboard");
          break;
        case "Vice President":
          navigate("/vp-dashboard");
          break;
        case "Auditee":
          navigate("/auditee-dashboard");
          break;
        case "Student":
          navigate("/student-dashboard");
          break;
        default:
          navigate("/");
      }
    }
  }, [loggedInUser, role, navigate]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login setLoggedInUser={setLoggedInUser} setRole={setRole} />}
        />
        <Route
          path="/admin-dashboard"
          element={<PrivateRoute element={AdminDashboard} role={role} allowedRoles={["Administrator"]} />}
        />
        <Route
          path="/audit-member-dashboard"
          element={<PrivateRoute element={AuditMemberDashboard} role={role} allowedRoles={["Audit Member"]} />}
        />
        <Route
          path="/director-dashboard"
          element={<PrivateRoute element={DirectorDashboard} role={role} allowedRoles={["Director of AQAC"]} />}
        />
        <Route
          path="/vp-dashboard"
          element={<PrivateRoute element={VicePresidentDashboard} role={role} allowedRoles={["Vice President"]} />}
        />
        <Route
          path="/auditee-dashboard"
          element={<PrivateRoute element={AuditeeDashboard} role={role} allowedRoles={["Auditee"]} />}
        />
        <Route
          path="/student-dashboard"
          element={<PrivateRoute element={StudentDashboard} role={role} allowedRoles={["Student"]} />}
        />
      </Routes>
    </Router>
  );
};

export default MainApp;
