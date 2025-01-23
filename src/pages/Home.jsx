import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faJava, faReact, faBootstrap, faMicrosoft, faPython, faDocker, faLinux, faHtml5, faCss, faAws, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faProjectDiagram, faKey, faDatabase, faMessage, faArrowRight, faInfinity, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import styles from "./Home.module.css";

const Home = () => (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ellen</h1>
            <p className={styles.description}>I'm a developer with a passion for learning and creating. I have experience with a variety of technologies and languages. Explore my projects and learn more about my passions!</p>

            <div className="background-content">
                <div className="links">
                    <a href="https://github.com/EllenHalv" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/ellen-halv/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="https://www.youtube.com/@TheOnlyExceptionYT" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube}/></a>
                </div>
            </div>

            <div className={"home-links"}>
                <a href="/projects">
                    Explore my projects <FontAwesomeIcon icon={faArrowRight}/>
                </a>
                <a href="/about">
                    Learn more <FontAwesomeIcon icon={faArrowRight}/>
                </a>
            </div>
        </div>
        <img
            className={styles.homeImg}
            src="../images/icon.svg"
            alt="Image of me"
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
);

export default Home;