import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';

import styles from './Footer.module.css';

const Footer = () => {

    return (
    <div className={styles.backgroundContent}>
        <footer>
            <div className={styles.footerContent}>
                <p className={styles.footerCredit}>Designed and developed by Ellen Halvardsson.</p>
                <p className={styles.footerCopyright}>Copyright <FontAwesomeIcon icon={faCopyright}/> 2025 Ellen Halvardsson</p>
                <p className={styles.links}>
                    <a href="https://www.linkedin.com/in/ellen-halv/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="https://github.com/EllenHalv" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.youtube.com/@TheOnlyExceptionYT" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube}/></a>
                </p>
            </div>
        </footer>
    </div>
    );
};

export default Footer;