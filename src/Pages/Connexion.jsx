import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Connexion.css'; // Importer le fichier CSS

export default class Connexion extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Envoi du formulaire à l'API pour connecter l'utilisateur
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => {
            // Réinitialisation du formulaire après soumission si nécessaire
            this.setState({
                email: '',
                password: ''
            });
            // Gérer la réponse de l'API ici, par exemple, rediriger l'utilisateur vers la page de profil si la connexion est réussie
            console.log(data); // Vous pouvez traiter la réponse de l'API ici
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    };

    render() {
        return (
            <div className="container">
                <div className="title-container">
                    <h1>Connexion</h1>
                </div>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <button className="submit-button" type="submit">Submit</button>
                    </form>
                </div>
                <div className="link-container">
    <Link to="/Profil">
        <button className="profil-button">Aller au Profil</button>
    </Link>
</div>

            </div>
        );
    }
}
