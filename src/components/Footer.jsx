import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex container hidden">
      <NavLink to="/">
        <img
          className="logo-img lazy-img"
          data-src="/images/logo.png"
          alt="logo"
        />
      </NavLink>

      <ul className="footer-navbar">
        <NavLink to="/aboutUs">
          <li className="footer-nav">О нас</li>
        </NavLink>
        <NavLink to="/services">
          <li className="footer-nav">Услуги</li>
        </NavLink>
        <NavLink to="/ourWorks">
          <li className="footer-nav">Наши работы</li>
        </NavLink>
        <NavLink to="/blog">
          <li className="footer-nav">Блог</li>
        </NavLink>
        <NavLink to="/connectWith">
          <li className="footer-nav">Контакты</li>
        </NavLink>
      </ul>
      <ul className="social-medias flex">
        <a href="https://www.instagram.com/upwards.digital/">
          <li className="social-media instagram">
            <FaInstagram />
          </li>
        </a>
        <li className="social-media telegram">
          <FaTelegramPlane />
        </li>
        <a href="https://wa.me/996999099001?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0">
          <li className="social-media whatsApp">
            <FaWhatsapp />
          </li>
        </a>
      </ul>

      <div className="contacts">
        <h1 className="mb-15">Контакты</h1>
        <div className="info">
          <div className="mb-15">
            <span>Телефоны:</span>
            <p>+996 999 099 001</p>
          </div>
          <div>
            <span>Адрес:</span>
            <p>г.Бишкек</p>
            <p>Токтаналиева 103,5этаж</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
