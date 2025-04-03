import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ConsumerReg.css"; // Import CSS for styling

const ConsumerReg = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    });

    const [error, setError] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    const [showOtpField, setShowOtpField] = useState(false);
    const [otp, setOtp] = useState("");
    const [isOtpValid, setIsOtpValid] = useState(false);
    const correctOtp = "123456"; // Dummy OTP for validation

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        setError("");
        console.log("Customer Registration Data:", formData);
        setShowOtpField(true); // Show OTP input after registration
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (otp === correctOtp) {
            setIsOtpValid(true);
            setIsRegistered(true);
            setShowOtpField(false); // Hide OTP field after validation
        } else {
            alert("Invalid OTP! Please try again.");
        }
    };

    return (
        <div className="register-container">
            <h1>Customer Registration</h1>

            {!showOtpField && !isRegistered && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
                    <br />

                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                    <br />

                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                    <br />

                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
                    <br />

                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone no" required />
                    <br />

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit">Register</button>
                </form>
            )}

            {/* OTP Input Section */}
            {showOtpField && (
                <form onSubmit={handleOtpSubmit}>
                    <h3>OTP is sent to your email ({formData.email}). Enter it below:</h3>
                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required />
                    <br />
                    <button type="submit">Verify OTP</button>
                </form>
            )}

            {/* Success Message and Login Button */}
            {isRegistered && (
                <div>
                    <p>Registration successful! Click below to login.</p>
                    <Link to="/consumer-login" className="login-button">Login here</Link>
                </div>
            )}
        </div>
    );
};

export default ConsumerReg;
