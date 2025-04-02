import React from "react";
import { Link,BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the FBA</h1>
      <div className="button-group">
        {/* Consumer Login Button */}
        <Link to="/consumer-login">
          <button className="role-button">Consumer </button>
        </Link>

        {/* Farmer Login Button */}
        <Link to="/farmer-login">
          <button className="role-button">Farmer </button>
        </Link>

        {/* Admin Login Button */}
        <Link to="/admin-login/">
        </Link>
      </div>
    </div>
  );
};

export default Home;