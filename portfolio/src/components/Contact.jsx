import { useState } from 'react'
import Section from './Section'
import { contact, profile } from '../data/content'
import { Icon } from './Icons'

const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email address, like name@example.com.'
  if (v.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.'
  return e
}

function Field({ id, label, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="error" id={`${id}-error`} role="alert">{error}</p>}
    </div>
  )
}

function Row({ icon, label, href, value }) {
  return (
    <li>
      <Icon name={icon} />
      <span>{label}</span>
      {href ? (
        <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">{value}</a>
      ) : (
        <em className="is-placeholder-text">Placeholder: add in src/data/content.js</em>
      )}
    </li>
  )
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  const change = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    setDone(false)
    if (Object.keys(errors).length) setErrors(validate(next))
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }
    if (!contact.email) return
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`)
    const body = encodeURIComponent(`${values.message.trim()}\n\nFrom: ${values.name.trim()} (${values.email.trim()})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setDone(true)
  }

  return (
    <Section id="contact" alt title="Contact" intro={`I’m looking for a Java Developer role in ${profile.location.split(',')[0]}. Reach out and I’ll reply.`}>
      <div className="contact-grid">
        <ul className="contact-list">
          <Row icon="mail" label="Email" href={contact.email && `mailto:${contact.email}`} value={contact.email} />
          <Row icon="linkedin" label="LinkedIn" href={contact.linkedin} value="View profile" />
          <Row icon="github" label="GitHub" href={contact.github} value="View profile" />
        </ul>

        <form className="form" onSubmit={submit} noValidate>
          <Field id="name" label="Your name" error={errors.name}>
            <input id="name" name="name" autoComplete="name" value={values.name} onChange={change} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
          </Field>
          <Field id="email" label="Your email" error={errors.email}>
            <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={change} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
          </Field>
          <Field id="message" label="Message" error={errors.message}>
            <textarea id="message" name="message" rows="5" value={values.message} onChange={change} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
          </Field>
          <button className="btn btn-primary" type="submit" disabled={!contact.email}>Write email</button>
          <p className="form-note" aria-live="polite">
            {!contact.email
              ? 'Placeholder: add your email in src/data/content.js to turn this form on.'
              : done
                ? 'Your email app should now be open with this message ready. Nothing is sent until you press send there.'
                : 'This form opens your email app with the message filled in. It does not send anything by itself.'}
          </p>
        </form>
      </div>
    </Section>
  )
}
