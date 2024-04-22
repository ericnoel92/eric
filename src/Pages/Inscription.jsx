import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Inscription.css';

const Inscription = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoi du formulaire à l'API
        fetch('URL_de_votre_API', { // Remplacez 'URL_de_votre_API' par l'URL de votre API
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                // Réinitialisation du formulaire après soumission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                });
                alert('Inscription réussie !'); // Afficher un message de réussite
            } else {
                throw new Error('Erreur lors de la soumission du formulaire');
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert('Une erreur est survenue lors de l\'inscription.'); // Afficher un message d'erreur
        });
    };

    return (
        <div className="container">
            <div className="logo-container">
                <img src="Image/logo.png" alt="Logo" />
            </div>
            <div className="title-container">
                <h1>Inscription</h1>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
            <div className="link-container">
                <Link to="/HomePage">
                    <button>Go to HomePage</button>
                </Link>
            </div>
        </div>
    );
};

export default Inscription;
