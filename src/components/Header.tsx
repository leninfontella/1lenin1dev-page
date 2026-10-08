import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  Menu,
  X,
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
  {
    icon: MessageCircle,
    href: "https://wa.me/5551989134037",
    label: "WhatsApp",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollableHeight > 0
          ? Math.min((window.scrollY / scrollableHeight) * 100, 100)
          : 0,
      );

      const current = [...NAV_LINKS]
        .reverse()
        .find(({ href }) => {
          const section = document.querySelector(href);
          return section && section.getBoundingClientRect().top <= 140;
        });
      setActiveSection(current?.href ?? "#hero");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="block select-none"
        >
          <img
            src="/assets/images/header.jpeg"
            alt="Lénin Fontella"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30 hover:ring-white/70 transition-all duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              aria-current={activeSection === link.href ? "page" : undefined}
              className={`nav-link text-sm font-medium transition-colors ${
                activeSection === link.href
                  ? "text-white is-active"
                  : "text-gray-300 hover:text-white"
              }`}
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-400 hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              aria-current={activeSection === link.href ? "page" : undefined}
              className={`text-sm font-medium py-1 transition-colors ${
                activeSection === link.href
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-white/10">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-gray-400 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      )}

      <div
        className="absolute bottom-0 left-0 h-px bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
