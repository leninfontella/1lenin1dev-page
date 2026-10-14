import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type OtherProject = {
  title: string;
  description: ReactNode;
  image: string;
  imagePosition?: string;
  tags: string[];
  link: string;
};

const OTHER_PROJECTS: OtherProject[] = [
  {
    title: "Stuart — Não Consegue Salvar o Universo",
    description: (
      <>
        Landing page <span className="line-through">NÃO</span> oficial da série,
        construída como um experimento visual responsivo e cheio de personalidade.
      </>
    ),
    image: "/assets/images/stuart.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://stuart-serie.vercel.app/",
  },
  {
    title: "Helena Burger — Fast and Tasty",
    description: (
      <>
        Landing page <span className="line-through">NÃO</span> oficial da melhor
        hamburgueria da cidade de Canoas/RS. Um projeto para praticar UI moderna
        e animações.
      </>
    ),
    image: "/assets/images/helenaburger.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://burgerhelena.vercel.app/",
  },
  {
    title: "IA.AHH!",
    description: "Entre no dojo. Tome porrada verbal. Uma experiência de conversa com inteligência artificial e identidade própria.",
    image: "/assets/images/iaahh.jpg",
    imagePosition: "top",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://iahh-combat-chat-ai.vercel.app/",
  },
  {
    title: "Tela de Login Liquid Glass",
    description: "Interface de login moderna com efeito glassmorphism, validação de formulário e transições suaves.",
    image: "/assets/images/telaglass.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://login-react-git-main-lenins-projects-8b0ecd44.vercel.app/",
  },
  {
    title: "To-do List Interativa",
    description: "Aplicativo de gerenciamento de tarefas com funcionalidades completas de CRUD, interface limpa e responsiva.",
    image: "/assets/images/todolist.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://to-do-list-lenin-git-main-lenins-projects-8b0ecd44.vercel.app/",
  },
  {
    title: "Pet Love Landing",
    description: "Landing page responsiva para pet shop com animações AOS, design moderno e otimização SEO.",
    image: "/assets/images/petlove.jpg",
    tags: ["HTML", "CSS", "AOS", "SEO"],
    link: "https://petlove-brown.vercel.app/",
  },
  {
    title: "Weather App",
    description: "Aplicativo de previsão do tempo com integração à API, geolocalização e interface intuitiva.",
    image: "/assets/images/previsao.jpg",
    tags: ["JavaScript", "API", "Geolocation"],
    link: "https://previsao-do-tempo-git-main-lenins-projects-8b0ecd44.vercel.app/",
  },
  {
    title: "Cardápio Digital",
    description: "Sistema de cardápio online para hamburgueria com carrinho de compras e integração à API do WhatsApp.",
    image: "/assets/images/burguer.jpg",
    tags: ["JavaScript", "Node.js", "WhatsApp API"],
    link: "https://cardapio-iota-red.vercel.app/",
  },
  {
    title: "Link Tree Personalizado",
    description: "Agregador de links das redes sociais com design minimalista e animações CSS personalizadas.",
    image: "/assets/images/link.jpg",
    tags: ["HTML", "CSS", "Animations"],
    link: "https://leninfontella.github.io/landing-page/",
  },
];

export default function OtherProjects() {
  const [current, setCurrent] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const scrollFrame = useRef<number | null>(null);

  const goTo = (index: number) => {
    const nextIndex = (index + OTHER_PROJECTS.length) % OTHER_PROJECTS.length;
    const viewport = viewportRef.current;
    const card = cardRefs.current[nextIndex];

    setCurrent(nextIndex);
    if (!viewport || !card) return;

    const viewportRect = viewport.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    viewport.scrollTo({
      left: viewport.scrollLeft + cardRect.left - viewportRect.left,
      behavior: "smooth",
    });
  };

  const updateCurrentFromScroll = () => {
    if (scrollFrame.current !== null) return;

    scrollFrame.current = window.requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const viewportLeft = viewport.getBoundingClientRect().left;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const distance = Math.abs(card.getBoundingClientRect().left - viewportLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrent(closestIndex);
      scrollFrame.current = null;
    });
  };

  useEffect(() => {
    return () => {
      if (scrollFrame.current !== null) window.cancelAnimationFrame(scrollFrame.current);
    };
  }, []);

  return (
    <section id="outros-projetos" className="other-showcase-section">
      <div className="other-showcase-shell">
        <div className="other-showcase-heading">
          <span aria-hidden="true" />
          <p className="portfolio-section-title">Outros Projetos</p>

        </div>

        <div className="other-showcase-frame">
          <header className="other-showcase-toolbar">
            <div className="other-showcase-title">

            </div>

            <div className="other-showcase-brand" aria-hidden="true">

            </div>



            <div className="other-showcase-controls">
              <button type="button" onClick={() => goTo(current - 1)} aria-label="Projeto anterior">
                <ChevronLeft aria-hidden="true" />
              </button>
              <button type="button" onClick={() => goTo(current + 1)} aria-label="Próximo projeto">
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </header>

          <div
            ref={viewportRef}
            className="other-showcase-viewport"
            onScroll={updateCurrentFromScroll}
          >
            <div className="other-showcase-track">
              {OTHER_PROJECTS.map((project, index) => (
                <article
                  key={project.title}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className={`other-showcase-card${index === current ? " is-active" : ""}`}
                  aria-label={`${project.title}, projeto ${index + 1} de ${OTHER_PROJECTS.length}`}
                >
                  <div className="other-showcase-media">
                    <img
                      src={project.image}
                      alt={`Prévia do projeto ${project.title}`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      style={{ objectPosition: project.imagePosition ?? "center" }}
                    />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="other-showcase-copy">
                    <span className="other-showcase-eyebrow">Projeto em destaque</span>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>

                    <div className="other-showcase-tags" aria-label="Tecnologias utilizadas">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="other-showcase-link"
                      tabIndex={index === current ? 0 : -1}
                    >
                      Ver projeto
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <footer className="other-showcase-footer">
            <div className="other-showcase-progress" aria-hidden="true">
              <span style={{ width: `${((current + 1) / OTHER_PROJECTS.length) * 100}%` }} />
            </div>
            <p aria-live="polite">
              <strong>{String(current + 1).padStart(2, "0")}</strong>
              <span>/</span>
              {String(OTHER_PROJECTS.length).padStart(2, "0")}
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
