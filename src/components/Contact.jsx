import { useEffect, useRef } from 'react';
import '../styles/Contact.css';

const CERTS = [
  { icon: '☁️', name: 'Azure Fundamentals', issuer: 'Microsoft — AZ-900' },
  { icon: '🛡️', name: 'SAFe Agile Certified', issuer: 'Scaled Agile, Inc.' },
  { icon: '📝', name: 'Communication Skills', issuer: 'Pearson VUE' },
];

export default function Contact() {
  const certsRef = useRef(null);

  // Scroll reveal for cert cards
  useEffect(() => {
    const cards = certsRef.current?.querySelectorAll('.cert-card');
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.1}s`;
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── CERTIFICATIONS ── */}
      <section className="certs" ref={certsRef}>
        <div className="container">
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>

          {/* Flex wrap row */}
          <div className="certs__flex">
            {CERTS.map((cert) => (
              <div className="cert-card" key={cert.name}>
                {/* Icon */}
                <div className="cert-card__icon">{cert.icon}</div>
                {/* Info — flex column */}
                <div className="cert-card__info">
                  <div className="cert-card__name">{cert.name}</div>
                  <div className="cert-card__issuer">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="container">
          {/* Contact box — flex column centered */}
          <div className="contact-box">
            <p className="section-label">Get in touch</p>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact__sub">
              Open to full-time roles, contract work, and consulting opportunities
              in React &amp; UI development.
            </p>

            {/* Links — flex row wrap */}
            <div className="contact__links">
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/satish-krishna-97b714152"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 LinkedIn
              </a>
              <a className="contact-link" href="tel:+917981887148">
                📞 +91 79818 87148
              </a>
            </div>

            <a className="contact__email" href="mailto:krishnasatish04@gmail.com">
              krishnasatish04@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER — flex between ── */}
      <div className="container">
        <footer className="footer">
          <div className="footer__copy">
            © 2025 <span>Satish Krishna Masimeni</span>. All rights reserved.
          </div>
          <div className="footer__right">Built with React ⚛️</div>
        </footer>
      </div>
    </>
  );
}
