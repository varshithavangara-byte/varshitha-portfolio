import { useEffect, useState } from 'react'
import { navLinks, profile, resumeUrl } from '../data/content'
import { Icon } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={close}>
          <span className="brand-mark" aria-hidden="true">V</span>
          {profile.name}
        </a>
        <button className="nav-toggle" aria-expanded={open} aria-controls="nav-menu" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
        <nav id="nav-menu" className={`nav-menu${open ? ' is-open' : ''}`} aria-label="Primary">
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={close} aria-current={active === l.id ? 'true' : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary btn-sm" href={resumeUrl} download onClick={close}>
            <Icon name="download" size={16} /> Download resume
          </a>
        </nav>
      </div>
    </header>
  )
}
