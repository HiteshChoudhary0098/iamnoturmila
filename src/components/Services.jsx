const SERVICES = ['Branding', 'Digital Content', 'Photography']

export default function Services() {
  return (
    <section id="services">
      <div className="inner">
        <div className="svc-grid">
          <div className="intro">
            <p className="label reveal">— What I do</p>
            <h3 className="reveal d1">Creative services for brands that want to be remembered.</h3>
          </div>
          <div className="list">
            {SERVICES.map((s, i) => (
              <div className={`svc reveal d${i + 1}`} key={s}>
                <span className="dash" /> {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
