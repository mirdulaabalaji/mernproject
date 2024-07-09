import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const { name, email, password, phone, address } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/profile');
        } catch (err) {
            setMessage('Registration failed');
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            {message && <p className="error-message">{message}</p>}
            <form onSubmit={onSubmit} className="register-form">
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={onChange} placeholder="Enter your name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={onChange} placeholder="Enter your email" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={onChange} placeholder="Enter your password" required />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" value={phone} onChange={onChange} placeholder="Enter your phone number" />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={address} onChange={onChange} placeholder="Enter your address" />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
