export default function Section({ id, title, intro, alt = false, children }) {
  return (
    <section id={id} className={`section${alt ? ' section-alt' : ''}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p>{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
