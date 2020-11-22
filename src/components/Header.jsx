import React from 'react';
import Switch from './Switch';
import '../assets/styles/components/Header.css';

const Header = () => {
  return (
    <header className="header">
        <div className="wrapper">
          <h1 className="title_h1">Our Pricing</h1>
          <Switch />
        </div>
      </header>
  );
};

export default Header;