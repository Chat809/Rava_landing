import React from 'react';
import logo from '../IMGS/logo_rava.png';

const Header: React.FC = () => {
  return (
    <header>
      <div className="box-header">
        <div className="box-logo">
          <img className="logo-rava" src={logo} alt="Logotipo da empresa" />
        </div>
        <a href="#" className="links-nav poppins">Home</a>
        <a href="#" className="links-nav poppins">About</a>
        <a href="#" className="links-nav poppins">Portifolio</a>
        <a href="#" className="links-nav poppins">Services</a>
        <a href="#" className="links-nav poppins">Team</a>
        <a href="#" className="links-nav poppins">Contact</a>
      </div>
    </header>
  );
};

export default Header;