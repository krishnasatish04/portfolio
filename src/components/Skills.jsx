import { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const SKILLS = [
  {
    icon: '⚛️',
    title: 'Frontend Core',
    tags: ['React.js', 'React Hooks', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3 Flexbox'],
  },
  {
    icon: '🗃️',
    title: 'State Management',
    tags: ['Redux', 'Redux Saga', 'Context API'],
  },
  {
    icon: '🎨',
    title: 'UI Libraries',
    tags: ['Material UI', 'Ant Design', 'Bootstrap', 'PrimeReact'],
  },
  {
    icon: '🧪',
    title: 'Testing',
    tags: ['Jest', 'Enzyme', 'React Testing Library', 'Mocha', 'Cucumber'],
  },
  {
    icon: '🛠️',
    title: 'Backend & APIs',
    tags: ['Node.js', 'REST APIs', 'MongoDB', 'Django'],
  },
  {
    icon: '🚀',
    title: 'DevOps & Tools',
    tags: ['Git / GitHub', 'Jenkins', 'CI/CD', 'Jira', 'Bitbucket', 'VS Code'],
  },
  {
    icon: '🤖',
    title: 'AI Tools',
    tags: ['ChatGPT', 'Claude', 'Cursor', 'Lovable'],
  },
  {
    icon: '☁️',
    title: 'Cloud',
    tags: ['Azure AZ-900', 'AWS Practitioner'],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  // Scroll reveal with IntersectionObserver
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.skill-card');
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
      { threshold: 0.12 }
    );
    cards.forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.07}s`;
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <p className="section-label">What I bring</p>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-sub">
          A comprehensive toolkit built across 10+ years of enterprise-grade web development.
        </p>

        {/* Flexbox wrapping row */}
        <div className="skills__flex">
          {SKILLS.map((skill) => (
            <div className="skill-card" key={skill.title}>
              {/* Icon */}
              <div className="skill-card__icon">{skill.icon}</div>
              {/* Title */}
              <div className="skill-card__title">{skill.title}</div>
              {/* Tags — flex wrap row */}
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
