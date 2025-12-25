import "./Projects.css";
import businessImg from "../assets/Business.png";
import startupImg from "../assets/startup.png";
import todoImg from "../assets/Todo.png";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <div className="project-image">
            <img src={businessImg} alt="Business Website" />
          </div>

          <div className="project-content">
            <h3>Business Website</h3>
            <p>
              Professional business website with modern UI and responsive layout.
            </p>

            <span className="project-tech">React • CSS • Responsive</span>

            <div className="project-links">
              <a
                href="https://business2-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-image">
            <img src={startupImg} alt="Startup Website" />
          </div>

          <div className="project-content">
            <h3>Startup Website</h3>
            <p>
              Conversion-focused startup landing page with clean UX.
            </p>

            <span className="project-tech">React • UI Design</span>

            <div className="project-links">
              <a
                href="https://react-7sc4.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-image">
            <img src={todoImg} alt="Todo App" />
          </div>

          <div className="project-content">
            <h3>Todo App</h3>
            <p>
              Minimal and clean Todo app built using React state management.
            </p>

            <span className="project-tech">React • JavaScript</span>

            <div className="project-links">
              <a
                href="https://react-5xtq.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
