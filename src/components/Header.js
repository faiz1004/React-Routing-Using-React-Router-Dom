import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" exact activeClassName="active-link" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active-link" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="active-link" className="nav-link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
