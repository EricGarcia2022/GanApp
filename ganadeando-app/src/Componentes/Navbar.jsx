// src/Componentes/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h6>Ganadeando App</h6>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/animal-management">Gestión de Ganado</Link></li>
        <li><Link to="/production-control">Control de Producción</Link></li>
        <li><Link to="/medical-history">Historial Médico</Link></li>
        <li><Link to="/Reports">Informes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
