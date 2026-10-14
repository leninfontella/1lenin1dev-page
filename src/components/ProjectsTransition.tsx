import { useEffect, useRef } from "react";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const smoothstep = (start: number, end: number, value: number) => {
  const progress = clamp((value - start) / (end - start));
  return progress * progress * (3 - 2 * progress);
};

export default function ProjectsTransition() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.style.setProperty("--projects-inset-y", "0%");
      section.style.setProperty("--projects-inset-x", "0%");
      section.style.setProperty("--projects-radius", "0px");
      section.style.setProperty("--projects-frame-scale", "1");
      section.style.setProperty("--projects-image-scale", "1.04");
      section.style.setProperty("--projects-image-x", "0px");
      section.style.setProperty("--projects-copy-opacity", "1");
      section.style.setProperty("--projects-copy-y", "0px");
      section.style.setProperty("--projects-line-one-opacity", "1");
      section.style.setProperty("--projects-line-two-opacity", "1");
      section.style.setProperty("--projects-detail-opacity", "1");
      section.style.setProperty("--projects-line-one-y", "0px");
      section.style.setProperty("--projects-line-two-y", "0px");
      section.style.setProperty("--projects-detail-y", "0px");
      section.style.setProperty("--projects-white-opacity", ".18");
      section.style.setProperty("--projects-line-scale", "1");
      return;
    }

    let animationFrame = 0;

    const updateScene = () => {
      animationFrame = 0;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / distance);
      const reveal = smoothstep(0.05, 0.43, progress);
      const lineOneIn = smoothstep(0.08, 0.22, progress);
      const lineTwoIn = smoothstep(0.38, 0.52, progress);
      const detailIn = smoothstep(0.68, 0.82, progress);
      const fadeOut = smoothstep(0.95, 1, progress);
      const exitOpacity = 1 - fadeOut;
      const lineOneOpacity = lineOneIn * exitOpacity;
      const lineTwoOpacity = lineTwoIn * exitOpacity;
      const detailOpacity = detailIn * exitOpacity;

      section.style.setProperty("--projects-inset-y", `${16 * (1 - reveal)}%`);
      section.style.setProperty("--projects-inset-x", `${10 * (1 - reveal)}%`);
      section.style.setProperty("--projects-radius", `${28 * (1 - reveal)}px`);
      section.style.setProperty("--projects-frame-scale", String(0.84 + reveal * 0.16));
      section.style.setProperty("--projects-image-scale", String(1.1 - progress * 0.06));
      section.style.setProperty("--projects-image-x", `${18 - progress * 36}px`);
      section.style.setProperty("--projects-copy-opacity", "1");
      section.style.setProperty(
        "--projects-copy-y",
        `${(1 - lineOneIn) * 12 - fadeOut * 16}px`,
      );
      section.style.setProperty("--projects-line-one-opacity", String(lineOneOpacity));
      section.style.setProperty("--projects-line-two-opacity", String(lineTwoOpacity));
      section.style.setProperty("--projects-detail-opacity", String(detailOpacity));
      section.style.setProperty("--projects-line-one-y", `${(1 - lineOneIn) * 18}px`);
      section.style.setProperty("--projects-line-two-y", `${(1 - lineTwoIn) * 18}px`);
      section.style.setProperty("--projects-detail-y", `${(1 - detailIn) * 16}px`);
      section.style.setProperty(
        "--projects-white-opacity",
        String(0.9 - reveal * 0.74 + fadeOut * 0.76),
      );
      section.style.setProperty("--projects-line-scale", String(detailOpacity));
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
    <section
      ref={sectionRef}
      className="projects-bridge"
      aria-label="Introdução à seção Projetos"
    >
      <div className="projects-bridge-sticky">
        <div className="projects-bridge-frame">
          <img
            className="projects-bridge-image"
            src="/assets/images/projects-transition.jpg"
            alt="Interfaces digitais evoluindo de wireframes para produtos finalizados"
            loading="lazy"
            decoding="async"
          />
          <div className="projects-bridge-shade" />
        </div>

        <div className="projects-bridge-copy">
          <span>DA IDEIA AO PRODUTO</span>
          <h2>
            <span>Projetos são ideias</span>
            <span>que aprenderam a funcionar.</span>
          </h2>
          <p>Explore soluções construídas para resolver, comunicar e evoluir.</p>
          <i aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
