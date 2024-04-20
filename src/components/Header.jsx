import React from 'react';
import '../styles/globals.css'; // Make sure this path correctly points to your CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src="/imgs/netfluence_logo.svg" alt="Netfluence Logo" />
      </div>
      <ul className="nav">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </header>
  );
};

export default Header;
