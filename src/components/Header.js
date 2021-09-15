import React, { useState } from "react";
import logoY from "../images/logo-y.svg";
import logoPracticum from "../images/logo-practicum.png";
import { Link } from "react-router-dom";

function Header({ onCtaClick }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header" id="nav">
      <div className="header__content-wrapper">
        <div className="logo">
          <Link to="/"><img src={logoY} alt="Yandex logo" className="logo__yandex" />
            <img
              src={logoPracticum}
              alt="Practicum logo"
              className="logo__practicum"
            />
          </Link>
        </div>
        <button
          className="button__hamburger"
          onClick={() => setOpen(!open)}
        ></button>
        <nav>
          <ul className="header__menu">
            <li className="header__menu-item"> <a href="#whatrequest" className="header__menu-link">We can help!</a></li>
            <li className="header__menu-item"> <a href="#about" className="header__menu-link">About</a></li>
            <li className="header__menu-item"> <a href="#howtostart" className="header__menu-link">How to start</a></li>
            <li className="header__menu-item"> <a href="#projects" className="header__menu-link">Projects</a></li>
            <li className="header__menu-item"> <a href="#contacts" className="header__menu-link">Contacts</a></li>
          </ul>
        </nav>
        <button className="button" onClick={onCtaClick}>Delegate a task</button>
      </div>
    </header>
  );
}

export default Header;
