import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faProjectDiagram, faKey, faDatabase, faMessage, faArrowRight, faInfinity, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import styles from './About.module.css';


const About = () => (
    <section className={styles.About}>
        <div className={styles.fadeInText}>
            <h2>Learn More <span className={styles.highlight}> About Me</span></h2>
            <br/>
            {/**/}
            <div className={styles.aboutContainer}>
                <div className={styles.textContainer}>
                    <p className={styles.description}>Hi, I'm Ellen Halvardsson, a software developer with a passion for cloud technologies and full-stack development.
                        I thrive on creativity and problem-solving, combining technical skills with innovative thinking to build solutions that improve everyday life.
                    </p>
                    <p className={styles.description}>Beyond coding, I enjoy crafting and exploring ways to express myself through design and technology. I enjoy knitting, crocheting, and digital design,
                        and I'm always seeking new inspiration and opportunities for growth.
                    </p>
                </div>
                <img className={styles.aboutImg} src="../images/about.png" alt="about img"/>
            </div>
            {/**/}

            {/*<img
                className={styles.aboutImg}
                src="../images/about.png"
                alt="about img"
            />
            <div>
                <p className={styles.description}>Hi, I'm Ellen Halvardsson, a software developer with a passion for cloud technologies and full-stack
                    development.
                    I thrive on creativity and problem-solving, combining technical skills with innovative thinking to build
                    solutions that improve everyday life.
                    Beyond coding, I enjoy crafting and exploring ways to express myself through design and technology. I
                    enjoy knitting, crocheting and digital design,
                    and I'm always seeking new inspiration and opportunities for growth.</p>
            </div>*/}
            <div>
                <p className={styles.resumeLinkText}>View my Resume <FontAwesomeIcon icon={faArrowRight}/>
                    {/*{' '}*/}
                    <button className={styles.ResumeLinkButton} onClick={() => window.open("/Ellen-Halvardsson-CV.pdf", "_blank")}>Click here</button>
                </p>
            </div>
        </div>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
);

export default About;