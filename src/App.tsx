import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <div className="content-bg">
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
