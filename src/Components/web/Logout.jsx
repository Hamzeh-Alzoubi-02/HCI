// src/Components/Pages/Logout.jsx
import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('role');
    window.location.href = '/';
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
