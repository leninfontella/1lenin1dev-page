import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const render = () => {
      frame = 0;
      const scroll = Math.min(window.scrollY, window.innerHeight * 1.2);
      if (sceneRef.current) {
        sceneRef.current.style.transform = `translate3d(${pointerX * -58}px, ${scroll * 0.42 + pointerY * -38}px, 0) scale(1.14)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pointerX * 96}px, ${scroll * 0.2 + pointerY * 68}px, 0)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(${pointerX * 24}px, ${scroll * 0.62 + pointerY * 18}px, 0)`;
        contentRef.current.style.opacity = String(Math.max(0, 1 - scroll / (window.innerHeight * 0.62)));
      }
    };

    const requestRender = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX / window.innerWidth - 0.5;
      pointerY = event.clientY / window.innerHeight - 0.5;
      requestRender();
    };

    const onPointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
      requestRender();
    };

    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    return () => {
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="code-hero">
      <div ref={sceneRef} className="code-hero-scene" aria-hidden="true" />
      <div className="code-hero-vignette" aria-hidden="true" />
      <div ref={glowRef} className="code-hero-glow" aria-hidden="true" />
      <div className="code-hero-grid" aria-hidden="true" />

      <div ref={contentRef} className="code-hero-content">
        <div className="code-hero-eyebrow">
          <span>01</span>
          <i />
          FULL STACK DEVELOPER
        </div>
        <h1>Lênin Fontella</h1>
        <p>Interfaces modernas. Soluções escaláveis.<br />Código que entrega valor.</p>
        <div className="code-hero-actions">
          <a href="#projetos">Ver projetos <ArrowUpRight size={16} /></a>
          <a href="#contato" className="code-hero-ghost">Vamos conversar</a>
        </div>
      </div>

      <div className="code-hero-status">
        <span><b /> DISPONÍVEL PARA NOVOS PROJETOS</span>
        <span>PORTO ALEGRE · BR</span>
      </div>

      <button className="code-hero-scroll" onClick={() => document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })} aria-label="Rolar para a seção Sobre">
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
