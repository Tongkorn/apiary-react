import React, { useState } from "react";
import logoY from "../images/logo-y.svg";
import logoPracticum from "../images/logo-practicum.png";
import { HashLink as Link } from "react-router-hash-link";

function Header({ onCtaClick, page }) {
  console.log(page);
  const [open, setOpen] = useState(false);
  return (
    <header className="header" id="nav">
      <div className="header__content-wrapper">
        <div className="logo">
          <Link to="/home"><img src={logoY} alt="Yandex logo" className="logo__yandex" />
            <img
              src={logoPracticum}
              alt="Practicum logo"
              className="logo__practicum"
            />
          </Link>
        </div>
        <button className="button__hamburger" onClick={() => setOpen(!open)}></button>
        <nav>
          {page !== "profession" && <ul className="header__menu">
            <Link className="header__menu-item header__menu-link " smooth="true" to="#whatrequest">We can help!</Link>
            <Link className="header__menu-item header__menu-link " smooth="true" to="#about">About</Link>
            <Link className="header__menu-item header__menu-link " smooth="true" to="#howtostart">How to start</Link>
            <Link className="header__menu-item header__menu-link " smooth="true" to="#projects">Projects</Link>
            <Link className="header__menu-item header__menu-link " smooth="true" to="#contacts">Contacts</Link>
          </ul>
          }
          {page === "profession" && <nav>
            <Link className="header__menu-item header__menu-link " smooth="true" to="/home">Back to homepage</Link>
            <Link className="header__menu-item header__menu-link " smooth="true" to="#projects">Students’ projects</Link>
          </nav>
          }
        </nav>
        <button className="button" onClick={onCtaClick}>Delegate a task</button>
      </div>
    </header>
  );
}

export default Header;
