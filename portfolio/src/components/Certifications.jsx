import Section from './Section'
import { training } from '../data/content'

export default function Certifications() {
  return (
    <Section id="certifications" title="Training and certifications">
      <div className="cert-grid">
        {training.map((t) => (
          <article className="cert" key={t.title}>
            <span className="tag">{t.kind}</span>
            <h3>{t.title}</h3>
            <p className="cert-org">{t.org}</p>
            <p>{t.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
