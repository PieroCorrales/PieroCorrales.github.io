import './Stats.css'

const STATS = [
  { value: '3+', label: 'Proyectos completos' },
  { value: '3', label: 'Certificaciones IBM' },
  { value: '6+', label: 'Tecnologías' },
  { value: '∞', label: 'Ganas de aprender' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        {STATS.map(({ value, label }) => (
          <div key={label} className="stat-item reveal">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
