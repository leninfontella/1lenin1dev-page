import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastSeekRef = useRef(-1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;

    let currentProgress = 0;

    const computeProgress = () => {
      const rect = hero.getBoundingClientRect();
      const scrollable = hero.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return 0;
      const scrolled = -rect.top;
      return Math.min(Math.max(scrolled / scrollable, 0), 1);
    };

    // Direct scrub loop: maps video frame to scroll position 1:1, no lag
    const tick = () => {
      currentProgress = computeProgress();

      if (video.duration && video.readyState >= 2) {
        const targetTime = currentProgress * video.duration;
        // Only seek when the frame actually changes (> 1 frame worth) to avoid stutter
        if (Math.abs(targetTime - lastSeekRef.current) > 0.016) {
          video.currentTime = targetTime;
          lastSeekRef.current = targetTime;
        }
      }

      // Throttle React state updates to avoid excessive re-renders
      setScrollProgress((prev) => {
        if (Math.abs(prev - currentProgress) < 0.005) return prev;
        return currentProgress;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      setLoaded(true);
      video.pause();
      video.currentTime = 0;
      lastSeekRef.current = 0;
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    if (video.readyState >= 1 && video.duration) {
      start();
    }
    video.addEventListener("loadedmetadata", start);
    video.addEventListener("loadeddata", start);

    return () => {
      video.removeEventListener("loadedmetadata", start);
      video.removeEventListener("loadeddata", start);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);

  const scrollToNext = () => {
    const about = document.querySelector("#sobre");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative bg-black"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          src="/assets/hero/pendulo.mp4"
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
        />

        {/* Darkening overlay that grows with scroll */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.15) 0%,
              rgba(0,0,0,${0.1 + scrollProgress * 0.5}) 45%,
              rgba(0,0,0,0.75) 100%
            )`,
          }}
        />

        {/* Hero text - fades out as you scroll */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 2.8),
            transform: `translateY(${scrollProgress * -60}px)`,
          }}
        >
          <p
            className="text-xs font-semibold tracking-[0.4em] text-gray-200 uppercase mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Developer
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
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center text-white/70"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 6) }}
        >
          <ChevronDown
            size={28}
            className="animate-bounce cursor-pointer"
            onClick={scrollToNext}
          />
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
          <div
            className="h-full bg-white/70 transition-[width] duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Loading state */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
    </section>
  );
}
