// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa tu archivo CSS

function Header() {
  return (
    <header className="header-container">
      <h1>HOLA MUNDO</h1>
      <nav>
        <ul>
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/registro" className="nav-link">Registro</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
