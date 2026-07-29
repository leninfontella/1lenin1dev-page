import { useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import OtherProjects from "./OtherProjects";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal");
        });
      },
      { threshold: 0.05 },
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="projetos" className="py-24 px-6">
      <div
        className="max-w-6xl mx-auto"
        ref={sectionRef}
        style={{ opacity: 0 }}
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

        {/* Featured Project */}
        <div className="section-card glow-white mb-12 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image side */}
            <div className="relative overflow-hidden min-h-[280px] lg:min-h-0">
              <img
                src="/assets/projects/altrum.jpeg"
                alt="Altrum"
                className="w-full h-full object-cover"
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
            <div className="p-8 md:p-12 flex flex-col justify-center">
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
                    className="text-xs border border-white/30 text-gray-300 px-3 py-1 rounded-full"
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
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 rounded-full px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300 w-fit"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Ver Projeto <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <OtherProjects />
    </section>
  );
}
