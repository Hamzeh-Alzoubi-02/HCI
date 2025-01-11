import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import NavBarLogin from "../Components/Pages/NavBarLogin";
import { useTranslation } from "react-i18next";  // استيراد useTranslation لتغيير اللغة
import Next from "../Components/Pages/Next";
const Login = ({ setLoggedInUser, setRole }) => {
  const { t, i18n } = useTranslation();  // استخدام الترجمة هنا
  const navigate = useNavigate(); // استخدام useNavigate هنا بعد التغليف بـ Router
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:9000/users");

      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setLoggedInUser(user.username);
        setRole(user.role);

        localStorage.setItem("loggedInUser", user.username);
        localStorage.setItem("role", user.role);

        setMessage(t("loginSuccess"));  {/* استخدام الترجمة هنا */}

        switch (user.role) {
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
        
      } else {
        setMessage(t("loginFailed"));  {/* استخدام الترجمة هنا */}
      }
    } catch (error) {
      setError(error.message);
      setMessage(t("loginFailed"));  {/* استخدام الترجمة هنا */}
    } finally {
      setIsLoading(false);
    }
  };

  // دالة لتغيير اللغة
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // تغيير اللغة
  };

  return (
    <>
      <NavBarLogin />
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder={t("username")}   
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder={t("password")}   
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? t("loading") : t("login")}  {/* استخدام الترجمة هنا */}
          </button>
          {error && <p className="error-message">{error}</p>}
          <p>{message}</p>

          {/* إضافة زر لتغيير اللغة */}
          <div className="language-toggle">
        
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
