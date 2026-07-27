import { useRef, useEffect } from 'react';
import {
  HTML5Icon, CSS3Icon, JavaScriptIcon, ReactIcon, TypeScriptIcon,
  NodeJsIcon, PostgreSQLIcon, MongoDBIcon, GitIcon, GitHubIcon,
} from './TechIcons';

const SKILLS = [
  { name: 'HTML5', icon: HTML5Icon, color: '#E34F26' },
  { name: 'CSS3', icon: CSS3Icon, color: '#1572B6' },
  { name: 'JavaScript', icon: JavaScriptIcon, color: '#F7DF1E' },
  { name: 'React', icon: ReactIcon, color: '#61DAFB' },
  { name: 'TypeScript', icon: TypeScriptIcon, color: '#3178C6' },
  { name: 'Node.js', icon: NodeJsIcon, color: '#83CD29' },
  { name: 'PostgreSQL', icon: PostgreSQLIcon, color: '#336791' },
  { name: 'MongoDB', icon: MongoDBIcon, color: '#47A248' },
  { name: 'Git', icon: GitIcon, color: '#F05032' },
  { name: 'GitHub', icon: GitHubIcon, color: '#ffffff' },
];

const DOUBLED = [...SKILLS, ...SKILLS];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal');
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={sectionRef} style={{ opacity: 0 }}>
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 max-w-[60px] bg-white/40" />
          <span
            className="text-xs font-semibold tracking-[0.35em] text-gray-400 uppercase"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Habilidades
          </span>
        </div>

        <div className="section-card glow-white p-8 md:p-12">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Tecnologias que utilizo e <span className="text-gradient">aprimoro</span>
            </h2>
          </div>

          {/* Marquee carousel */}
          <div className="relative overflow-hidden py-8">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 marquee-track w-max">
              {DOUBLED.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={i}
                    className="skill-badge flex-shrink-0 w-32 h-32 border border-white/20 rounded-2xl flex flex-col items-center justify-center gap-3 bg-white/5"
                    style={{ color: skill.color }}
                  >
                    <Icon size={40} />
                    <span
                      className="text-xs font-semibold text-white"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Static grid (mobile-friendly reference) */}
          <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mt-10 pt-10 border-t border-white/10">
            {SKILLS.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2"
                  title={skill.name}
                >
                  <div className="skill-badge w-12 h-12 rounded-xl border border-white/15 flex items-center justify-center bg-white/5" style={{ color: skill.color }}>
                    <Icon size={22} />
                  </div>
                  <span
                    className="text-[10px] font-medium text-gray-400 text-center"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
