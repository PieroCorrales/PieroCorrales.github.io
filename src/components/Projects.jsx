import './Projects.css'

const PROJECTS = [
  {
    title: 'Academia de Baile — DanceWithMe',
    lang: 'PHP / MySQL',
    langColor: '#777BB3',
    desc: 'Aplicación web full-stack para la gestión de una academia de baile. Incluye sistema de reservas, panel de administración completo y autenticación de usuarios. Arquitectura MVC.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'MVC', 'Full Stack'],
    github: 'https://github.com/PieroCorrales/Proyecto-academia-de-baile',
  },
  {
    title: 'Taskly',
    lang: 'JavaScript',
    langColor: '#F7DF1E',
    desc: 'Aplicación de gestión de tareas moderna construida con JavaScript vanilla. Interfaz limpia y funcional para organizar el flujo de trabajo diario.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Vanilla JS'],
    github: 'https://github.com/PieroCorrales/taskly',
  },
  {
    title: 'Cardiovascular Risk Analysis',
    lang: 'Python / Jupyter',
    langColor: '#3776AB',
    desc: 'Análisis de datos de riesgo cardiovascular usando Python y Jupyter Notebook. Exploración, limpieza y visualización de datos clínicos para identificar patrones y factores de riesgo.',
    tags: ['Python', 'Jupyter', 'Pandas', 'Data Science', 'EDA'],
    github: 'https://github.com/PieroCorrales/cardiovascular-risk-analysis',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <p className="section-tag reveal">{'// 03 — proyectos'}</p>
        <h2 className="section-title reveal">
          Lo que <span>he construido</span>
        </h2>
        <div className="projects-grid">
          {PROJECTS.map(({ title, lang, langColor, desc, tags, github }) => (
            <article key={title} className="project-card reveal">
              <div className="project-header">
                <div className="project-lang">
                  <span
                    className="lang-dot"
                    style={{ background: langColor }}
                  />
                  <span className="lang-text">{lang}</span>
                </div>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`Ver ${title} en GitHub`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{desc}</p>
              <div className="project-tags">
                {tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
