import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const PrintAuditReport = () => {
  const { t, i18n } = useTranslation();
  const [auditReport, setAuditReport] = useState(null);
  const [loading, setLoading] = useState(true);

  // جلب بيانات تقرير التدقيق من API أو JSON Server
  useEffect(() => {
    const fetchAuditReport = async () => {
      try {
        const response = await fetch("http://localhost:9000/audit-reports/1"); // استخدم المسار المناسب هنا
        const data = await response.json();
        setAuditReport(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching audit report:", error);
        setLoading(false);
      }
    };

    fetchAuditReport();
  }, []);

  // دالة لطباعة التقرير
  const handlePrint = () => {
    const printWindow = window.open("", "", "width=600,height=600");
    printWindow.document.write("<html><head><title>Print Audit Reports</title></head><body>");
    printWindow.document.write("<h1>" + t('admin.reports.printTitle') + "</h1>");
    printWindow.document.write(`<p><strong>${t('admin.reports.auditReportId')}:</strong> ${auditReport?.id}</p>`);
    printWindow.document.write(`<p><strong>${t('admin.reports.reportDetails')}:</strong> ${auditReport?.details}</p>`);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  // دالة لتغيير اللغة
  const handleLanguageSwitch = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="print-audit-report">
      <h2>{t('admin.reports.printTitle')}</h2>
      <button onClick={handleLanguageSwitch}>
        {i18n.language === "en" ? "Arabic" : "English"}
      </button>
      {loading ? (
        <p>{t('admin.reports.loading')}</p>
      ) : (
        <div>
          <h3>{t('admin.reports.detailsTitle')}</h3>
          <p><strong>{t('admin.reports.auditReportId')}:</strong> {auditReport?.id}</p>
          <p><strong>{t('admin.reports.reportDetails')}:</strong> {auditReport?.details}</p>
          
          <button onClick={handlePrint}>{t('admin.reports.printButton')}</button>
        </div>
      )}
    </div>
  );
};

export default PrintAuditReport;
