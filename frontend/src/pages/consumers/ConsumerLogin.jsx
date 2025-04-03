import React from "react";
import { Link } from "react-router-dom";
import "./ConsumerLogin.css"; // Assuming you have a CSS file for styling

const Consumerlogin = () => {
  return (
    <div className="app-container">
      <div className="login-page">
        <h1>Consumer Login</h1>
        <form className="login-form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <Link to="/" className="back-link">
          Back to Home
        </Link>
        <p className="register-link">
          New user? <Link to="/consumer-register"className="reg-button">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Consumerlogin;