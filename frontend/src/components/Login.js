import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = ({ setAuth }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });



    // Login.js (or Register.js)
const onSubmit = async e => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:5000/api/users/auth', formData);
        localStorage.setItem('token', res.data.token);
        setAuth(true);
        navigate('/profile');
    } catch (err) {
        setMessage('Login failed');
    }
};


    return (
        <div className="login-container">
            <h1>Login</h1>
            {message && <p className="error-message">{message}</p>}
            <form onSubmit={onSubmit} className="login-form">
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={onChange} placeholder="Enter your email" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={onChange} placeholder="Enter your password" required />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
