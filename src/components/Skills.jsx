import './Skills.css'

const SKILLS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Frontend',
    color: 'blue',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Backend',
    color: 'blue',
    items: ['PHP', 'MySQL', 'MVC', 'SQL'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Data & Analytics',
    color: 'orange',
    items: ['Python', 'Pandas', 'IBM Cognos', 'Excel'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Seguridad',
    color: 'orange',
    items: ['Cybersecurity', 'IBM QRadar', 'SIEM'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills bg-dark">
      <div className="skills-container">
        <p className="section-tag reveal">{'// 02 — stack técnico'}</p>
        <h2 className="section-title reveal">
          Lo que sé <span>construir</span>
        </h2>
        <div className="skills-grid">
          {SKILLS.map(({ icon, title, color, items }) => (
            <div key={title} className="skill-card reveal">
              <div className={`skill-icon skill-icon--${color}`}>{icon}</div>
              <h3 className="skill-title">{title}</h3>
              <div className="skill-tags">
                {items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
