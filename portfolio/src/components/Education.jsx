import Section from './Section'
import { education } from '../data/content'

export default function Education() {
  return (
    <Section id="education" alt title="Education" intro="Most recent first.">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.degree}>
            <time>{e.years}</time>
            <div className="tl-card">
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
              <p className="score">Percentage: <strong>{e.score}</strong></p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
