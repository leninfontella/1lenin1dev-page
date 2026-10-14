import { useEffect, useRef } from "react";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const smoothstep = (start: number, end: number, value: number) => {
  const progress = clamp((value - start) / (end - start));
  return progress * progress * (3 - 2 * progress);
};

export default function AboutTransition() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const showStaticScene = () => {
      section.style.setProperty("--bridge-inset-y", "0%");
      section.style.setProperty("--bridge-inset-x", "0%");
      section.style.setProperty("--bridge-radius", "0px");
      section.style.setProperty("--bridge-frame-scale", "1");
      section.style.setProperty("--bridge-image-scale", "1.05");
      section.style.setProperty("--bridge-image-y", "0px");
      section.style.setProperty("--bridge-copy-opacity", "1");
      section.style.setProperty("--bridge-copy-y", "0px");
      section.style.setProperty("--bridge-line-one-opacity", "1");
      section.style.setProperty("--bridge-line-two-opacity", "1");
      section.style.setProperty("--bridge-detail-opacity", "1");
      section.style.setProperty("--bridge-line-one-y", "0px");
      section.style.setProperty("--bridge-line-two-y", "0px");
      section.style.setProperty("--bridge-detail-y", "0px");
      section.style.setProperty("--bridge-shade-opacity", ".38");
      section.style.setProperty("--bridge-line-scale", "1");
    };

    if (reducedMotion.matches) {
      showStaticScene();
      return;
    }

    let animationFrame = 0;

    const updateScene = () => {
      animationFrame = 0;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / distance);
      const reveal = smoothstep(0, 0.42, progress);
      const imageReveal = smoothstep(0.14, 0.46, progress);
      const lineOneIn = smoothstep(0.08, 0.22, progress);
      const lineTwoIn = smoothstep(0.38, 0.52, progress);
      const detailIn = smoothstep(0.68, 0.82, progress);
      const imageFadeOut = smoothstep(0.82, 1, progress);
      const textFadeOut = smoothstep(0.9, 1, progress);
      const exitOpacity = 1 - textFadeOut;
      const lineOneOpacity = lineOneIn * exitOpacity;
      const lineTwoOpacity = lineTwoIn * exitOpacity;
      const detailOpacity = detailIn * exitOpacity;

      section.style.setProperty("--bridge-inset-y", `${18 * (1 - reveal)}%`);
      section.style.setProperty("--bridge-inset-x", `${12 * (1 - reveal)}%`);
      section.style.setProperty("--bridge-radius", `${30 * (1 - reveal)}px`);
      section.style.setProperty("--bridge-frame-scale", String(0.82 + reveal * 0.18));
      section.style.setProperty("--bridge-image-scale", String(1.12 - progress * 0.06));
      section.style.setProperty("--bridge-image-y", `${24 - progress * 48}px`);
      section.style.setProperty("--bridge-copy-opacity", "1");
      section.style.setProperty(
        "--bridge-copy-y",
        `${(1 - lineOneIn) * 12 - textFadeOut * 18}px`,
      );
      section.style.setProperty("--bridge-line-one-opacity", String(lineOneOpacity));
      section.style.setProperty("--bridge-line-two-opacity", String(lineTwoOpacity));
      section.style.setProperty("--bridge-detail-opacity", String(detailOpacity));
      section.style.setProperty("--bridge-line-one-y", `${(1 - lineOneIn) * 18}px`);
      section.style.setProperty("--bridge-line-two-y", `${(1 - lineTwoIn) * 18}px`);
      section.style.setProperty("--bridge-detail-y", `${(1 - detailIn) * 16}px`);
      section.style.setProperty(
        "--bridge-shade-opacity",
        String(0.96 - imageReveal * 0.74 + imageFadeOut * 0.72),
      );
      section.style.setProperty("--bridge-line-scale", String(detailOpacity));
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(updateScene);
    };

    updateScene();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-bridge" aria-label="Introdução à seção Sobre mim">
      <div className="about-bridge-sticky">
        <div className="about-bridge-frame">
          <img
            className="about-bridge-image"
            src="/assets/images/about-transition-v5.png"
            alt="Pequeno perfil abstrato oculto entre fluxos, conexões e fragmentos digitais"
            loading="lazy"
            decoding="async"
          />
          <div className="about-bridge-shade" />
        </div>

        <div className="about-bridge-copy">
          <span>DA TECNOLOGIA ÀS PESSOAS</span>
          <h2>
            <span>Por trás de cada interface,</span>
            <span>existe uma história.</span>
          </h2>
          <p>Conheça quem transforma ideias em experiências digitais.</p>
          <i aria-hidden="true" />
        </div>

        <span className="about-bridge-index" aria-hidden="true">01 / SOBRE</span>
      </div>
    </section>
  );
}
