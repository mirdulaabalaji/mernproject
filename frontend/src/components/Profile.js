import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [purchasedProducts, setPurchasedProducts] = useState([]);
    const [adoptedPets, setAdoptedPets] = useState([]);
    const [message, setMessage] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const config = {
                    headers: {
                        'x-auth-token': token,
                    },
                };
                try {
                    const userRes = await axios.get('http://localhost:5000/api/users/me', config);
                    setUser(userRes.data);
                    setPurchasedProducts(userRes.data.purchasedProducts);
                    setAdoptedPets(userRes.data.adoptedPets);
                } catch (err) {
                    setMessage('Error fetching user data');
                }
            }
        };

        fetchUserData();
    }, []);

    const handleEdit = () => {
        setEditMode(true);
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address
        });
    };

    const handleSave = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const config = {
                headers: {
                    'x-auth-token': token,
                },
            };
            try {
                const res = await axios.put('http://localhost:5000/api/users/me', formData, config);
                setUser(res.data);
                setEditMode(false);
                setMessage('Profile updated successfully');
            } catch (err) {
                setMessage('Error updating profile');
            }
        }
    };

    const handleDelete = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const config = {
                headers: {
                    'x-auth-token': token,
                },
            };
            try {
                await axios.delete('http://localhost:5000/api/users/me', config);
                localStorage.removeItem('token');
                window.location.href = '/register';
            } catch (err) {
                setMessage('Error deleting account');
            }
        }
    };

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
            <h1>Profile</h1>
            {message && <p className="error-message">{message}</p>}
            <div className="user-info">
                {editMode ? (
                    <>
                        <label>
                            Name:
                            <input type="text" name="name" value={formData.name} onChange={onChange} />
                        </label><br></br>
                        <label>
                            Email:
                            <input type="email" name="email" value={formData.email} onChange={onChange} />
                        </label><br></br>
                        <label>
                            Phone:
                            <input type="text" name="phone" value={formData.phone} onChange={onChange} />
                        </label><br></br>
                        <label>
                            Address:
                            <input type="text" name="address" value={formData.address} onChange={onChange} />
                        </label><br></br><br></br>
                        <button onClick={handleSave}>Save</button>
                    </>
                ) : (
                    <>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Address:</strong> {user.address}</p>
                        <button onClick={handleEdit}>Edit my details</button><br></br> <br></br>
                        <button onClick={handleDelete}>Delete my Account</button>
                    </>
                )}
            </div>
            <h2>Purchased Products</h2>
            <ul className="items-list">
                {purchasedProducts.map(product => (
                    <li key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <img src={product.imageUrl} alt={product.name} />
                    </li>
                ))}
            </ul>
            <h2>Adopted Pets</h2>
            <ul className="items-list">
                {adoptedPets.map(pet => (
                    <li key={pet._id}>
                        <h3>{pet.name}</h3>
                        <p>{pet.breed}</p>
                        <p>{pet.age}</p>
                        <p>{pet.description}</p>
                        <img src={pet.imageUrl} alt={pet.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
