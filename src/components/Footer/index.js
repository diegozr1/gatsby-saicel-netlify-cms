import React from "react";
import { Link } from 'gatsby'

import {
    CellIcon,
    FAQIcon,
    LabIcon,
    LogoWhite,
    PatIcon,
    PressIcon,
} from "../../img";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="footer--container">
            <div className="footer--top">
                <nav className="footer--nav">
                    <div className="footer--left">
                        <img src={LogoWhite} className="footer--logo" alt="saicel-logo"/>
                    </div>
                    <div className="footer--right">
                        <ul className="footer--links nav">
                            <li className="footer--link"><Link to="/cells"> Células Madre </Link></li>
                            <li className="footer--link"><Link to="/our-lab"> Nuestros laboratorios </Link></li>
                            <li className="footer--link"><Link to="/press"> Press </Link></li>
                            <li className="footer--link"><Link to="/faq"> FAQ </Link></li>
                        </ul>
                        <ul className="footer--links social">
                            <li className="footer--social-link"><a href="facebook.com">Facebook</a></li>
                            <li className="footer--social-link"><a href="twitter.com">Twitter</a></li>
                        </ul>
                    </div>
                </nav>
                <nav className="footer--mobile-nav">
                    <ul className="footer--links mobile">
                        <li className="footer--link">
                            <Link to="/cells"><img src={CellIcon} alt="cell-icon"/></Link>
                        </li>
                        <li className="footer--link"><Link to="/our-lab">
                            <img src={LabIcon} alt={"lab-icon"}/></Link>
                        </li>
                        <li className="footer--link"><Link to="/press">
                            <img src={PressIcon} alt={"press-icon"}/></Link>
                        </li>
                        <li className="footer--link"><Link to="/patologia">
                            <img src={PatIcon} alt={"pat-icon"}/></Link>
                        </li>
                        <li className="footer--link"><Link to="/faq">
                            <img src={FAQIcon} alt={"faq-icon"}/></Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer--bottom">
                <div>
                    <span className="footer--legal"> © 2019 Sáicel. Todos los derechos reservados. </span>
                    <Link className="footer--privacy" to="/legal"> Políticas de privacidad </Link>
                </div>
                <div className="footer--social">
                    <ul className="footer--links">
                        <li className="footer--social-link"><a href="facebook.com">Facebook</a></li>
                        <li className="footer--social-link"><a href="twitter.com">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
