import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.content-bg > section');
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

    const energy = document.querySelector<HTMLElement>('.scroll-energy');
    let lastY = window.scrollY;
    let energyTimer = 0;
    const onScrollEnergy = () => {
      if (!energy || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const delta = window.scrollY - lastY;
      lastY = window.scrollY;
      const strength = Math.min(1, Math.max(.18, Math.abs(delta) / 46));
      const targetY = delta >= 0 ? window.innerHeight - 150 : 12;
      energy.style.setProperty('--energy-strength', strength.toFixed(2));
      energy.style.transform = `translate3d(0, ${targetY}px, 0) scaleX(${(.72 + strength * .28).toFixed(2)})`;
      energy.classList.add('is-active');
      window.clearTimeout(energyTimer);
      energyTimer = window.setTimeout(() => energy.classList.remove('is-active'), 150);
    };
    window.addEventListener('scroll', onScrollEnergy, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScrollEnergy);
      window.clearTimeout(energyTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="scroll-energy" aria-hidden="true" />
      <main>
        <Hero />
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
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
