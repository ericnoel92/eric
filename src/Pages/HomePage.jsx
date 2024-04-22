import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Importation du composant Link
import './HomePage.css'; // Importation des styles CSS
import Inscription from './Inscription'; // Importation du composant Inscription

export default class HomePage extends Component {
  render() {
    return (
      <div className="header">
        <h1>Site de Krav Maga</h1>
        <div className="button-container">
          <Link to="/Inscription">
            <button className="inscription-button">Inscription</button>
          </Link>
          <Link to="/Connexion">
            <button className="connexion-button">Connexion</button>
          </Link>
          <div>
          <Link to="/Infos">
            <button className="Infos-button">Infos</button>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}
