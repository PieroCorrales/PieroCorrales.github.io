import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow--blue" />
        <div className="hero-glow hero-glow--orange" />
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            Disponible para oportunidades
          </div>

          <h1 className="hero-name">
            Piero{' '}
            <span className="name-outline">Corrales</span>{' '}
            <span className="name-accent">Paucar</span>
          </h1>

          <p className="hero-role">
            <span className="role-prefix">~/</span>{' '}
            Web Developer & Data Scientist
          </p>

          <p className="hero-desc">
            Estudiante apasionado por el desarrollo web y la ciencia de datos.
            Construyo soluciones full-stack y analizo datos para generar valor real.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              Ver proyectos
            </a>
            <a href="#contact" className="btn btn-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contactar
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="code-card">
            <div className="code-header">
              <span className="code-dot code-dot--red" />
              <span className="code-dot code-dot--yellow" />
              <span className="code-dot code-dot--green" />
            </div>
            <pre className="code-body">
              <code>
                <span className="c-comment">{'// config.js'}</span>{'\n'}
                <span className="c-keyword">const</span>{' '}
                <span className="c-var">developer</span>{' '}
                <span className="c-op">=</span> {'{\n'}
                {'  '}name<span className="c-op">:</span>{' '}
                <span className="c-string">"Piero Corrales"</span>,{'\n'}
                {'  '}role<span className="c-op">:</span>{' '}
                <span className="c-string">"Full Stack + Data"</span>,{'\n'}
                {'  '}stack<span className="c-op">:</span> [
                <span className="c-string">"JS"</span>,{' '}
                <span className="c-string">"PHP"</span>,{' '}
                <span className="c-string">"Python"</span>],{'\n'}
                {'  '}certs<span className="c-op">:</span>{' '}
                <span className="c-value">3</span>,{'\n'}
                {'  '}open<span className="c-op">:</span>{' '}
                <span className="c-value">true</span>{'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
