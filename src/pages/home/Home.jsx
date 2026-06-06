import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from "./Home.module.css";

const Home = () => (
    <section className={styles.container}>
        <div className={styles.content}>
            <div className={styles.fadeInText}>
                <h1 className={styles.title}>Hi there, I'm <span className={styles.highlight}> Ellen</span></h1>
            </div>
            <div className={styles.fadeInText}>
                <p className={styles.description}>I'm a developer with a passion for learning and creating. I have experience with a variety of technologies and languages. Explore my projects and learn more about my passions!</p>
            </div>
            <div className={styles.fadeInText}>
                <div className={styles.homeLinks}>
                    <a href="/projects">
                        Explore my projects <FontAwesomeIcon icon={faArrowRight}/>
                    </a>
                    <a href="/about">
                        Learn more <FontAwesomeIcon icon={faArrowRight}/>
                    </a>
                </div>
            </div>
            <section className={styles.connectSection}>
                <div className={styles.fadeInText}>
                    <h2>FIND ME ON</h2>
                    <p className={styles.connectDescription}>Feel free to <span className={styles.highlight}>connect with me</span></p>
                    <div className={styles.fadeInText}>
                    </div>
                    <div className={styles.fadeInText}>
                        <ol className={styles.socialLinks}>
                            <li>
                                <a href="https://www.linkedin.com/in/ellen-halv/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/EllenHalv" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@TheOnlyExceptionYT" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faYoutube}/>
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
        <div className={styles.fadeInImage}></div>
        <img
            className={styles.homeImg}
            src="../images/icon.png"
            alt="Image of me"
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
);

export default Home;