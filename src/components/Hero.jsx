import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="about">
      {/* Background decorations */}
      <div className="hero__bg-grid" />
      <div className="hero__glow" />

      <div className="container">
        {/* Content — flex column */}
        <div className="hero__content">

          {/* Badge — flex row */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          {/* Title */}
          <h1 className="hero__title">
            <span className="hi">Hello, I'm</span>
            Satish <span className="name-accent">Krishna</span>
            <span className="role-line">UI Developer · React Specialist</span>
          </h1>

          {/* Description */}
          <p className="hero__desc">
            10+ years crafting exceptional web experiences for Verizon, USAA, Synchrony,
            Konica Minolta &amp; more. React specialist with deep expertise in state management,
            testing, and scalable frontend architecture.
          </p>

          {/* Actions — flex row */}
          <div className="hero__actions">
            <a className="btn-primary" href="#experience"
              onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Experience
            </a>
            <a
              className="btn-ghost"
              href="https://www.linkedin.com/in/satish-krishna-97b714152"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile →
            </a>
          </div>

          {/* Stats — flex row */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">10+</span>
              <span className="hero__stat-label">Years Exp.</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">6+</span>
              <span className="hero__stat-label">Major Clients</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">4</span>
              <span className="hero__stat-label">MNC Companies</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        Scroll
      </div>
    </section>
  );
}
