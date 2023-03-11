import React from "react";
import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  // const [sticky, setSticky] = useState(false);

  // useEffect(() => {
  //   const fixedNavbar = () => {
  //     setSticky(window.scrollY > 20);
  //   };

  //   window.addEventListener("scroll", fixedNavbar);
  //   return () => window.removeEventListener("scroll", fixedNavbar);
  // });
  // className={`${sticky ? "sticky" : ""}`}

  useEffect(() => {
    async function scrollHead() {
      let navbar = document.querySelector(".sticky");
      let scroll = window.scrollY;
      if (scroll < 90) {
        navbar.classList.remove("sticky-bg");
      } else {
        navbar.classList.add("sticky-bg");
      }
    }

    window.addEventListener("scroll", scrollHead);

    return () => window.addEventListener("scroll", scrollHead);
  }, []);

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const showSidebar = () => showSidebar(!toggleMenu);

  return (
    <div className="sticky" id="header">
      <header className="header container">
        <nav>
          <NavLink to="/">
            <img className="logo-img lazy-img" data-src="/images/logo.png" />
          </NavLink>
          <ul className="navbar flex">
            <NavLink to="/aboutUs">
              <li className="nav">О нас</li>
            </NavLink>
            <NavLink to="/services">
              <li className="nav">Услуги</li>
            </NavLink>
            <NavLink to="/ourWorks">
              <li className="nav">Наши работы</li>
            </NavLink>
            <NavLink to="/blog">
              <li className="nav">Блог</li>
            </NavLink>
            <NavLink to="/connectWith">
              <li className="nav">Контакты</li>
            </NavLink>
            <li className="nav num">+996 999 099 001</li>
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

          <div className="navbar-menu">
            <button className="menu-btn" onClick={() => setToggleMenu(true)}>
              <FaBars />
            </button>

            {showSidebar && (
              <div
                className={
                  toggleMenu
                    ? "navbar-menu-container atv"
                    : "navbar-menu-container"
                }
              >
                <button
                  className="menu-btn close-btn"
                  onClick={() => setToggleMenu(false)}
                >
                  <FaTimes />
                </button>
                <ul className="navbar flex">
                  <NavLink to="/aboutUs">
                    <li className="nav">О нас</li>
                  </NavLink>
                  <NavLink to="/services">
                    <li className="nav">Услуги</li>
                  </NavLink>
                  <NavLink to="/ourWorks">
                    <li className="nav">Наши работы</li>
                  </NavLink>
                  <NavLink to="/blog">
                    <li className="nav">Блог</li>
                  </NavLink>
                  <NavLink to="/connectWith">
                    <li className="nav">Контакты</li>
                  </NavLink>
                  <li className="nav num">+996 999 099 001</li>
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
              </div>
            )}
          </div>

          <div
            className={`sidebar-overlay ${
              toggleMenu == true ? "active-sidebar" : ""
            }`}
            onClick={() => setToggleMenu(false)}
          ></div>
        </nav>
      </header>

      <div className="scrollbar" id="scrolling">
        <div className="force-overflow"></div>
      </div>

      <div className="fixed-social-media">
        <a href="https://wa.me/996999099001?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0">
          <li className="social-media whatsApp">
            <FaWhatsapp />
          </li>
        </a>
      </div>
    </div>
  );
};

export default Header;
