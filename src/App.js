import './App.css';

const projects = [
  {
    name: 'Budget Tracker',
    description: 'Fullstack-projekt med Java och React',
    github: 'https://github.com/EllenHalv/budget-tracker',
  },
  {
    name: 'Borrow Buddy',
    description: 'Webbapp med .NET MVC',
    github: 'https://github.com/EllenHalv/.NET-mvc-webapp',
  },
];

function App() {
  return (
      <div>
        <header>
          <h1>Min Portfolio</h1>
        </header>
        <main>
          <section>
            <h2>Projekt</h2>
            <ul>
              {projects.map((project, index) => (
                  <li key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      Visa på GitHub
                    </a>
                  </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
  );
}

export default App;
