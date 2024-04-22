import React, { Component } from 'react'
import './Profil.css';
import { Link } from 'react-router-dom';
import Datauser from '../Components/Affichage_des_données_des_personnes_connectée.jsx';

export default class Profil extends Component {
  render() {
    return (
      <div>
         <Link to="/HomePage">
        <button className="HomePage-button">HomePage</button>
    </Link>
      </div>
    )
  }
}
