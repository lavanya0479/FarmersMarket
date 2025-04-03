import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FarmerLogin.css"; // Assuming you have a CSS file for styling

const FarmerLogin = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const correctOtp = "123456"; // Dummy OTP for verification

  const handleForgotPassword = () => {
    if (!email) {
      alert("Please enter your email to receive an OTP.");
      return;
    }
    setOtp(correctOtp); // Simulate OTP being sent
    alert(`OTP sent to ${email}`); // Notify user
    setShowForgotPassword(true); // Hide the Forgot Password button
  };

  const handleOtpSubmit = () => {
    if (enteredOtp === correctOtp) {
      setIsOtpVerified(true);
      alert("OTP verified! You can now reset your password.");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password reset successful! You can now login with your new password.");
    setShowForgotPassword(false);
    setIsOtpVerified(false);
  };

  return (
    <div className="app-container">
      <div className="login-page">
        <h1>Farmer Login</h1>

        {!showForgotPassword && (
          <form className="login-form">
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        )}

        {/* Hide Forgot Password button after it's clicked */}
        {!showForgotPassword && (
          <p className="forgot-password">
            <button type="button" onClick={handleForgotPassword}>Forgot Password?</button>
          </p>
        )}

        {showForgotPassword && (
          <div className="forgot-password-section">
            <h3>Reset Password</h3>

            {!isOtpVerified ? (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={enteredOtp}
                  onChange={(e) => setEnteredOtp(e.target.value)}
                  required
                />
                <button onClick={handleOtpSubmit}>Verify OTP</button>
              </>
            ) : (
              <>
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button onClick={handleResetPassword}>Reset Password</button>
              </>
            )}
          </div>
        )}

        <Link to="/" className="back-link">Back to Home</Link>

        <p className="register-link">
          New user? <Link to="/farmer-register" className="reg-button">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default FarmerLogin;
