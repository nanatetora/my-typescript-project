import React from 'react';
import Style from './Style.module.css';

const Header: React.FC = () => {
  return (
    <header className={Style.header}>
      <div className={Style.logo}>
        <img src="/logo.png" alt="STYLE Logo" className={Style.logo_img} />
        <p className={Style.logo_text}>STYLE</p>
      </div>
      <nav className={Style.header_menu}>
        <ul className={Style.header_menu_ul}>
          <li className={Style.header_menu_li}><a href="/">Home</a></li>
          <li className={Style.header_menu_li}><a href="/about">About</a></li>
          <li className={Style.header_menu_li}><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
