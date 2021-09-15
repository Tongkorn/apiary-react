import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
    return (
        <footer className="footer" id="contacts">
            <div className="footer__wrapper">
                <ul className="footer__links-grid footer__links">
                    <li>
                        <Link to="/#about" className="footer__link footer__text-aboutus">About us</Link>
                    </li>
                    <li>
                        <a href="#nav" className="footer__link footer__text-totop">Back to top &#8593;</a>
                    </li>
                </ul>
                <div className="footer__links-grid">
                    <ul className="footer__links">
                        <li>
                            <a href="mailto:msgordienko@yandex-team.com" className="footer__link">msgordienko@yandex-team.com</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/school/practicum-by-yandex" target="_blank" rel="noopener noreferrer" className="footer__link">Linkedin</a>
                        </li>
                        <li>
                            <a href="tel:+1-510-646-62-5" className="footer__link">+1-510-646-62-5</a>
                        </li>
                    </ul>
                    <p className="footer__text footer__text-creator">
                        This website is developed by Practicum by Yandex’students
                    </p>
                    <p className="footer__text footer__text-copyright">&#169; 2020 Practicum by Yandex</p>
                    <div className="footer__creators" id="creators">
                        <p className="footer__creators-name">Made by Tongkorn Pawananan, Arnold Ndiwalana</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;