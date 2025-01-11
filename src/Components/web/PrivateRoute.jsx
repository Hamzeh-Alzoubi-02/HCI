import React from 'react';
import { Navigate } from 'react-router-dom';

// مكون خاص للتحقق من الوصول حسب الدور
const PrivateRoute = ({ element: Component, role, allowedRoles }) => {
  // إذا كان دور المستخدم في القائمة المسموح بها، اعرض الصفحة
  return allowedRoles.includes(role) ? (
    <Component />
  ) : (
    // إذا لم يكن لدى المستخدم الدور المطلوب، قم بتوجيهه إلى صفحة تسجيل الدخول
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
