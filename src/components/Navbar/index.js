import React, {  useEffect, useState } from "react";

import NavItem from "../NavItem";

import {
    CellIcon,
    CloseIcon,
    FAQIcon,
    LabIcon,
    MenuIcon,
    PatIcon,
    PressIcon,
} from "../../img";

import "./Navbar.css";

const Navbar = () => {
    const currentLocation = window.location.pathname;
    const normalNav = currentLocation === "/";
    const [toggle, setToggle] = useState(false);
    const [isTop, setIsTop] = useState(true);
    useEffect(() => {
        const onScroll = () => {
            const newIsTop = window.scrollY < 50;
            if (newIsTop !== isTop) {
                setIsTop(newIsTop);
            }
        };
        document.addEventListener("scroll", onScroll);
        return () => document.removeEventListener("scroll", onScroll);
    });
    const handleToggle = () => setToggle(!toggle);
    return (
        <header className={`nav--container ${isTop ? "" : "scrolled"}`}>
            <div className="nav--main">
                <div className="nav--left">
                    <img className={`nav--logo ${normalNav ? "" : "white-logo"}`} alt="saicel-logo"/>
                </div>
                <div className="nav--right">
                    <button className="nav--toggle" onClick={handleToggle}>
                        <img src={MenuIcon} alt="menu-icon"/>
                    </button>
                </div>
            </div>
            <aside className={`side-nav--container ${toggle && "active"}`}>
                <nav className="side-nav--main">
                    <button className="side-nav--toggle" onClick={handleToggle}>
                        <img src={CloseIcon} alt="menu-icon"/>
                    </button>
                    <ul className="side-nav--menu">
                        <li className="side-nav--menu-item">
                            <NavItem text="Celulas Madre" link="/cells" icon={CellIcon} alt="cell-icon" />
                        </li>
                        <li className="side-nav--menu-item">
                            <NavItem text="Nuestros Laboratorios" link="/our-lab" icon={LabIcon} alt="lab-icon" />
                        </li>
                        <li className="side-nav--menu-item">
                            <NavItem text="Patologia" link="/patologia" icon={PatIcon} alt="pat-icon" />
                        </li>
                        <li className="side-nav--menu-item">
                            <NavItem text="FAQ" link="/faq" icon={FAQIcon} alt="faq-icon" />
                        </li>
                        <li className="side-nav--menu-item">
                            <NavItem text="Press" link="/press" icon={PressIcon} alt="press-icon" />
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className={`overlay ${toggle && "active"}`} />
        </header>
    );
};

export default Navbar;
