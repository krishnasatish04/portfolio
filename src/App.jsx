import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* Each section is self-contained with its own .container */}
      </div>
      <Hero />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Contact />
    </>
  );
}
