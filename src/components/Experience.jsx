import { useEffect, useRef } from 'react';
import '../styles/Experience.css';

const EXPERIENCES = [
  {
    role: 'Senior UI Developer',
    company: 'Hitachi Vantara',
    client: 'Hitachi (Clear Sight)',
    project: 'Storage Management Web Application',
    period: 'Dec 2022 – Present',
    desc: 'Building a web application that visualizes array information — pool capacity, parity groups, hardware status, temperature summaries, and internal drive data for customers and partners.',
    tech: ['React', 'Redux', 'Material UI', 'JavaScript', 'HTML', 'CSS', 'Python', 'Django'],
  },
  {
    role: 'Senior Associate Consultant',
    company: 'Infosys Ltd',
    client: 'Verizon (Omega)',
    project: 'Enterprise UI Component Library',
    period: 'Sep 2019 – May 2022',
    desc: 'Created reusable React components with Hooks & Context API, managed global state with Redux, and built responsive UIs for desktop and mobile. Led demos and POCs for potential clients.',
    tech: ['React', 'Redux', 'TypeScript', 'Jest', 'Enzyme', 'Material UI', 'Bootstrap'],
  },
  {
    role: 'Senior Consultant',
    company: 'Capgemini',
    client: 'Synchrony Finance (Nissan)',
    project: 'Nissan Promotional Financing Platform',
    period: 'Jul 2018 – Sep 2019',
    desc: 'Contributed to design discussions, operated in Scrum environment, wrote comprehensive unit tests with Jest/Enzyme, and participated in end-to-end testing with automated test suites.',
    tech: ['React', 'Redux', 'TypeScript', 'Jest', 'Mocha', 'NightWatch', 'Cucumber'],
  },
  {
    role: 'Software Engineer',
    company: 'HCL Technologies',
    client: 'Konica Minolta',
    project: 'Job & Device Management',
    period: 'Apr 2016 – Jul 2018',
    desc: 'Designed web pages, built JavaScript validations, and developed cross-browser compatible websites with responsive design and front-end debugging.',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
];

export default function Experience() {
  const timelineRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 0.1}s`;
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-sub">
          10+ years across MNCs — HCL, Capgemini, Infosys, Hitachi Vantara — serving global clients.
        </p>

        {/* Timeline */}
        <div className="timeline" ref={timelineRef}>
          {EXPERIENCES.map((exp) => (
            <div className="timeline-item" key={exp.period}>
              {/* Card — flex column */}
              <div className="timeline-card">

                {/* Header — flex between */}
                <div className="timeline-card__header">
                  <div className="timeline-card__role">{exp.role}</div>
                  <div className="timeline-card__period">{exp.period}</div>
                </div>

                <div className="timeline-card__company">
                  {exp.company} — <strong>{exp.client}</strong>
                </div>
                <div className="timeline-card__project">📁 {exp.project}</div>
                <div className="timeline-card__desc">{exp.desc}</div>

                {/* Tech chips — flex wrap */}
                <div className="tech-chips">
                  {exp.tech.map((t) => (
                    <span className="tech-chip" key={t}>{t}</span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
