import { useEffect, useRef } from "react";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const smoothstep = (start: number, end: number, value: number) => {
  const progress = clamp((value - start) / (end - start));
  return progress * progress * (3 - 2 * progress);
};

export default function SkillsTransition() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.style.setProperty("--archive-inset-y", "0%");
      section.style.setProperty("--archive-inset-x", "0%");
      section.style.setProperty("--archive-radius", "0px");
      section.style.setProperty("--archive-frame-scale", "1");
      section.style.setProperty("--archive-image-scale", "1.04");
      section.style.setProperty("--archive-image-x", "0px");
      section.style.setProperty("--archive-copy-opacity", "1");
      section.style.setProperty("--archive-copy-y", "0px");
      section.style.setProperty("--archive-line-one-opacity", "1");
      section.style.setProperty("--archive-line-two-opacity", "1");
      section.style.setProperty("--archive-detail-opacity", "1");
      section.style.setProperty("--archive-line-one-y", "0px");
      section.style.setProperty("--archive-line-two-y", "0px");
      section.style.setProperty("--archive-detail-y", "0px");
      section.style.setProperty("--archive-darkness", ".16");
      section.style.setProperty("--archive-line-scale", "1");
      return;
    }

    let animationFrame = 0;

    const updateScene = () => {
      animationFrame = 0;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / distance);
      const reveal = smoothstep(0.04, 0.45, progress);
      const imageReveal = smoothstep(0.12, 0.5, progress);
      const lineOneIn = smoothstep(0.08, 0.22, progress);
      const lineTwoIn = smoothstep(0.38, 0.52, progress);
      const detailIn = smoothstep(0.68, 0.82, progress);
      const imageFadeOut = smoothstep(0.82, 1, progress);
      const textFadeOut = smoothstep(0.9, 1, progress);
      const exitOpacity = 1 - textFadeOut;
      const lineOneOpacity = lineOneIn * exitOpacity;
      const lineTwoOpacity = lineTwoIn * exitOpacity;
      const detailOpacity = detailIn * exitOpacity;

      section.style.setProperty("--archive-inset-y", `${17 * (1 - reveal)}%`);
      section.style.setProperty("--archive-inset-x", `${11 * (1 - reveal)}%`);
      section.style.setProperty("--archive-radius", `${30 * (1 - reveal)}px`);
      section.style.setProperty("--archive-frame-scale", String(0.83 + reveal * 0.17));
      section.style.setProperty("--archive-image-scale", String(1.1 - progress * 0.06));
      section.style.setProperty("--archive-image-x", `${18 - progress * 36}px`);
      section.style.setProperty("--archive-copy-opacity", "1");
      section.style.setProperty(
        "--archive-copy-y",
        `${(1 - lineOneIn) * 12 - textFadeOut * 18}px`,
      );
      section.style.setProperty("--archive-line-one-opacity", String(lineOneOpacity));
      section.style.setProperty("--archive-line-two-opacity", String(lineTwoOpacity));
      section.style.setProperty("--archive-detail-opacity", String(detailOpacity));
      section.style.setProperty("--archive-line-one-y", `${(1 - lineOneIn) * 18}px`);
      section.style.setProperty("--archive-line-two-y", `${(1 - lineTwoIn) * 18}px`);
      section.style.setProperty("--archive-detail-y", `${(1 - detailIn) * 16}px`);
      section.style.setProperty(
        "--archive-darkness",
        String(0.94 - imageReveal * 0.78 + imageFadeOut * 0.78),
      );
      section.style.setProperty("--archive-line-scale", String(detailOpacity));
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
      className="other-projects-bridge skills-bridge"
      aria-label="Introdução às habilidades"
    >
      <div className="other-projects-bridge-sticky">
        <div className="other-projects-bridge-frame">
          <img
            className="other-projects-bridge-image"
            src="/assets/images/skills-transition.png"
            alt="Arquitetura digital formada por camadas, conexões e interfaces"
            loading="lazy"
            decoding="async"
          />
          <div className="other-projects-bridge-shade" />
        </div>

        <div className="other-projects-bridge-copy">
          <span>DO RESULTADO AO REPERTÓRIO</span>
          <h2>
            <span>Cada projeto revela</span>
            <span>uma habilidade em ação.</span>
          </h2>
          <p>Tecnologias, prática e evolução contínua por trás de cada solução.</p>
          <i aria-hidden="true" />
        </div>


      </div>
    </section>
  );
}
