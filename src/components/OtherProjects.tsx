import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OTHER_PROJECTS = [
  {
    title: "Stuart - Não Consegue Salvar o Universo",
    description: (
      <>Landing page <span className="line-through">NÃO</span> oficial da série.</>
    ),
    image: "/assets/images/stuart.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://stuart-serie.vercel.app/",
  },
  {
    title: "Helena Burger — Fast and Tasty",
    description:
      <>Landing page <span className="line-through">NÃO</span> oficial da melhor hamburgueria da cidade de Canoas/RS.</>,
    image: "/assets/images/helenaburger.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://helena-burger.vercel.app/",
  },

  {
    title: "Tela de Login Liquid Glass",
    description:
      "Interface de login moderna com efeito glassmorphism, validação de formulário e transições suaves.",
    image: "/assets/images/telaglass.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://login-react-git-main-lenins-projects-8b0ecd44.vercel.app/",
  },
  {
    title: "To-do List Interativa",
    description:
      "Aplicativo de gerenciamento de tarefas com funcionalidades completas de CRUD, interface limpa e responsiva.",
    image: "/assets/images/todolist.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://to-do-list-lenin-git-main-lenins-projects-8b0ecd44.vercel.app/",
  },

  {
    title: "Pet Love Landing",
    description:
      "Landing page responsiva para pet shop com animações AOS, design moderno e otimização SEO.",
    image: "/assets/images/petlove.jpg",
    tags: ["HTML", "CSS", "AOS", "SEO"],
    link: "https://petlove-brown.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Aplicativo de previsão do tempo com integração à API, geolocalização e interface intuitiva.",
    image: "/assets/images/previsao.jpg",
    tags: ["JavaScript", "API", "Geolocation"],
    link: "https://previsao-do-tempo-git-main-lenins-projects-8b0ecd44.vercel.app/",
  },
  {
    title: "Cardápio Digital",
    description:
      "Sistema de cardápio online para hamburgueria com carrinho de compras e API WhatsApp.",
    image: "/assets/images/burguer.jpg",
    tags: ["JavaScript", "Node.js", "WhatsApp API"],
    link: "https://cardapio-iota-red.vercel.app/",
  },
  {
    title: "Link Tree Personalizado",
    description:
      "Agregador de links das redes sociais com design minimalista e animações CSS personalizadas.",
    image: "/assets/images/link.jpg",
    tags: ["HTML", "CSS", "Animations"],
    link: "https://leninfontella.github.io/landing-page/",
  },
];

const GAP_PX = 24; // equivalente ao gap-6 do Tailwind (1.5rem)

// Define quantos cards ficam visíveis por breakpoint
function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  const width = window.innerWidth;
  if (width < 640) return 1; // mobile
  if (width < 1024) return 2; // tablet
  return 3; // desktop
}

export default function OtherProjects() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(getVisibleCount());

  // Estados para gerenciar a posição do toque
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Distância mínima em pixels para acionar o swipe
  const minSwipeDistance = 50;

  // Atualiza o número de cards visíveis ao redimensionar a tela
  useEffect(() => {
    function handleResize() {
      const newVisible = getVisibleCount();
      setVisible(newVisible);
      // Garante que o índice atual continue válido para o novo layout
      setCurrent((c) =>
        Math.min(c, Math.max(OTHER_PROJECTS.length - newVisible, 0)),
      );
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(OTHER_PROJECTS.length - visible, 0);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  // Handlers para os eventos de toque
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  const cardWidthPercent = 100 / visible;

  return (
    <section id="outros-projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 max-w-[60px] bg-white/40" />
          <span
            className="text-xs font-semibold tracking-[0.35em] text-gray-400 uppercase"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
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
              className="flex gap-6 carousel-slide select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: `translateX(calc(-${current} * (${cardWidthPercent}% + ${GAP_PX}px / ${visible})))`,
              }}
            >
              {OTHER_PROJECTS.map((project) => {
                const cardClassName =
                  "project-card glow-white-hover flex-shrink-0 border border-white/15 rounded-xl overflow-hidden bg-white/5 block";
                const cardStyle = {
                  width: `calc(${cardWidthPercent}% - ${(GAP_PX * (visible - 1)) / visible
                    }px)`,
                  minWidth: "220px",
                };

                const cardContent = (
                  <>
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
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
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
                            style={{ fontFamily: "Space Grotesk, sans-serif" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                );

                return project.link ? (
                  <a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClassName}
                    style={cardStyle}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div
                    key={project.title}
                    className={cardClassName}
                    style={cardStyle}
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${i === current
                  ? "bg-white w-6 h-1.5"
                  : "bg-white/30 w-1.5 h-1.5"
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
