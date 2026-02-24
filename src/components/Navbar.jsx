import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className="navbar__logo">SK<span>.</span></div>

      {/* Nav Links — flex row */}
      <ul className="navbar__links">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link); }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a className="navbar__cta" href="mailto:krishnasatish04@gmail.com">Hire Me</a>

      {/* Mobile hamburger */}
      <div className="navbar__hamburger" onClick={() => scrollTo('Contact')}>
        <span /><span /><span />
      </div>
    </nav>
  );
}
