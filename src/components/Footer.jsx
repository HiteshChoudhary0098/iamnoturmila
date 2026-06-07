import Wordmark from "./Wordmark.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact">
      <p className="label">— Let's create together</p>
      <h2>Get in touch</h2>
      <a className="mail" href="mailto:hello@urmilachoudhary.com">
        hello@urmilachoudhary.com
      </a>
      <div className="f-soc">
        <a href="#">LinkedIn</a>
        <a href="#">Behance</a>
        <a href="#">Instagram</a>
      </div>
      <div className="f-bottom">
        <Wordmark className="wordmark" />
        <span>Urmila Choudhary — Portfolio {year}</span>
      </div>
    </footer>
  );
}
