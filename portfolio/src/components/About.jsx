import Section from './Section'
import { profile } from '../data/content'

export default function About() {
  return (
    <Section id="about" title="About me" intro="A Java developer in training, building real applications rather than only exercises.">
      <div className="about-grid">
        <div className="prose">
          <p>
            I’m completing my Master of Computer Applications (2024–2026) after a B.Sc. in Mathematics, Statistics and Computer Science. Alongside the degree, I’m training in Java Full Stack Development with AI at TAP Academy in Bengaluru.
          </p>
          <p>
            Java is my main language. I like the structure it gives: clear object models, the Collections Framework, and the MVC pattern for keeping a web application readable. I also work with Python, JavaScript and SQL, and I’ve been introduced to Spring Boot.
          </p>
          <p>
            My objective is a Java Developer role in Bengaluru where I can build and maintain database-driven applications, learn from experienced engineers, and keep growing as a software engineer.
          </p>
        </div>
        <dl className="facts">
          <div><dt>Based in</dt><dd>{profile.location}</dd></div>
          <div><dt>Currently</dt><dd>MCA student and Java Full Stack trainee at TAP Academy</dd></div>
          <div><dt>Looking for</dt><dd>Java Developer role in Bengaluru</dd></div>
          <div><dt>Languages</dt><dd>{profile.languages}</dd></div>
        </dl>
      </div>
    </Section>
  )
}
