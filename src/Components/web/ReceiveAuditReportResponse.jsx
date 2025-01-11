import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ReceiveAuditReportResponse = () => {
  const { t, i18n } = useTranslation();
  const [response, setResponse] = useState("");

  const receiveResponse = () => {
    // محاكاة تلقي الردود
    setResponse(t('auditMemberDashboard.receiveAuditReportResponse'));
  };

  const handleLanguageSwitch = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className='receive-audit-report-response'>
      <h2>{t('auditMemberDashboard.receiveAuditReportResponseTitle')}</h2>
      <button onClick={receiveResponse}>{t('receiveResponse')}</button>
      {response && <p>{response}</p>}
      
      <button onClick={handleLanguageSwitch}>
        {i18n.language === "en" ? " Arabic" : " English"}
      </button>
    </div>
  );
};

export default ReceiveAuditReportResponse;
