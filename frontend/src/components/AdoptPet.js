import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the updated CSS

const AdoptPet = () => {
    const [pets, setPets] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/pets');
                setPets(res.data);
            } catch (err) {
                console.error('Error fetching pets:', err.response ? err.response.data : err.message);
            }
        };

        fetchPets();
    }, []);

    const handleAdopt = async (petId) => {
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
                const res = await axios.post(`http://localhost:5000/api/pets/${petId}/adopt`, {}, config);
                setMessage(res.data.msg);
                const updatedPets = pets.map(pet =>
                    pet._id === petId ? { ...pet, available: false } : pet
                );
                setPets(updatedPets);
            } catch (err) {
                console.error('Error adopting pet:', err.response ? err.response.data : err.message);
                setMessage('Error adopting pet');
            }
        }
    };

    return (
        <div className="container">
            <h1 className='gold-heading'>Pets Available for Adoption</h1>
            {message && <p>{message}</p>}
            <div className="grid">
                {pets.map(pet => (
                    <div className="grid-item" key={pet._id}>
                        <div className="card">
                            <img src={pet.imageUrl} alt={pet.name} />
                            <h3>{pet.name}</h3>
                            <p>{pet.breed}</p>
                            <p>{pet.age} years old</p>
                            <p>{pet.description}</p>
                            {pet.available ? (
                                <button onClick={() => handleAdopt(pet._id)}>Adopt</button>
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

export default AdoptPet;
