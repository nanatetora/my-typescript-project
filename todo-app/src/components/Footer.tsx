import React from 'react';
import Style from '../style/Style.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={Style.footer}>
      <p className={Style.footer_font}>© 2025 STYLE. All rights reserved.</p>
      <div className={Style.footer_links}>
        <a href="/terms">利用規約</a>
        <a href="/privacy">プライバシー</a>
        <a href="/contact">お問い合わせ</a>
      </div>
    </footer>
  );
};

export default Footer;
