import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OTHER_PROJECTS = [
  {
    title: 'To-do List Interativa',
    description: 'Aplicativo de gerenciamento de tarefas com funcionalidades completas de CRUD, interface limpa e responsiva.',
    image: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=600',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Tela de Login Glassmorphism',
    description: 'Interface de login moderna com efeito glassmorphism, validação de formulário e transições suaves.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Pet Love Landing',
    description: 'Landing page responsiva para pet shop com animações AOS, design moderno e otimização SEO.',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['HTML', 'CSS', 'AOS', 'SEO'],
  },
  {
    title: 'Weather App',
    description: 'Aplicativo de previsão do tempo com integração à API, geolocalização e interface intuitiva.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['JavaScript', 'API', 'Geolocation'],
  },
  {
    title: 'Cardápio Digital',
    description: 'Sistema de cardápio online para hamburgueria com carrinho de compras e API WhatsApp.',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['JavaScript', 'Node.js', 'WhatsApp API'],
  },
  {
    title: 'Link Tree Personalizado',
    description: 'Agregador de links das redes sociais com design minimalista e animações CSS personalizadas.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['HTML', 'CSS', 'Animations'],
  },
];

const VISIBLE = 3;

export default function OtherProjects() {
  const [current, setCurrent] = useState(0);
  const maxIndex = OTHER_PROJECTS.length - VISIBLE;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section id="outros-projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 max-w-[60px] bg-white/40" />
          <span
            className="text-xs font-semibold tracking-[0.35em] text-gray-400 uppercase"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Outros Projetos
          </span>
        </div>

        <div className="section-card glow-white p-8 md:p-10">
          {/* Header row with nav arrows */}
          <div className="flex items-center justify-end mb-8">
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={current === 0}
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                disabled={current >= maxIndex}
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Próximo"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Carousel track */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 carousel-slide"
              style={{ transform: `translateX(calc(-${current} * (33.333% + 6px)))` }}
            >
              {OTHER_PROJECTS.map((project) => (
                <div
                  key={project.title}
                  className="project-card glow-white-hover flex-shrink-0 border border-white/15 rounded-xl overflow-hidden bg-white/5"
                  style={{ width: 'calc(33.333% - 4px)', minWidth: '260px' }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                  <div className="p-5">
                    <h4
                      className="font-bold text-white text-sm mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-white/20 text-gray-400 px-2 py-0.5 rounded-full"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current ? 'bg-white w-6 h-1.5' : 'bg-white/30 w-1.5 h-1.5'
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
