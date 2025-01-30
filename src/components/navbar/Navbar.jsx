// import React from 'react';
import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faProjectDiagram, faKey, faDatabase, faMessage, faArrowRight, faInfinity, faNetworkWired, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './../../App.css';
// import './Navbar.module.css'; // Import custom CSS for styling

/*const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <header className="main-header">
            <nav className="navbar navbar-expand-md navbar-dark bg-darkgrey">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button onClick={() => setNav(!nav)}
                            className="navbar-toggler"
                            type="button"
                    >
                        {nav ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faXmark}/>}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className={nav ? [styles.navbarNav, styles.active].join(' ') : [styles.navbarNav]}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};*/

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
                {/*<div className="container-fluid">*/}
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
                            {/*<li className="nav-item">*/}
                            {/*    <Link className="nav-link" to="/contact" onClick={closeNav}>*/}
                            {/*        Contact*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <Link className="nav-link" to="/game" onClick={closeNav}>
                                    Play a Game!
                                </Link>
                            </li>
                        </ul>
                    </div>
                {/*</div>*/}
            </nav>
        </header>
    );
};

export default Navbar;
