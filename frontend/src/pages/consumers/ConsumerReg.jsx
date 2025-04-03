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
        console.log("Customer Registered:", formData);
        setIsRegistered(true);
    };

    return (
        <div className="register-container">
            <h1>Customer Registration</h1>
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
