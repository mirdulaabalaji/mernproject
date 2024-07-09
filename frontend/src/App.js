import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import PetProducts from './components/PetProducts';
import AdoptPet from './components/AdoptPet';
import Profile from './components/Profile';
import './App.css'; // Import the CSS file

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/pet-products" className="navbar-link">Pet Products</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/adopt-pet" className="navbar-link">Adopt a Pet</Link>
                        </li>
                        {!isAuthenticated ? (
                            <>
                                <li className="navbar-item">
                                    <Link to="/register" className="navbar-link">Register</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/login" className="navbar-link">Login</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="navbar-item">
                                    <Link to="/profile" className="navbar-link">Profile</Link>
                                </li>
                                <li className="navbar-item">
                                    <button className="navbar-link logout-button" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login setAuth={setIsAuthenticated} />} />
                    <Route exact path="/pet-products" element={<PetProducts />} />
                    <Route exact path="/adopt-pet" element={<AdoptPet />} />
                    <Route exact path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
                </Routes>
                <footer className="footer">
                    <p>© 2024 PetAdoptCare. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
