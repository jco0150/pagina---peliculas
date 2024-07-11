import React from 'react';
import './Header.css';
import menuIcon from '../assets/imagenes/menu.png';
import venomImage from '../assets/imagenes/venom.png';
import playIcon from '../assets/imagenes/play.png';

const Header = () => (
  <header className="header">
    <div className="menu container">
      <a href="#" className="logo">AluraFlix</a>
      <input type="checkbox" id="menu" />
      <label htmlFor="menu">
        <img src={menuIcon} className="menu-icono" alt="menu" />
      </label>
      <nav className="navbar">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Películas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <a href="#" className="btn-1">Login</a>
    </div>

    <div className="header-content container">
      <div className="header-1">
        <img src={venomImage} alt="Venom" />
        <a href="#" className="btn-2">Ver ahora</a>
      </div>
      <div className="header-2">
        <h1>Las mejores <br /> Películas</h1>
        <img src={playIcon} alt="Play" />
      </div>
    </div>
  </header>
);

export default Header;

