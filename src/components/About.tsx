import { useEffect, useRef } from "react";
import { Code2, Database, Globe, Layers, Cpu, TrendingUp } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Globe, label: "Frontend Moderno" },
  { icon: Layers, label: "React & TypeScript" },
  { icon: Database, label: "Bancos de Dados" },
  { icon: Code2, label: "Node.js & APIs" },
  { icon: Cpu, label: "Arquitetura" },
  { icon: TrendingUp, label: "Full Stack" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.1 },
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="sobre" className="py-24 px-6">
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
            Sobre Mim
          </span>
        </div>

        {/* Main card */}
        <div className="section-card glow-white p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Text */}
            <div className="lg:col-span-3 space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Desenvolvedor com visão{" "}
                <span className="text-gradient">full stack</span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-base">
                Atuo no desenvolvimento de aplicações web com foco em interfaces
                modernas, escaláveis e centradas na experiência do usuário.
                Possuo sólida experiência em HTML, CSS e JavaScript, além de
                atuar com tecnologias como React, React Native, TypeScript e
                Tailwind CSS para construção de soluções performáticas e
                responsivas.
              </p>
              <p className="text-gray-300 leading-relaxed text-base">
                Minha atuação vai além do frontend. Tenho aprofundado
                conhecimentos em Node.js, desenvolvimento e consumo de APIs,
                autenticação, arquitetura de aplicações e boas práticas de
                engenharia de software. Também trabalho com bancos de dados
                relacionais e não relacionais, incluindo PostgreSQL e MongoDB,
                buscando sempre modelagens eficientes e soluções que garantam
                desempenho, escalabilidade e manutenibilidade.
              </p>
              <p className="text-gray-300 leading-relaxed text-base">
                Tenho uma visão orientada à entrega de valor, combinando
                conhecimento técnico, capacidade analítica e aprendizado
                contínuo para desenvolver soluções completas e alinhadas às
                necessidades do negócio. Meu objetivo é consolidar cada vez mais
                uma atuação full stack, ampliando constantemente meu repertório
                tecnológico e contribuindo para a construção de produtos
                robustos, inovadores e de alto impacto.
              </p>
            </div>

            {/* Highlights grid + imagem */}
            <div className="lg:col-span-2 flex flex-col gap-4 h-full">
              <div className="grid grid-cols-2 gap-4">
                {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="skill-badge border border-white/20 rounded-xl p-4 flex flex-col items-center gap-3 text-center bg-white/5"
                  >
                    <Icon size={22} className="text-white/80" />
                    <span
                      className="text-xs font-medium text-gray-300"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Imagem no espaço abaixo dos highlights */}
              <div className="flex-1 rounded-xl overflow-hidden bg-white/5">
                <img
                  src="/assets/images/highlight.png"
                  alt="Ilustração"
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>
          </div>

          {/* Badge image */}
          <div className="flex justify-center mt-10">
            <img
              src="/assets/images/423529.jpg"
              alt="Badge de certificação"
              className="w-24 h-24object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
