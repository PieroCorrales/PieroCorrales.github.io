import './Certifications.css'

const CERTS = [
  {
    name: 'IBM Data Analyst Professional Certificate',
    issuer: 'IBM — Coursera',
    status: 'Completado',
    done: true,
  },
  {
    name: 'IBM Data Science Professional Certificate',
    issuer: 'IBM — Coursera',
    status: 'Completado',
    done: true,
  },
  {
    name: 'IBM Cybersecurity Analyst Professional Certificate',
    issuer: 'IBM — Coursera',
    status: 'En progreso',
    done: false,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="certs bg-dark">
      <div className="certs-container">
        <p className="section-tag reveal">{'// 04 — certificaciones'}</p>
        <h2 className="section-title reveal">
          Aprendizaje <span>continuo</span>
        </h2>
        <div className="certs-list">
          {CERTS.map(({ name, issuer, status, done }) => (
            <div key={name} className="cert-item reveal">
              <div className="cert-icon">
                <span className="cert-ibm">IBM</span>
              </div>
              <div className="cert-info">
                <h3 className="cert-name">{name}</h3>
                <p className="cert-issuer">{issuer}</p>
              </div>
              <span className={`cert-status${done ? ' cert-status--done' : ' cert-status--progress'}`}>
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
