import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
  <div>
    <div>
      <img src="../public/assets/drbodinilogo.png" />
    </div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Lavori</a></li>
        <button class="cta-button">Contatti</button>
      </ul>
    </nav>
  </div>
  );
}

export default Navbar;
