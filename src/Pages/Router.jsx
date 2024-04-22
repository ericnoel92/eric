import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Assurez-vous d'importer le composant correctement
import Inscription from './Inscription';
import Connexion from './Connexion';
import Infos from './Infos';
function AppRouter() {
    return (
        <Router>
            <Routes>
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="/Infos" element={<Infos />} />
                <Route path="/Inscription" element={<Inscription />} />
                <Route path="/HomePage" element={<HomePage />} /> {/* Utilisez le nom du composant importé */}
            </Routes>
        </Router>
    );
}

export default AppRouter;


