import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
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

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer-gradient">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img
              src="/assets/images/header.jpeg"
              alt="Lênin Fontella"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white/30 mb-3"
            />
            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              Lênin Fontella
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Full Stack Developer focado em interfaces modernas e soluções
              escaláveis. Construindo produtos de alto impacto.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Navegação
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Conecte-se
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Lênin Fontella. Todos os direitos
            reservados.
          </p>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Voltar ao topo
            <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
