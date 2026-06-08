export default function About() {
  return (
    <section id="about">
      <div className="inner">
        <div className="grid">
          <div className="portrait reveal">
            <div className="step" style={{ height: "18%", bottom: 0 }} />
            <div className="step" style={{ height: "30%", bottom: "18%" }} />
            <div className="step" style={{ height: "44%", bottom: "48%" }} />
            <span className="photo-tag">@kllmuse</span>
          </div>
          <div className="about-copy">
            <p className="label reveal d1">Hello! I'm</p>
            <h2 className="reveal d2">Urmila Choudhary</h2>
            <p className="label sub reveal d3">— About Me</p>
            <p className="bio reveal d4">
              Me defino como una <b>publicista creativa</b>,{" "}
              <b>creadora de contenido</b> y <b>comunicadora estratégica</b>{" "}
              apasionada por el contenido digital, branding y la fotografía.
              Autodidacta, detallista y ordenada. Amo crear y en el proceso
              conectar con las marcas y las personas.
            </p>
            <div className="socials reveal d5">
              <a className="ic" href="#" title="LinkedIn">
                in
              </a>
              <a className="ic" href="#" title="Behance">
                Bē
              </a>
              <a className="ic" href="#" title="Instagram">
                ◎
              </a>
              <span className="handle">@kllmuse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
