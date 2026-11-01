import { profile, resumeUrl, foodwala } from '../data/content'
import { Icon } from './Icons'
import Socials from './Socials'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="status"><span className="status-dot" aria-hidden="true" />Seeking a Java Developer role in Bengaluru</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="lead">
            I’m an MCA student and Java Full Stack trainee at TAP Academy. I build database-driven web applications with Java, Servlets, JSP, JDBC and MySQL, and I’ve taken one from MySQL schema to a working app on Apache Tomcat.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#projects">View projects</a>
            <a className="btn btn-ghost" href={resumeUrl} download><Icon name="download" size={18} /> Download resume</a>
          </div>
          <Socials />
        </div>

        <figure className="flow" aria-label="Diagram of how Foodwala handles an add-to-cart request">
          <div className="flow-bar" aria-hidden="true"><i /><i /><i /></div>
          <figcaption>How Foodwala handles add to cart</figcaption>
          <ol>
            {foodwala.flow.map((n, i) => (
              <li key={n.name} style={{ '--i': i }}>
                <strong>{n.name}</strong>
                <span>{n.text}</span>
              </li>
            ))}
          </ol>
          <p className="flow-return">The servlet answers with JSON and the page updates the cart.</p>
        </figure>
      </div>
    </section>
  )
}
