import React from "react";
import { Link } from "react-router-dom";
import "./FarmerLogin.css";

const FarmerLogin = () => {
  return (
    <div className="login-page">
      <h2>Farmer Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <Link to="/" className="back-link">Back to Home</Link>
      <p className="register-link">
        New user? <Link to="/farmer-register">Register here</Link>
      </p>
    </div>
  );
};

export default FarmerLogin;