import Wordmark from './Wordmark.jsx'

export default function Cover() {
  return (
    <section id="cover">
      <span className="corner tl">Keli Mus</span>
      <span className="corner br">Keli Mus</span>
      <Wordmark className="muse-top reveal" />
      <h1 className="big reveal d1">
        <span className="row">PORT</span>
        <span className="row">
          <span className="stretch">FOLIO</span>
        </span>
      </h1>
      <div className="year reveal d2">2022</div>
      <div className="scroll-cue">
        <span className="bar" />
        Scroll
      </div>
    </section>
  )
}
