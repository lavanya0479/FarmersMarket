import React from "react";
import { useParams } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const { adminId } = useParams(); // Extract the dynamic adminId from the URL

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      {adminId && <p className="admin-id">Admin ID: {adminId}</p>}
      <form className="login-form">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="login-button">LOGIN</button>
      </form>
      <p className="new-user">New User? Contact the system administrator.</p>
    </div>
  );
};

export default AdminLogin;