/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// IMPORTING REACT FONTAWESOME 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ADD REACT FONTAWESOME ICON 
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container">
				<a className="navbar-brand logo"  href="#">TO-Portfolio</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<FontAwesomeIcon icon={faBars} />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#services">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#experience">Experience</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">Contacts</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#portfolio">Portfolio</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;