import React from 'react';
import './Navbar.css';
import logo from '../../assets/drbodinilogo.png';

const Navbar = () => {
	return (
		<div class="navbar">
			<div>
				<img src={logo} alt="logo" />
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Lavori</a>
					</li>
					<button class="cta-button">Contatti</button>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
