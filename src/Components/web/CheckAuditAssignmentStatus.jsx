import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const CheckAuditAssignmentStatus = () => {
  const { t, i18n } = useTranslation();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // استرجاع التعيينات من JSON Server
    axios
      .get("http://localhost:9000/auditAssignments")
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => console.error("Error fetching audit assignments", error));
  }, []);

  return (
    <div className="check-audit-assignment-status">
      <h2>{t('auditMemberDashboard.checkAuditAssignmentStatus.title')}</h2>
      <table>
        <thead>
          <tr>
            <th>{t('auditMemberDashboard.checkAuditAssignmentStatus.auditMember')}</th>
            <th>{t('auditMemberDashboard.checkAuditAssignmentStatus.auditee')}</th>
            <th>{t('auditMemberDashboard.checkAuditAssignmentStatus.status')}</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.auditMemberName}</td>
              <td>{assignment.auditeeName}</td>
              <td>{assignment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckAuditAssignmentStatus;
