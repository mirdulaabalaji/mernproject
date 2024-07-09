import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the updated CSS


const PetProducts = () => {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/petproducts');
                setProducts(res.data);
            } catch (err) {
                console.error('Error fetching products:', err.response ? err.response.data : err.message);
            }
        };

        fetchProducts();
    }, []);

    const handleBuy = async (productId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            try {
                const config = {
                    headers: {
                        'x-auth-token': token,
                    },
                };
                const res = await axios.post(`http://localhost:5000/api/petproducts/${productId}/buy`, {}, config);
                setMessage(res.data.msg);
                const updatedProducts = products.map(product =>
                    product._id === productId ? { ...product, available: false } : product
                );
                setProducts(updatedProducts);
            } catch (err) {
                console.error('Error purchasing product:', err.response ? err.response.data : err.message);
                setMessage('Error purchasing product');
            }
        }
    };

    return (
        <div className="container">
            <h1 className='gold-heading'>Pet Products</h1>
            {message && <p>{message}</p>}
            <div className="grid">
                {products.map(product => (
                    <div className="grid-item" key={product._id}>
                        <div className="card">
                            <img src={product.imageUrl} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            {product.available ? (
                                <button onClick={() => handleBuy(product._id)}>Buy</button>
                            ) : (
                                <p>Unavailable</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PetProducts;
