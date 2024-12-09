import './App.css';

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

function App() {
  return (
      <div>
        <header>
          <h1>Ellen Halvardsson - Portfolio</h1>
        </header>
        <main>
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
            <br/>
          </section>
        </main>
      </div>
  );
}

export default App;
