import React from 'react';
import module from './Footer.module.scss';
import logo from '../../assets/drbodinilogo.png';

const Footer = () => {
	return (
		<footer className={module.footer}>
			<div className={module.upper}>
				<img src={logo} alt="logo" />
				<div className={module['footer-social']}>
					<p>Poliambulatorio Dentistico Stenis</p>
					<p>Dr. Bodini</p>
					<p>P.IVA 0123456789</p>
				</div>
			</div>
			<div className={module.lower}>
				<p>Copyright © 2023 Dental Clinic | Powered by Pescolla</p>
			</div>
		</footer>
	);
};

export default Footer;
