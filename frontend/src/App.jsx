import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components
import ConsumerLogin from "./pages/consumers/ConsumerLogin.jsx"; // Consumer login page
import ConsumerReg from "./pages/consumers/ConsumerReg.jsx"; // Consumer registration page
import FarmerLogin from "./pages/farmers/FarmerLogin.jsx";   // Farmer login page
import FarmerReg from "./pages/farmers/FarmerReg.jsx";   // Farmer registration page
import AdminLogin from "./pages/admin/AdminLogin.jsx";   // Admin login page
import Home from "./pages/Home.jsx"; // Home page


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define Routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/consumer-login" element={<ConsumerLogin />} />
        <Route path="/consumer-register" element={<ConsumerReg />} />
        <Route path="/farmer-login" element={<FarmerLogin />} />
        <Route path="/farmer-register" element={<FarmerReg />} />
        <Route path="/admin-login/:id" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;