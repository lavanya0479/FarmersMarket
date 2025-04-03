import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FarmerReg.css"; // Using the same CSS as ConsumerReg

const FarmerReg = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        address: "",
        aadharNo: "",
        photo: null
    });

    const [error, setError] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [showOtpField, setShowOtpField] = useState(false); // OTP state
    const [otp, setOtp] = useState("");
    const [isOtpValid, setIsOtpValid] = useState(false);
    const correctOtp = "123456"; // Dummy OTP for validation

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const allowedFormats = ["image/png", "image/jpeg"]; // Allowed file types
            if (!allowedFormats.includes(file.type)) {
                alert("Only PNG and JPG formats are allowed.");
                e.target.value = ""; // Reset file input
                return;
            }

            setFormData({ ...formData, photo: file });

            const reader = new FileReader();
            reader.onload = () => setPhotoPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        setError("");
        console.log("Farmer Registration Data:", formData);

        // Show OTP field instead of success message
        setShowOtpField(true);
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
            <h1>Farmer Registration</h1>
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

                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
                    <br />

                    <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} placeholder="Aadhar No" required />
                    <br />

                    <input type="file" accept="image/png, image/jpeg" onChange={handlePhotoChange} required />
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
                    <Link to="/farmer-login" className="login-button">Login here</Link>
                </div>
            )}
        </div>
    );
};

export default FarmerReg;
