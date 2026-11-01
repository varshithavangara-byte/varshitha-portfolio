import { contact } from '../data/content'
import { Icon } from './Icons'

const items = [
  { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin' },
  { key: 'github', label: 'GitHub', icon: 'github' },
]

// Real link when a URL is set; otherwise a visibly disabled placeholder (never a dead link).
export default function Socials() {
  return (
    <ul className="socials" aria-label="Social links">
      {items.map(({ key, label, icon }) => (
        <li key={key}>
          {contact[key] ? (
            <a href={contact[key]} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon name={icon} />
            </a>
          ) : (
            <span className="is-placeholder" role="img" aria-label={`${label} link not added yet`} title={`${label}: add your URL in src/data/content.js`}>
              <Icon name={icon} />
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
