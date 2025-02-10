import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './../../App.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        if (nav) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [nav]);

    const closeNav = () => {
        setNav(false);
    };

    return (
        <header className="main-header">
            <nav className="navbar navbar-dark bg-darkgrey">
                {/* Home Link */}
                <Link className="navbar-brand" to="/">Home</Link>

                {/* Toggler Button */}
                <button
                    onClick={toggleNav}
                    className="navbar-toggler"
                    type="button"
                >
                    <FontAwesomeIcon icon={nav ? faXmark : faBars} />
                </button>

                {/* Sliding Menu */}
                <div className={nav ? "navbar-nav active" : "navbar-nav"}>
                    <ul>
                            {/* only display if the navbar-nav is active */}
                        {nav && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={closeNav}>
                                    Home
                                </Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects" onClick={closeNav}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeNav}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/game" onClick={closeNav}>
                                Play a Game!
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
