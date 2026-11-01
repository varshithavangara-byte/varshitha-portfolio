import { navLinks, profile } from '../data/content'
import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">{profile.name}</p>
        <nav aria-label="Footer">
          <ul>
            {navLinks.map((l) => (<li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>))}
          </ul>
        </nav>
        <Socials />
        <p className="copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
