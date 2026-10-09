import { useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import OtherProjects from "./OtherProjects";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 },
    );
    const cards = sectionRef.current?.querySelectorAll(".featured-project");
    cards?.forEach((card) => observer.observe(card));
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projetos" className="py-24 px-6">
      <div
        className="max-w-6xl mx-auto"
        ref={sectionRef}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 max-w-[60px] bg-white/40" />
          <span
            className="text-xs font-semibold tracking-[0.35em] text-gray-400 uppercase"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Projetos
          </span>
        </div>

        {/* Featured Project - Getsêmani */}
        <div className="featured-project accent-gold section-card glow-white mb-12 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image side */}
            <div className="relative overflow-hidden min-h-[280px] lg:min-h-0">
              <img
                src="/assets/projects/getsemani.jpg"
                alt="Getsêmani"
                className="project-image w-full h-full object-cover"
                style={{ minHeight: "280px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 lg:block hidden" />
              <div className="absolute top-4 left-4">
                <span
                  className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Destaque
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="project-content p-8 md:p-12 flex flex-col justify-center">
              <p
                className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Criador & Desenvolvedor
              </p>
              <h3
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Getsêmani
              </h3>
              <p
                className="text-sm font-semibold text-gray-300 mb-4 tracking-wide"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Painel de Manifestação
              </p>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Aplicação digital criada para transformar desejos em intenções
                presentes. Uma experiência imersiva e acolhedora para visualizar,
                sentir e manifestar aquilo que se deseja como se já fosse realidade.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "TypeScript", "Tailwind CSS", "PWA"].map((tag) => (
                  <span
                    key={tag}
                    className="project-tag text-xs border border-white/30 text-gray-300 px-3 py-1 rounded-full"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://getsemani-manifest.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-cta inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 rounded-full px-5 py-2.5 transition-all duration-300 w-fit"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Ver Projeto <ExternalLink className="project-cta-icon" size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Project - Altrum */}
        <div className="featured-project accent-blue section-card glow-white mb-12 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image side */}
            <div className="relative overflow-hidden min-h-[280px] lg:min-h-0 lg:order-2">
              <img
                src="/assets/projects/altrum.jpeg"
                alt="Altrum"
                className="project-image w-full h-full object-cover"
                style={{ minHeight: "280px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60 lg:block hidden" />
              <div className="absolute top-4 left-4">
                <span
                  className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Destaque
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="project-content p-8 md:p-12 flex flex-col justify-center lg:order-1">
              <p
                className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Criador & Desenvolvedor
              </p>
              <h3
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Altrum
              </h3>
              <p
                className="text-sm font-semibold text-gray-300 mb-4 tracking-wide"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Plataforma de Gamificação Digital
              </p>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Sistema completo de gamificação para doações digitais com moedas
                virtuais, rankings, histórico de atividades e perfis
                personalizados. Sistema digital que transforma doações em
                experiências interativas, incentivando ações solidárias por meio
                de recompensas e rankings.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["JavaScript", "Node.js", "MongoDB"].map((tag) => (
                  <span
                    key={tag}
                    className="project-tag text-xs border border-white/30 text-gray-300 px-3 py-1 rounded-full"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://altrums.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-cta inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 rounded-full px-5 py-2.5 transition-all duration-300 w-fit"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Ver Projeto <ExternalLink className="project-cta-icon" size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Project - Number Game */}
        <div className="featured-project accent-violet section-card glow-white mb-12 overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[540px]">
            {/* Image side */}
            <div className="relative overflow-hidden min-h-[320px] lg:min-h-full">
              <img
                src="/assets/projects/numbergame.png"
                alt="Number Game"
                className="project-image w-full h-full object-cover min-h-[320px] lg:min-h-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 lg:block hidden" />
              <div className="absolute top-4 left-4">
                <span
                  className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Destaque
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="project-content p-8 md:p-14 lg:p-16 flex flex-col justify-center min-h-[320px] lg:min-h-[540px]">
              <p
                className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-3"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Criador & Desenvolvedor
              </p>
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Number Game
              </h3>
              <p
                className="text-base font-semibold text-gray-300 mb-4 tracking-wide"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Jogo Mobile de Adivinhação
              </p>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                Jogo mobile interativo de adivinhação de números desenvolvido com
                foco em experiência do usuário, design moderno e animações fluidas.
                Desafie seu raciocínio e sua sorte tentando acertar o número secreto,
                acumular pontos e bater novos recordes.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "TypeScript", "Tailwind CSS", "Vite"].map((tag) => (
                  <span
                    key={tag}
                    className="project-tag text-xs md:text-sm border border-white/30 text-gray-300 px-3.5 py-1 rounded-full"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://number-game-luck.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-cta inline-flex items-center gap-2 text-sm md:text-base font-semibold text-white border border-white/30 rounded-full px-6 py-3 transition-all duration-300 w-fit"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Ver Projeto <ExternalLink className="project-cta-icon" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <OtherProjects />
    </section>
  );
}
