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
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black border-t-2 border-white/20 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              1lênin1dev<span className="text-gray-500">.</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Full Stack Developer focado em interfaces modernas e soluções
              escaláveis. Construindo produtos de alto impacto.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Navegação
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
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
              className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-4"
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
                  className="social-icon w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Lenin Fontella. Todos os direitos
            reservados.
          </p>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
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
