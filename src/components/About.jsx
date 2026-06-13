export default function About() {
  return (
    <section id="about">
      <div className="inner">
        <div className="grid">
          <div className="portrait reveal">
            <img
              className="portrait-img"
              src="/urmila-profile.jpeg"
              alt="Urmila Choudhary"
            />
            <div className="step" style={{ height: "18%", bottom: 0 }} />
            <div className="step" style={{ height: "30%", bottom: "18%" }} />
            <div className="step" style={{ height: "44%", bottom: "48%" }} />
            <span className="photo-tag">@UWillC</span>
          </div>
          <div className="about-copy">
            <p className="label reveal d1">Hello! I'm</p>
            <h2 className="reveal d2">Urmila Choudhary</h2>
            <p className="label sub reveal d3">— About Me</p>
            <p className="bio reveal d4">
              I define myself as a <b>creative advertising professional</b>,{" "}
              <b>content creator</b>, and <b>strategic communicator</b>{" "}
              passionate about digital content, branding, and photography.
              Self-taught, detail-oriented, and organized. Fresh out of college
              and eager to explore, I love to create and, in the process,
              connect with brands and people.
            </p>
            <div className="socials reveal d5">
              <a
                className="ic"
                href="https://www.linkedin.com/in/urmila--choudhary/"
                title="LinkedIn"
              >
                in
              </a>
              <a className="ic" href="#" title="Instagram">
                ◎
              </a>
              <span className="handle">@UWillC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
