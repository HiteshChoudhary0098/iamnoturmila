import { useEffect, useState } from 'react'
import Wordmark from './Wordmark.jsx'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#branding', label: 'Branding' },
  { href: '#project', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Wordmark as="a" href="#cover" className="brand" />
      <button className="menu-toggle" onClick={() => setOpen((v) => !v)}>
        Menu
      </button>
      <ul className={open ? 'open' : ''}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
