import React, { useState } from "react";
import { Navigate } from "react-router-dom";   
import Login from "./Auth/Login";
import AdminPage from "./Auth/AdminPage";
import DashBord from "./Components/Pages/DashBord";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [role, setRole] = useState("");  

  
  if (!loggedInUser) {
    return <Login setLoggedInUser={setLoggedInUser} setRole={setRole} />;
  }

 
  if (role === "admin") {
    return <AdminPage />;
  }

 
  return <DashBord loggedInUser={loggedInUser} />;
};

export default App;
