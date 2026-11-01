import Section from './Section'
import { foodwala as f } from '../data/content'
import { Icon } from './Icons'

const base = import.meta.env.BASE_URL

function LinkOrNote({ href, label, note }) {
  return href ? (
    <a className="btn btn-primary btn-sm" href={href} target="_blank" rel="noopener noreferrer">{label} <Icon name="external" size={16} /></a>
  ) : (
    <span className="link-note">{label}: {note}</span>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured project" intro="One project, documented in full: what it does, how it’s built and what I did.">
      <article className="case">
        <header className="case-head">
          <div>
            <h3>{f.title}</h3>
            <p className="case-sub">{f.subtitle}</p>
          </div>
          <div className="case-links">
            <LinkOrNote href={f.repoUrl} label="GitHub repository" note="placeholder, add the URL in src/data/content.js" />
            <LinkOrNote href={f.demoUrl} label="Live demo" note="not publicly deployed, runs locally on Apache Tomcat" />
          </div>
        </header>

        <div className="case-cols">
          <div>
            <h4>Overview</h4>
            <p>{f.overview}</p>
          </div>
          <div>
            <h4>The problem it solves</h4>
            <p>{f.problem}</p>
          </div>
        </div>

        <ul className="chips" aria-label="Technologies used">
          {f.tech.map((t) => (<li key={t}>{t}</li>))}
        </ul>

        <div className="case-cols">
          <div>
            <h4>Key features</h4>
            <ul className="ticks">
              {f.features.map((x) => (<li key={x}><Icon name="check" size={18} />{x}</li>))}
            </ul>
          </div>
          <div>
            <h4>My implementation and contributions</h4>
            <ul className="bullets">
              {f.contributions.map((x) => (<li key={x}>{x}</li>))}
            </ul>
          </div>
        </div>

        <div className="arch">
          <h4>Architecture</h4>
          <p>The application follows MVC. A request travels through these layers and the response comes back as a page or JSON.</p>
          <ol className="arch-flow">
            {f.flow.map((n) => (
              <li key={n.name}><strong>{n.name}</strong><span>{n.text}</span></li>
            ))}
          </ol>
          <dl className="mvc">
            {f.mvc.map((m) => (
              <div key={m.part}><dt>{m.part}</dt><dd>{m.text}</dd></div>
            ))}
          </dl>
        </div>

        <div>
          <h4>Screenshots</h4>
          <div className="shots">
            {f.screenshots.map((s) => (
              <figure key={s.caption} className={s.src ? 'shot' : 'shot shot-empty'}>
                {s.src ? (
                  <img src={`${base}${s.src}`} alt={s.alt} loading="lazy" />
                ) : (
                  <div role="img" aria-label={`Placeholder for screenshot: ${s.caption}`}>
                    <span>Screenshot placeholder</span>
                    <small>Save as public/screenshots/{s.file}</small>
                  </div>
                )}
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </article>
    </Section>
  )
}
