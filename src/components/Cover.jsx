import Wordmark from "./Wordmark.jsx";

export default function Cover() {
  return (
    <section id="cover">
      <span className="corner tl">Urmila Choudhary</span>
      <span className="corner br">Urmila Choudhary</span>
      <Wordmark className="muse-top reveal" />
      <h1 className="medium reveal d1">
        <span className="row">The</span>
        <span className="row">
          <span className="stretch"> Results</span>
        </span>
      </h1>
      <div className="year reveal d2">{new Date().getFullYear()}</div>
      <div className="scroll-cue">
        <span className="bar" />
        Scroll
      </div>
    </section>
  );
}
