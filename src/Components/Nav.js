import "./Nav.css";
import logo from "../images/logo.png"
import { useState } from "react";
import { Link } from 'react-router-dom';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleListItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navcontainer">
            <div >
                <Link to="/"><img className="navimg" src={logo} alt="Logo" onClick={handleListItemClick} /></Link>
                <nav>
                    <button id="menu-button"
                        className={`hamburger ${menuOpen ? "active" : ""}`}
                        onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                    </button>
                    <ul id="navul" className={menuOpen ? 'active1' : ''}>
                        <Link to="/portfolio">
                            <li onClick={handleListItemClick}> PORTFOLIO</li>
                        </Link>
                        <Link to="/skills"><li onClick={handleListItemClick}>SKILLS</li></Link>
                        <a href="https://drive.google.com/file/d/1xQ7Pt8OFnoEvjiOYX6TkNalhVdgwJ95u/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer">
                            <li onClick={handleListItemClick}>RESUME</li></a>
                        <Link to="/about"><li onClick={handleListItemClick}>ABOUT</li></Link>
                        <a href="#contact">
                            <li onClick={handleListItemClick}>CONTACT</li>
                        </a>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Nav;