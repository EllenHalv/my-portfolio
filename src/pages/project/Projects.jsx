import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faProjectDiagram, faKey, faDatabase, faMessage, faArrowRight, faInfinity, faNetworkWired, faFeather, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faJava, faReact, faBootstrap, faMicrosoft, faPython, faDocker, faLinux, faHtml5, faCss, faAws, faGithub, faYoutube, faLinkedin, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import styles from "./Project.module.css";

const projects = [
    {
        name: 'Web Portfolio',
        description: 'My Web Portfolio is my latest project and you are looking right at it! I wanted to create a personal portfolio to showcase my skills and projects in a fun format. ' +
            'During the development of this website I have improved my skills in frontend technologies and in making responsive web applications. I have also created my very first game!',
        technologies: [
            { name: 'JavaScript', icon: faSquareJs },
            { name: 'React', icon: faReact },
            { name: 'HTML5', icon: faHtml5 },
            { name: 'CSS', icon: faCss },
            { name: 'AWS', icon: faAws },
        ],
        github: 'https://github.com/EllenHalv/my-portfolio',
        img: '../images/projects/web-portfolio.png'
    },
    {
        name: 'Infrastructure Scanner',
        description: 'The Infrastructure Scanner is a tool for scanning system infrastructure and generating reports. ' +
            'Using Java and Python, the application communicates with devices using SNMP to collect data that can be used to monitor its status and health.',
        idea: 'Developed during an internship for the purpose of being able to scan and monitor devices in the network.',
        usefulness: 'Helps organizations monitor devices efficiently. Through Grafana, users can easily view the status of their devices.',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'Python', icon: faPython },
            { name: 'Docker', icon: faDocker },
            { name: 'Azure DevOps', icon: faMicrosoft },
            { name: 'PostgreSQL', icon: faDatabase },
            { name: 'Linux', icon: faLinux },
            { name: 'SNMP', icon: faNetworkWired },
            { name: 'Grafana', icon: faChartSimple },
        ],
        img: '../images/projects/infrastructure-scanner.png'
    },
    {
        name: 'Borrow Buddy',
        description: 'Borrow Buddy is a web application developed using the ASP .NET MVC framework. ' +
            'It allows users to borrow and lend items within their community, encouraging a more sustainable way of utilizing our belongings. ',
        idea: 'Inspired by the idea of having a platform for sharing resources within communities and reducing waste and over-consumption.',
        usefulness: 'By allowing users to create listings, borrow items, and chat with other users, ' +
            'Borrow Buddy simplifies the process of borrowing instead of buying, ' +
            'reducing waste and encouraging a more sustainable lifestyle.',
        technologies: [
            { name: '.NET', icon: faMicrosoft },
            { name: 'Bootstrap', icon: faBootstrap },
            { name: 'SignalR', icon: faMessage },
            { name: 'HTML5', icon: faHtml5 },
            { name: 'CSS', icon: faCss },
            { name: 'MySQL', icon: faDatabase },
        ],
        demo: 'https://www.youtube.com/watch?v=l7inz-vErP8https://www.youtube.com/watch?v=l7inz-vErP8',
        img: '../images/projects/borrow-buddy.png'
    },
    {
        name: 'Budget Tracker',
        description: 'Budget Tracker is a full-stack application designed to help users manage their personal finances.\n' +
            'The application allows users to create budget goals, track their expenses, and provides a clear overview of their budget status.\n' +
            'Built with Java and React, as well as OAuth2 integration for secure login and streamline authentication.',
        idea: 'The project came to life during my time as a student. With a limited budget, I wanted to create a personal finance tool that could help me and my family set clear goals and stick to them.',
        usefulness: 'Helps users track their expenses and remaining budget. A place for keeping track of current spendings and all spendings in the past.',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'JavaScript', icon: faSquareJs },
            { name: 'React', icon: faReact },
            { name: 'OAuth2', icon: faKey },
            { name: 'HTML5', icon: faHtml5 },
            { name: 'CSS', icon: faCss },
            { name: 'MySQL', icon: faDatabase },
        ],
        github: 'https://github.com/EllenHalv/budget-tracker',
        img: '../images/projects/budget-tracker.png'
    },
    {
        name: 'Inventory Application',
        description: 'The Inventory Application is a web app built for keeping track of inventory. ' +
            'The app is hosted on AWS, showcasing CI/CD implementation for streamlined updates and reliable deployment.',
        idea: 'This project was inspired by the need for better personal inventory tracking of hobby materials. As a knitter and crocheter, I have a lot of yarn. If you know, you know...',
        usefulness: 'By having a central place for tracking inventory, ' +
            'users can easily see what they have in stock and have the ability to update the inventory when their stock changes.',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'JavaScript', icon: faSquareJs },
            { name: 'React', icon: faReact },
            { name: 'HTML5', icon: faHtml5 },
            { name: 'CSS', icon: faCss },
            { name: 'AWS', icon: faAws },
            { name: 'CI/CD', icon: faInfinity },
            { name: 'Amazon RDS', icon: faDatabase },
        ],
        github: 'https://github.com/EllenHalv/YarnCRUD-AWS-CICD',
        img: '../images/projects/inventory-app.png'
    },
    {
        name: 'ToDo App with Java Swing',
        description: 'The ToDo App is a Java-based application using MySQL for storage and Kafka for handling events. It has a UI built with Java Swing to allow users to manage tasks.',
        idea: 'I use ToDo lists every day. So I wanted to create my own application for managing tasks - using some techniques I was curious about!',
        usefulness: 'It is simple but useful! Allows users to add, check off and delete tasks!',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'Java Swing', icon: faJava },
            { name: 'MySQL', icon: faDatabase },
            { name: 'Kafka', icon: faFeather },
        ],
        github: 'https://github.com/EllenHalv/Todo-Spring-Kafka-Application',
        img: '../images/projects/todo-app.png'
    },
    {
        name: 'Recipe Generator',
        description: 'The Recipe Generator is a Python-based application designed to simplify meal planning. ' +
            'It integrates with Spoonaculars API to fetch recipes. ' +
            'The user can randomize a recipe, or get multiple recipes based on ingredients or dietary restrictions.',
        idea: 'The challenge of deciding what to cook inspired me to create an application that makes that decision for me! ' +
            'The Recipe Generator was created to inspire users with a variety of recipes tailored to their input.',
        usefulness: 'This application is particularly helpful for people looking for new meal ideas or inspiration, ' +
            'or those following specific diets, such as vegetarian or gluten-free.',
        technologies: [
            { name: 'Python', icon: faPython },
            { name: 'API Integration', icon: faKey },
        ],
        github: 'https://github.com/EllenHalv/Recipe_Generator',
        img: '../images/projects/meal-generator.png'
    }
];

