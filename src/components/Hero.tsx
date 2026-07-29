import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  const scrollToNext = () => {
    const about = document.querySelector("#sobre");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative bg-black w-full h-screen overflow-hidden"
    >
      <video
        src="/assets/hero/1lenin1devpendulo2.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        tabIndex={-1}
        onLoadedData={() => setLoaded(true)}
      />

      {/* Darkening overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(0,0,0,0.15) 0%,
            rgba(0,0,0,0.35) 45%,
            rgba(0,0,0,0.75) 100%
          )`,
        }}
      />

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <p
          className="text-xs font-semibold tracking-[0.4em] text-gray-200 uppercase mb-4"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Full Stack Developer
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Lênin
          <br />
          <span className="text-gradient">Fontella</span>
        </h1>
        <p
          className="max-w-md text-base md:text-lg text-gray-300 font-light leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Interfaces modernas. Soluções escaláveis. Código que entrega valor.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center text-white/70">
        <ChevronDown
          size={28}
          className="animate-bounce cursor-pointer"
          onClick={scrollToNext}
        />
      </div>

      {/* Loading state */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
}
