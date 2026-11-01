import Section from './Section'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" alt title="Technical skills" intro="The tools I use, grouped by what they’re for.">
      <div className="skills">
        {skillGroups.map((g) => (
          <div className="skill-row" key={g.title}>
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((s) => (<li key={s}>{s}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
