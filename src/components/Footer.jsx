import Wordmark from './Wordmark.jsx'

export default function Footer() {
  return (
    <footer id="contact">
      <p className="label">— Let's create together</p>
      <h2>Get in touch</h2>
      <a className="mail" href="mailto:hello@kllmuse.com">hello@kllmuse.com</a>
      <div className="f-soc">
        <a href="#">LinkedIn</a>
        <a href="#">Behance</a>
        <a href="#">Instagram</a>
      </div>
      <div className="f-bottom">
        <Wordmark className="wordmark" />
        <span>Keli Mus — Portfolio 2022</span>
      </div>
    </footer>
  )
}
