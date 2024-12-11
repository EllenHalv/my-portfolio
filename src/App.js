import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faFileAlt, faProjectDiagram, } from '@fortawesome/free-solid-svg-icons';
import { faJava, faReact, faBootstrap, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import HeaderComponent from './components/HeaderComponent';
import squirrelImage from './assets/images/squirrel.jpg';

const projects = [
    {
        name: 'Budget Tracker',
        description: 'Fullstack-project with Java och React. Using Oauth2 for authentication',
        idea: 'This project was inspired by the need for better personal finance tools.',
        usefulness: 'Helps users track their expenses and income effectively.',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'React', icon: faReact },
        ],
        github: 'https://github.com/EllenHalv/budget-tracker',
    },
    {
        name: 'Infrastructure Scanner',
        description: 'A tool for scanning infrastructure assets and generating compliance reports.',
        idea: 'Developed during my internship to automate asset reporting.',
        usefulness: 'Helps organizations monitor compliance efficiently.',
        technologies: [
            { name: 'Java', icon: faJava },
        ],
        github: 'https://github.com/EllenHalv/infrastructure-scanner', // Endast om publik
    },
    {
        name: 'Borrow Buddy',
        description: 'Webbapp med .NET MVC',
        idea: 'Inspired by reducing waste and sharing resources within communities.',
        usefulness: 'Encourages sharing instead of buying new, fostering sustainability.',
        technologies: [
            { name: '.NET', icon: faMicrosoft },
            { name: 'Bootstrap', icon: faBootstrap },
        ],
        github: 'https://github.com/EllenHalv/.NET-mvc-webapp',
    },
    {
        name: 'Inventory App',
        description: 'AWS hosted CI/CD Java/React app',
        idea: 'This project was inspired by the need for better personal finance tools.',
        usefulness: 'Helps users track their expenses and income effectively.',
        technologies: ['Java', 'React', 'OAuth2', 'Spring Boot'],
        github: 'https://github.com/EllenHalv/YarnCRUD-AWS-CICD',
    },
    {
        name: 'Recipe Generator',
        description: 'Python Third-party API integrated Recipe Generator',
        idea: 'This project was inspired by the need for better personal finance tools.',
        usefulness: 'Helps users track their expenses and income effectively.',
        technologies: ['Java', 'React', 'OAuth2', 'Spring Boot'],
        github: 'https://github.com/EllenHalv/Recipe_Generator',
    },
    {
        name: 'Web Service with Spring Security',
        description: 'Java Web Service with Spring Security. Using JWT for authentication',
        idea: 'This project was inspired by the need for better personal finance tools.',
        usefulness: 'Helps users track their expenses and income effectively.',
        technologies: ['Java', 'React', 'OAuth2', 'Spring Boot'],
        github: '    https://github.com/EllenHalv/Web-Service-with-Spring-Security',
    }
];

// Pages
const Projects = () => (
    <section>
        <h2>Projects <FontAwesomeIcon icon={faProjectDiagram}/></h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="project-card glass" key={index}>
                    <h3>{project.name}</h3>
                    <p><strong>Description:</strong> {project.description}</p>
                    <p><strong>Idea:</strong> {project.idea}</p>
                    <p><strong>Usefulness:</strong> {project.usefulness}</p>
                    <div className="technologies">
                        <strong>Technologies:</strong>
                        <ul>
                            {project.technologies.map((tech, techIndex) => (
                                <li key={techIndex} className="technology-item">
                                    <FontAwesomeIcon icon={tech.icon}/> {/* Ikonen */}
                                    <span>{tech.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        See more on GitHub
                    </a>
                </div>
            ))}
        </div>
    </section>
);

const Contact = () => (
    <section>
        <h2>Contact <FontAwesomeIcon icon={faEnvelope}/></h2>
        <div className="glass">

            <p>Feel free to contact me!</p>
            <p>Email: <a href="mailto:ellenhalvardsson@gmail.com">ellenhalvardsson@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ellen-halv/" target="_blank" rel="noopener noreferrer">Ellen
                Halvardsson</a></p>
        </div>
    </section>
);

const CV = () => (
    <section>
        <h2>My Resume/CV <FontAwesomeIcon icon={faFileAlt}/></h2>
        <div className="glass">
            <p>Here you can download my CV</p>
            <p>Download my CV: <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download>Click here</a></p>
        </div>
    </section>
);

// Main Component
function App() {
    return (
        <Router>
            <div className="bg-dark text-white" style={{minHeight: '100vh'}}>
                {/* Background image */}
                <div
                    className="background-section"
                    style={{
                        backgroundImage: `url(${squirrelImage})`,
                    }}
                >
                    <div className="background-content">
                        <h1>Welcome to My Portfolio</h1>
                        <p>Explore my projects below!</p>
                    </div>
                </div>

                {/* Header positioned below */}
                <div className="header-section">
                    <HeaderComponent />
                </div>

                {/* Main Content */}
                <main className="container mt-4">
                    <Routes>
                        <Route path="/projects" element={<Projects projects={projects} />} />
                        <Route path="/cv" element={<CV />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;