// Pages

const ProjectsList = () => (
    <section className={styles.Projects}>
        <div className={styles.fadeInText}>
            <h2>My Recent <span className={styles.highlight}>Projects </span></h2>
        </div>
        <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
                // Each project card
                <div className={styles.fadeInText}>
                    <div className={styles.projectCard} key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        {/* Only display if project has a idea text */}
                        {project.idea && (
                            <p><strong>Idea:</strong> {project.idea}</p>
                        )}
                        {/* Only display if project has a usefullness text */}
                        {project.usefulness && (
                            <p><strong>Usefulness:</strong> {project.usefulness}</p>
                        )}
                        {/* Only display if project has a img */}
                        {project.img && (
                            <img
                                className={styles.projectImg}
                                src={project.img}
                                alt="project img"
                            />
                        )}
                        <div className={styles.technologies}>
                            <strong>Technologies:</strong>
                            <ul>
                                {project.technologies.map((tech, techIndex) => (
                                    <li key={techIndex}>
                                        <FontAwesomeIcon icon={tech.icon}/> {/* Ikonen */}
                                        <span>{tech.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    <ol className={styles.ProjectLinkList}>
                            {/* Only display if project has a github link */}
                            {project.github && (
                                <button className={styles.ProjectLinkButton} onClick={() => window.open(project.github, "_blank")}>GitHub</button>
                            )}
                            {/* Only display if project has a demo link */}
                            {project.demo && (
                                <button className={styles.ProjectLinkButton} onClick={() => window.open(project.demo, "_blank")}>See demo</button>
                            )}
                    </ol>
                    </div>
                </div>
            ))}
        </div>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
);

export default ProjectsList;