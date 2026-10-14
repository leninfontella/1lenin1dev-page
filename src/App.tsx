import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutTransition from './components/AboutTransition';
import About from './components/About';
import ProjectsTransition from './components/ProjectsTransition';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactTransition from './components/ContactTransition';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const projectsSection = document.querySelector<HTMLElement>('.content-bg > #projetos');
    projectsSection?.classList.remove('page-section-transition', 'page-section-visible');
    projectsSection?.style.removeProperty('--section-order');

    const sections = document.querySelectorAll<HTMLElement>(
      '.content-bg > section:not(.projects-bridge):not(.scroll-bridge):not(#projetos)',
    );
    sections.forEach((section, index) => {
      section.classList.add('page-section-transition');
      section.style.setProperty('--section-order', String(index));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('page-section-visible', entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: '-7% 0px -7% 0px' },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <AboutTransition />
        <div
          className="content-bg"
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty(
              "--pointer-x",
              `${event.clientX - rect.left}px`,
            );
            event.currentTarget.style.setProperty(
              "--pointer-y",
              `${event.clientY - rect.top}px`,
            );
          }}
        >
          <About />
          <ProjectsTransition />
          <Projects />
          <Skills />
          <ContactTransition />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
