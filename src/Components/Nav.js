import "./Nav.css";
import logo from "../images/logo.png"
import { useState } from "react";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

    };

    return (
        <header className="navcontainer">
            <div >
                <img className="navimg" src={logo} alt="Logo" />
                <nav>
                    <button id="menu-button" className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}><span></span>
                        <span></span></button>
                    <ul id="navul" className={menuOpen ? 'active1' : ''}>
                        <li>PORTFOLIO</li>
                        <li>SKILLS</li>
                        <li>RESUME</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Nav;