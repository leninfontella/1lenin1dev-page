import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  LayoutTemplate,
  Lightbulb,
  MonitorSmartphone,
  RefreshCw,
  Search,
  Sparkles,
} from "lucide-react";
import {
  JavaScriptIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "./TechIcons";

const STAGES = [
  {
    key: "idea",
    number: "01",
    title: "Ideia",
    verb: "Entender",
    description:
      "Todo produto começa com uma pergunta. Transformo necessidades e referências em uma direção clara.",
    tags: ["Estratégia", "Pesquisa", "Planejamento"],
    accent: "#f2bd57",
    Icon: Lightbulb,
  },
  {
    key: "interface",
    number: "02",
    title: "Interface",
    verb: "Desenhar",
    description:
      "Design que organiza, comunica e conduz. Cada elemento tem uma função dentro da experiência.",
    tags: ["UI / UX", "Responsividade", "Tailwind"],
    accent: "#5ba8ff",
    Icon: LayoutTemplate,
  },
  {
    key: "codigo",
    number: "03",
    title: "Código",
    verb: "Construir",
    description:
      "A interface ganha vida com código limpo, reutilizável e preparado para evoluir.",
    tags: ["React", "TypeScript", "JavaScript", "Tailwind"],
    accent: "#a78bfa",
    Icon: Code2,
  },
  {
    key: "experiencia",
    number: "04",
    title: "Experiência",
    verb: "Entregar",
    description:
      "O resultado é uma experiência rápida, intuitiva e agradável em qualquer tela.",
    tags: ["Performance", "Acessibilidade", "Deploy"],
    accent: "#5ee3a1",
    Icon: Sparkles,
  },
  {
    key: "evolucao",
    number: "05",
    title: "Evolução",
    verb: "Aprimorar",
    description:
      "Depois do lançamento, observo, aprendo e evoluo o produto com base no uso real.",
    tags: ["Testes", "Feedback", "Melhoria contínua"],
    accent: "#ff8066",
    Icon: RefreshCw,
  },
  {
    key: "final",
    number: "06",
    title: "Lênin Fontella",
    verb: "Criar",
    description: "Ideias transformadas em experiências digitais.",
    tags: [],
    accent: "#f2f2f2",
    Icon: Code2,
  },
] as const;

const TECHNOLOGIES = [
  { name: "React", Icon: ReactIcon, key: "react" },
  { name: "TypeScript", Icon: TypeScriptIcon, key: "typescript" },
  { name: "JavaScript", Icon: JavaScriptIcon, key: "javascript" },
  { name: "Tailwind", Icon: TailwindIcon, key: "tailwind" },
];

const ROLE_TITLES = [
  "Frontend Developer",
  "Backend Developer",
  "Programmer",
  "Coder",
  "Database",
];

function NotebookScreen({ stage }: { stage: (typeof STAGES)[number]["key"] }) {
  if (stage === "idea") {
    return (
      <div className="process-screen-content screen-idea">
        <div className="screen-status"><span>01 · DESCOBERTA</span><i>EM CONSTRUÇÃO</i></div>
        <div className="idea-symbol"><Lightbulb /></div>
        <div className="idea-flow">
          <span><Search />Problema</span><ArrowRight /><span>Possibilidade</span><ArrowRight /><span>Solução</span>
        </div>
        <p>CLAREZA ANTES DO CÓDIGO</p>
      </div>
    );
  }

  if (stage === "interface") {
    return (
      <div className="process-screen-content screen-interface">
        <div className="mock-browser-bar"><i /><i /><i /><span>DESIGN SYSTEM · 02</span></div>
        <div className="interface-workspace">
          <aside><b>LF</b><i /><i /><i /><i /></aside>
          <div className="interface-canvas">
            <div className="interface-heading"><small>INTERFACE</small><span /></div>
            <div className="interface-hero-block"><b>Design que guia.</b><i /></div>
            <div className="interface-components"><span /><span /><span /></div>
          </div>
          <div className="interface-phone"><i /><b>UI</b><span /><span /></div>
        </div>
      </div>
    );
  }

  if (stage === "codigo") {
    return (
      <div className="process-screen-content screen-code">
        <div className="code-tabs"><span>Hero.tsx</span><span>styles.css</span><i>●</i></div>
        <div className="code-workspace">
          <div className="code-rail"><b>01</b><b>02</b><b>03</b><b>04</b><b>05</b><b>06</b></div>
          <pre aria-label="Exemplo de componente React"><code><em>const</em> experience = {'{'}{"\n"}  idea: <strong>true</strong>,{"\n"}  interface: <strong>true</strong>,{"\n"}  code: <strong>\"clean\"</strong>{"\n"}{'}'};{"\n\n"}<span>return</span> &lt;Experience /&gt;;</code></pre>
          <div className="code-mark"><ReactIcon size={72} /></div>
        </div>
        <div className="code-terminal"><CheckCircle2 /> build completed <span>0 errors</span></div>
      </div>
    );
  }

  if (stage === "experiencia") {
    return (
      <div className="process-screen-content screen-experience">
        <div className="experience-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="experience-window">
          <div className="experience-bar"><span /><span /><span /><i>lenin.dev</i></div>
          <div className="experience-product">
            <small>PRONTO PARA USAR</small>
            <strong>EXPERIÊNCIA</strong>
            <p>rápida · intuitiva · responsiva</p>
            <div><span>Explorar</span><ArrowUpRight /></div>
          </div>
        </div>
        <div className="experience-badges">
          <span><MonitorSmartphone /> Responsivo</span>
          <span><Sparkles /> Intuitivo</span>
          <span><CheckCircle2 /> Acessível</span>
        </div>
      </div>
    );
  }

  if (stage === "evolucao") {
    return (
      <div className="process-screen-content screen-evolution">
        <div className="evolution-status"><span>05 · MELHORIA CONTÍNUA</span><i>SEMPRE EVOLUINDO</i></div>
        <div className="evolution-cycle">
          <div><RefreshCw /></div>
          <strong>EVOLUIR</strong>
          <p>testar · ouvir · aprimorar</p>
        </div>
        <div className="evolution-steps">
          <span><b>01</b>Testar</span><i />
          <span><b>02</b>Ouvir</span><i />
          <span><b>03</b>Aprimorar</span>
        </div>
      </div>
    );
  }

  return (
    <div className="process-screen-content screen-finale">
      <div className="finale-code-mark" aria-hidden="true"><span>&lt;</span><span>/&gt;</span></div>
      <small>FULL STACK DEVELOPER</small>
      <strong>Lênin Fontella</strong>
      <p>IDEIA · INTERFACE · CÓDIGO · EXPERIÊNCIA · EVOLUÇÃO</p>
      <div className="finale-cursor"><i /></div>
    </div>
  );
}

function CodeCloud({ visible }: { visible: boolean }) {
  return (
    <div className={`process-code-cloud ${visible ? "is-active" : ""}`} aria-hidden="true">
      <code><em>const</em> ideia = <b>true</b>;</code>
      <code>&lt;<span>Experience</span> /&gt;</code>
      <code><em>display</em>: grid;</code>
      <code>npm run <span>build</span></code>
      <code>{'{'} cleanCode: <b>true</b> {'}'}</code>
      <code><em>interface</em> Product {'{'}</code>
      <code>git push origin <span>main</span></code>
      <code>@media (<b>responsive</b>)</code>
      <code>return <span>experience</span>;</code>
      <code>while (idea) {'{'} <b>create()</b> {'}'}</code>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    let lastStage = 0;

    const updateScene = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));

      const nextStage = Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length));
      if (nextStage !== lastStage) {
        lastStage = nextStage;
        setActiveStage(nextStage);
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateScene);
    };

    updateScene();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="process-hero">
      <div className="process-hero-sticky">
        <header className={`process-hero-title ${activeStage === STAGES.length - 1 ? "is-hidden" : ""}`}>
          <p className="process-hero-roles" aria-live="polite">
            {ROLE_TITLES.map((role, index) => (
              <span
                key={role}
                className={index === activeStage ? "is-active" : ""}
                aria-hidden={index !== activeStage}
              >
                {role}
              </span>
            ))}
          </p>
          <h1>Lênin Fontella</h1>
        </header>

        <div className="process-device">
          <img
            className="process-device-shell"
            src="/assets/hero/notebook.webp"
            alt="Notebook apresentando o processo criativo de Lênin Fontella"
            fetchPriority="high"
          />
          <div className="process-device-screen" aria-live="polite">
            {STAGES.map((stage, index) => (
              <section
                key={stage.key}
                className={`process-screen process-screen-${stage.key} ${index === activeStage ? "is-active" : ""}`}
                aria-hidden={index !== activeStage}
                style={{ "--stage-accent": stage.accent } as CSSProperties}
              >
                <NotebookScreen stage={stage.key} />
              </section>
            ))}
          </div>
        </div>

        <CodeCloud visible={activeStage === STAGES.length - 1} />

        <div className="process-card-stage" aria-live="polite">
          {STAGES.slice(0, -1).map((stage, index) => {
            const Icon = stage.Icon;
            return (
              <article
                key={stage.key}
                className={`process-card ${index === activeStage ? "is-active" : ""}`}
                aria-hidden={index !== activeStage}
                style={{ "--stage-accent": stage.accent } as CSSProperties}
              >
                <div className="process-card-meta">
                  <span>{stage.number}</span>
                  <span>PROCESSO CRIATIVO</span>
                </div>
                <div className="process-card-heading">
                  <div><Icon /></div>
                  <span>{stage.verb}</span>
                </div>
                <h2>{stage.title}</h2>
                <p>{stage.description}</p>

                {stage.key === "codigo" ? (
                  <div className="process-tech-list" aria-label="Tecnologias utilizadas">
                    {TECHNOLOGIES.map(({ name, Icon: TechIcon, key }) => (
                      <div className="process-tech" data-tech={key} key={name} title={name}>
                        <TechIcon size={20} />
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="process-tags">
                    {stage.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                )}

                {stage.key === "evolucao" && (
                  <a className="process-card-link" href="#projetos">
                    Conheça meus projetos <ArrowUpRight size={15} />
                  </a>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
