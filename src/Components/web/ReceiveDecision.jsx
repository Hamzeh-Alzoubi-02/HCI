// src/Components/web/ReceiveDecision.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ReceiveDecision = () => {
  const { t } = useTranslation();
  const [decision, setDecision] = useState(null);

  // محاكاة طلب بيانات (مثلًا من API) لقرار معين
  useEffect(() => {
    const fetchDecision = async () => {
      const decisionData = await new Promise(resolve =>
        setTimeout(() => resolve('accepted'), 1000)
      );
      setDecision(decisionData);
    };

    fetchDecision();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{t('receiveDecision.title')}</h1>
      {decision === null ? (
        <p>{t('receiveDecision.loading')}</p>
      ) : (
        <p>{t('receiveDecision.message', { decision: decision === 'accepted' ? t('receiveDecision.accepted') : t('receiveDecision.rejected') })}</p>
      )}
    </div>
  );
};

export default ReceiveDecision;
