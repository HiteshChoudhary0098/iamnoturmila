const TABS = ['Branding', 'Digital Content', 'Photography']

// title: array of lines for the big heading
// active: which tab label is highlighted
// children: optional decorative content (e.g. floating icons)
export default function Divider({ id, title, active, twoLine = false, children }) {
  return (
    <section id={id} className="divider">
      {children}
      <h2 className={`huge reveal ${twoLine ? 'two-line' : ''}`}>
        {title.map((line, i) => (
          <span key={i}>
            {line}
            {i < title.length - 1 && <br />}
          </span>
        ))}
      </h2>
      <div className="tabs reveal d2">
        {TABS.map((t, i) => (
          <span key={t} style={{ display: 'contents' }}>
            <span className={`tab ${t === active ? 'active' : ''}`}>{t}</span>
            {i < TABS.length - 1 && <span className="sep">|</span>}
          </span>
        ))}
      </div>
    </section>
  )
}
