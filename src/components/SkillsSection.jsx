import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap";
import { useRef } from "react";
import { SKILLS, TOOLS, TIERS, ICON_MAP, GROUPS } from "@/data/SkillsData";

function getTier(level) {
  if (level >= 90) return { label: "Experto",     accent: "#34d399" };
  if (level >= 80) return { label: "Avanzado",   accent: "#a78bfa" };
  if (level >= 70) return { label: "Proficiente", accent: "#60a5fa" };
  if (level >= 50) return { label: "Competente",  accent: "#fb923c" };
  return                   { label: "Aprendiendo",  accent: "#f87171" };
}

function SkillPill({ label, level }) {
  const { label: tier, accent } = getTier(level);
  const { icon: Icon, color }   = ICON_MAP[label] ?? { icon: null, color: "#ffffff" };
  const circ = 2 * Math.PI * 10;
  const arc  = (level / 100) * circ;

  return (
    <article
      data-hover
      className="skill-pill group relative flex items-center gap-3 rounded-xl border border-white/8
        bg-white/3 hover:bg-white/6 px-3.5 py-2.5 transition-colors duration-250 will-change-transform overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-xl"
        style={{ background: `radial-gradient(ellipse at left center, ${color}18 0%, transparent 65%)` }}
      />
      <div
        className="relative shrink-0 flex items-center justify-center rounded-lg"
        style={{ width: 40, height: 40, background: `${color}18`, border: `1px solid ${color}28` }}
      >
        {Icon && <Icon size={20} color={color} />}
      </div>

      <div className="relative flex-1 min-w-0">
        <p className="font-syne font-bold text-white text-[0.78rem] leading-none truncate">{label}</p>
        <span className="font-mono text-[0.55rem] tracking-widest uppercase mt-0.5 block" style={{ color: accent }}>
          {tier}
        </span>
      </div>
      <div className="relative shrink-0">
        <svg width={38} height={38} className="-rotate-90" aria-hidden>
          <circle cx={19} cy={19} r={16} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={3} />
          <circle
            cx={19} cy={19} r={16} fill="none" stroke={accent} strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray={`${arc} ${circ}`}
            className="skill-ring-dash"
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center font-mono leading-none"
          style={{ fontSize: "0.75rem", color: accent }}
        >
          {level}
        </span>
      </div>
    </article>
  );
}

function GroupBlock({ group }) {
  const groupSkills = SKILLS.filter(s => group.skills.includes(s.label))
    .sort((a, b) => b.level - a.level);

  return (
    <div className="skill-group flex flex-col gap-3">
      <div className="flex items-center gap-2.5 mb-1">
        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: group.accent }} />
        <span className="font-mono text-[0.62rem] tracking-[0.2em] uppercase" style={{ color: group.accent }}>
          {group.label}
        </span>
        <span className="flex-1 h-px bg-white/6" />
        <span className="font-mono text-[0.55rem] text-white/22">{groupSkills.length} skills</span>
      </div>

      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))" }}>
        {groupSkills.map(s => <SkillPill key={s.label} {...s} />)}
      </div>
    </div>
  );
}

function SkillsSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".sk-hdr-el", {
      autoAlpha: 0, y: 28, stagger: 0.09, duration: 0.85, ease: "power3.out",
      scrollTrigger: { trigger: ".sk-hdr-el", start: "top 84%", once: true },
    });

    ScrollTrigger.batch(".skill-group", {
      onEnter: els => gsap.from(els, {
        autoAlpha: 0, y: 36, stagger: 0.12, duration: 0.7, ease: "power3.out",
      }),
      start: "top 87%",
      once: true,
    });

    ScrollTrigger.batch(".skill-pill", {
      onEnter: els => gsap.from(els, {
        autoAlpha: 0, scale: 0.9, y: 12,
        stagger: 0.03, duration: 0.45, ease: "power3.out",
      }),
      start: "top 90%",
      once: true,
    });

    gsap.utils.toArray(".skill-ring-dash").forEach(el => {
      gsap.from(el, {
        strokeDasharray: "0 999", duration: 1.3, ease: "power3.out", delay: 0.25,
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    });

    gsap.from(".sidebar-card", {
      autoAlpha: 0, x: 24, stagger: 0.1, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ".sidebar-card", start: "top 85%", once: true },
    });
  }, { scope: sectionRef });

  const totalSkills = SKILLS.length;
  const expertCount = SKILLS.filter(s => s.level >= 90).length;
  const avgLevel    = Math.round(SKILLS.reduce((acc, s) => acc + s.level, 0) / totalSkills);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative px-6 md:px-10 py-28 border-t border-white/5 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(139,92,246,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.22,
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-14">
          <div>
            <p className="sk-hdr-el font-mono text-xs tracking-[0.22em] uppercase text-[#7c6aec] mb-3">
              Experiencia
            </p>
            <h2
              className="sk-hdr-el font-syne font-black leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}
            >
              Skills &{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}>
                Stack
              </span>
            </h2>
          </div>
          <p className="sk-hdr-el font-sans text-sm text-white/38 max-w-xs leading-relaxed">
            Tecnologías con las que trabajo en entornos profesionales, organizadas por dominio.
          </p>
        </div>

        <div className="grid gap-8 items-start" style={{ gridTemplateColumns: "1fr minmax(0, 260px)" }}>
          <div className="flex flex-col gap-10">
            {GROUPS.map(g => <GroupBlock key={g.key} group={g} />)}
          </div>

          <div className="flex flex-col gap-4">
            <div className="sidebar-card rounded-2xl border border-white/8 bg-white/3 p-5">
              <p className="font-mono text-[0.62rem] tracking-widest uppercase text-white/28 mb-4">
                Overview
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { n: totalSkills, l: "Tecnologias" },
                  { n: expertCount, l: "Experto" },
                  { n: `${avgLevel}%`, l: "Promedio" },
                ].map(({ n, l }) => (
                  <div key={l} className="text-center">
                    <div className="font-syne font-black text-2xl text-white leading-none">{n}</div>
                    <div className="font-mono text-[0.55rem] tracking-widest uppercase text-white/25 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
              <div className="h-px bg-white/8 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-linear-to-r from-emerald-400 to-violet-500"
                  style={{ width: `${avgLevel}%` }}
                />
              </div>
            </div>

            <div className="sidebar-card rounded-2xl border border-white/8 bg-white/3 p-5">
              <p className="font-mono text-[0.62rem] tracking-widest uppercase text-white/28 mb-4">
                Tier key
              </p>
              <div className="flex flex-col gap-2.5">
                {TIERS.map(({ label, range, accent }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                    <span className="font-syne font-semibold text-[0.72rem] text-white/55 flex-1">{label}</span>
                    <span className="font-mono text-[0.58rem] text-white/22">{range}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-card rounded-2xl border border-white/8 bg-white/3 p-5">
              <p className="font-mono text-[0.62rem] tracking-widest uppercase text-white/28 mb-4">
                Herramientas
              </p>
              <div className="flex flex-wrap gap-1.5">
                {TOOLS.map(t => (
                  <span
                    key={t}
                    className="font-mono text-[0.66rem] text-white/48 bg-white/5 border border-white/8
                      rounded-lg px-2.5 py-1 hover:border-violet-500/35 hover:text-white/70
                      transition-colors duration-200 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="sidebar-card flex items-center gap-2.5 bg-emerald-400/5 border border-emerald-500/20 rounded-2xl px-4 py-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="font-mono text-[0.63rem] tracking-widest text-emerald-400/70 uppercase">
                Abierto a nuevos proyectos y a seguir aprendiendo.
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;