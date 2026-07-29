import { useRef, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "lenincazzeri@gmail.com",
    href: "mailto:lenincazzeri@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (51) 98913-4037",
    href: "tel:+5551989134037",
  },
  { icon: MapPin, label: "Localização", value: "Porto Alegre / RS", href: "#" },
];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/leninfontella", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/leninfontella/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/lenin_fontella/",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@lenincazzeri",
    label: "YouTube",
  },
  { icon: MessageCircle, href: "https://w.app/haygej", label: "WhatsApp" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal");
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
    <section id="contato" className="py-24 px-6">
      <div
        className="max-w-6xl mx-auto"
        ref={sectionRef}
        style={{ opacity: 0 }}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 max-w-[60px] bg-white/40" />
          <span
            className="text-xs font-semibold tracking-[0.35em] text-black-400 uppercase"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Contato
          </span>
        </div>

        <div className="section-card glow-white p-8 md:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Vamos trabalhar <span className="text-gradient">juntos</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              Informações de contato para conexões, projetos e oportunidades.
            </p>
          </div>

          {/* Contact info grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="project-card glow-white-hover border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center gap-3 bg-white/5"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon size={20} className="text-white" />
                </div>
                <span
                  className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {label}
                </span>
                <span className="text-sm text-white font-medium break-all">
                  {value}
                </span>
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex flex-col items-center gap-4 pt-8 border-t border-white/10">
            <span
              className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Redes Sociais
            </span>
            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Vídeo */}
            <div className="w-full max-w-md rounded-2xl overflow-hidden  mt-4">
              <video
                src="/assets/images/1lenin1devpendulo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
