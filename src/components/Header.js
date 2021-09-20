import React, { useState } from "react";
import logoY from "../images/logo-y.svg";
import logoPracticum from "../images/logo-practicum.png";
import { HashLink as Link } from "react-router-hash-link";
import { MdClose } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";

function Header({ onCtaClick, page }) {
  const [navBarOpen, setnavBarOpen] = useState(false);

  function handleToggle() {
    setnavBarOpen(!navBarOpen)
  }
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
        {/* <button className="button__hamburger" onClick={handleToggle}></button> */}
        <button onClick={handleToggle} className="menu__hamburger">
          <HiMenuAlt4 data-aos="fade-in" data-aos-duration="1500" style={{ color: "#000", width: "40px", height: "40px", }} />
        </button>

        {navBarOpen && <div className="mobile-wrapper mobile-content_opened" data-aos="fade-down" data-aos-duration="300" data-aos-easing="ease">
          <button onClick={handleToggle} className="menu__hamburger menu__hamburger-close">
            <MdClose data-aos="fade-in" data-aos-duration="1500" style={{ color: "#000", width: "40px", height: "40px", background: "none" }} />
          </button>
          {navBarOpen && <nav>
            {page !== "professional" && <ul className="header__menu">
              <Link className="header__menu-item header__menu-link " smooth="true" to="#whatrequest">We can help!</Link>
              <Link className="header__menu-item header__menu-link " smooth="true" to="#about">About</Link>
              <Link className="header__menu-item header__menu-link " smooth="true" to="#howtostart">How to start</Link>
              <Link className="header__menu-item header__menu-link " smooth="true" to="#projects">Projects</Link>
              <Link className="header__menu-item header__menu-link " smooth="true" to="#contacts">Contacts</Link>
            </ul>
            }
            {page === "professional" && <nav>
              <Link className="header__menu-item header__menu-link " smooth="true" to="/home">Back to homepage</Link>
              <Link className="header__menu-item header__menu-link " smooth="true" to="#projects">Students’ projects</Link>
            </nav>
            }
          </nav>}
          <button className="button nav__cta" onClick={onCtaClick}>Delegate a task</button>
        </div>}
        <button className="button nav__cta" onClick={onCtaClick}>Delegate a task</button>
      </div>
    </header>
  );
}

export default Header;
