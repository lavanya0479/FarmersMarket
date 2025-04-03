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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, photo: file });
        if (file) {
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
        console.log("Farmer Registered:", formData);
        setIsRegistered(true);
    };

    return (
        <div className="register-container">
            <h1>Farmer Registration</h1>
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

                <input type="file" accept="image/*" onChange={handlePhotoChange} required />
                {/* {photoPreview && <img src={photoPreview} alt="Preview" className="photo-preview" />} */}
                <br />
                
                {error && <p className="error-message">{error}</p>}
                
                <button type="submit">Register</button>
            </form>
            
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
