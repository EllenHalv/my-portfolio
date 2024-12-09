import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';

const projects = [
  {
    name: 'Budget Tracker',
    description: 'Fullstack-project with Java och React. Using Oauth2 for authentication',
    github: 'https://github.com/EllenHalv/budget-tracker',
  },
  {
    name: 'Borrow Buddy',
    description: 'Webbapp med .NET MVC',
    github: 'https://github.com/EllenHalv/.NET-mvc-webapp',
  },
  {
    name: 'Inventory App',
    description: 'AWS hosted CI/CD Java/React app',
    github: 'https://github.com/EllenHalv/YarnCRUD-AWS-CICD',
  },
  {
    name: 'Recipe Generator',
    description: 'Python Third-party API integrated Recipe Generator',
    github: 'https://github.com/EllenHalv/Recipe_Generator',
  },
  {
    name: 'Web Service with Spring Security',
    description: 'Java Web Service with Spring Security. Using JWT for authentication',
    github: '    https://github.com/EllenHalv/Web-Service-with-Spring-Security',
  }
];

// Pages
const Projects = () => (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                See more on GitHub
              </a>
            </li>
        ))}
      </ul>
    </section>
);

const Contact = () => (
    <section>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:ellenhalvardsson@gmail.com">ellen@example.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ellenhalv" target="_blank" rel="noopener noreferrer">Ellen Halvardsson</a></p>
    </section>
);

const CV = () => (
    <section>
      <h2>My CV</h2>
      <p>Download my CV: <a href="/cv.pdf" download>Click here</a></p>
    </section>
);

// Main Component
function App() {
  return (
      <Router>
        <div>
          <header>
            <h1>Ellen Halvardsson - Portfolio</h1>
            <nav>
              <ul>
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cv">My CV</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cv" element={<CV />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;