import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap";
import { useRef } from "react";
import { SKILLS } from "@/data/SkillsData";
import { TOOLS } from "@/data/ToolsData";

/* ────────────────────────────────────────────────────────
   ACCENT SYSTEM
──────────────────────────────────────────────────────── */
function accentForLevel(level) {
  if (level >= 90) return { hex: "#34d399", label: "Expert" };
  if (level >= 80) return { hex: "#a78bfa", label: "Advanced" };
  if (level >= 70) return { hex: "#60a5fa", label: "Proficient" };
  return             { hex: "#fb923c", label: "Learning" };
}

/* ────────────────────────────────────────────────────────
   SVG ICON LIBRARY — stroke-based, no emoji
──────────────────────────────────────────────────────── */
const ICON_PATHS = {
  code:   <><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></>,
  server: <><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v.75a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 18v-.75m19.5-9A2.25 2.25 0 0 0 19.5 6.75h-15A2.25 2.25 0 0 0 2.25 9v6.75m19.5-9v6.75" /></>,
  bolt:   <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />,
  cube:   <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />,
  chart:  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />,
  paint:  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />,
  globe:  <><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></>,
  star:   <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />,
};

function SvgIcon({ name, size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth={1.6}
      aria-hidden="true">
      {ICON_PATHS[name] ?? ICON_PATHS.code}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────
   BENTO SKILL CARD
──────────────────────────────────────────────────────── */
function SkillCard({ label, level, iconName = "code", featured = false }) {
  const { hex, label: tier } = accentForLevel(level);
  const gaugeSize = featured ? 52 : 44;
  const r    = (gaugeSize - 6) / 2;
  const circ = 2 * Math.PI * r;
  const arc  = (level / 100) * circ;

  return (
    <article
      data-hover
      className={`skill-card group relative rounded-2xl border border-white/8 bg-white/3
        hover:bg-white/6 overflow-hidden will-change-transform
        transition-colors duration-300
        ${featured ? "p-6 flex flex-col justify-between min-h-45" : "p-4 flex flex-col justify-between"}`}
    >
      {/* corner glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${hex}1A 0%, transparent 60%)` }}
      />

      {/* top row: icon + gauge */}
      <div className="flex items-start justify-between mb-3 relative">
        <div
          className="rounded-xl flex items-center justify-center shrink-0"
          style={{
            width: 34, height: 34,
            background: `${hex}18`,
            border: `1px solid ${hex}28`,
          }}
          aria-hidden
        >
          <SvgIcon name={iconName} size={15} color={hex} />
        </div>

        {/* arc gauge */}
        <div className="relative shrink-0">
          <svg width={gaugeSize} height={gaugeSize} className="-rotate-90" aria-hidden>
            <circle cx={gaugeSize / 2} cy={gaugeSize / 2} r={r}
              fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={4} />
            <circle
              cx={gaugeSize / 2} cy={gaugeSize / 2} r={r}
              fill="none" stroke={hex} strokeWidth={4}
              strokeLinecap="round"
              strokeDasharray={`${arc} ${circ}`}
              className="skill-ring-dash"
            />
          </svg>
          <span
            className="absolute inset-0 flex items-center justify-center font-mono font-semibold leading-none"
            style={{ fontSize: "0.58rem", color: hex }}
            aria-label={`${level}%`}
          >
            {level}
          </span>
        </div>
      </div>

      {/* labels */}
      <div className="relative">
        <p className={`font-syne font-bold text-white leading-tight ${featured ? "text-[0.95rem]" : "text-sm"}`}>
          {label}
        </p>
        <span
          className="font-mono uppercase tracking-widest mt-0.5 block"
          style={{ fontSize: "0.56rem", color: hex }}
        >
          {tier}
        </span>

        {/* featured: thin progress bar */}
        {featured && (
          <div className="mt-4">
            <div className="h-px rounded-full bg-white/8 overflow-hidden">
              <div
                className="skill-bar-fill h-full rounded-full"
                style={{ width: `${level}%`, background: `linear-gradient(90deg, ${hex}, ${hex}66)` }}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

/* ────────────────────────────────────────────────────────
   RADAR CHART — pure SVG, no external library
──────────────────────────────────────────────────────── */
const RADAR_DATA = [
  { key: "Frontend", level: 96 },
  { key: "Backend",  level: 88 },
  { key: "DevOps",   level: 78 },
  { key: "Design",   level: 85 },
  { key: "Data",     level: 72 },
  { key: "Mobile",   level: 68 },
];

function polar(angleDeg, radius, cx, cy) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

function RadarChart() {
  const cx = 108, cy = 108, maxR = 80, n = RADAR_DATA.length;
  const rings = [0.25, 0.5, 0.75, 1];

  const dataPts = RADAR_DATA.map((ax, i) => polar((360 / n) * i, (ax.level / 100) * maxR, cx, cy));
  const polygon = dataPts.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");

  return (
    <svg viewBox="0 0 216 216" className="w-full max-w-54 mx-auto radar-svg"
      role="img" aria-label="Skill domain radar chart">

      {/* rings */}
      {rings.map((f) => {
        const pts = RADAR_DATA.map((_, i) => polar((360 / n) * i, maxR * f, cx, cy));
        return (
          <polygon key={f}
            points={pts.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ")}
            fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
        );
      })}

      {/* spokes */}
      {RADAR_DATA.map((_, i) => {
        const tip = polar((360 / n) * i, maxR, cx, cy);
        return <line key={i} x1={cx} y1={cy} x2={tip.x.toFixed(2)} y2={tip.y.toFixed(2)}
          stroke="rgba(255,255,255,0.06)" strokeWidth={1} />;
      })}

      {/* data fill */}
      <polygon points={polygon}
        fill="rgba(52,211,153,0.1)" stroke="#34d399"
        strokeWidth={1.5} strokeLinejoin="round"
        className="radar-polygon" />

      {/* dots */}
      {dataPts.map((p, i) => (
        <circle key={i} cx={p.x.toFixed(2)} cy={p.y.toFixed(2)} r={2.5} fill="#34d399" />
      ))}

      {/* labels */}
      {RADAR_DATA.map((ax, i) => {
        const lp = polar((360 / n) * i, maxR + 17, cx, cy);
        const anchor = Math.abs(lp.x - cx) < 5 ? "middle" : lp.x < cx ? "end" : "start";
        return (
          <text key={i} x={lp.x.toFixed(2)} y={lp.y.toFixed(2)}
            textAnchor={anchor} dominantBaseline="middle"
            fill="rgba(255,255,255,0.38)" fontSize={8.5}
            fontFamily="'DM Mono', monospace" letterSpacing="0.05em">
            {ax.key}
          </text>
        );
      })}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────
   VALUE STRIP
──────────────────────────────────────────────────────── */
const VALUES = [
  { icon: "star",   text: "Clean code teams love" },
  { icon: "bolt",   text: "Performance-first mindset" },
  { icon: "cube",   text: "Product thinking beyond eng." },
  { icon: "globe",  text: "Async-first collaboration" },
];

/* icon keys map — cycle if not provided in SKILLS data */
const DEFAULT_ICONS = ["code", "server", "bolt", "cube", "chart", "paint", "globe", "code"];

/* ────────────────────────────────────────────────────────
   SECTION
──────────────────────────────────────────────────────── */
function SkillsSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    /* header items */
    gsap.from(".sk-hdr-el", {
      autoAlpha: 0, y: 30, stagger: 0.1, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: ".sk-hdr-el", start: "top 82%", once: true },
    });

    /* skill bento cards */
    ScrollTrigger.batch(".skill-card", {
      onEnter: (els) =>
        gsap.from(els, {
          autoAlpha: 0, y: 44, scale: 0.93,
          stagger: 0.055, duration: 0.65, ease: "power3.out",
        }),
      start: "top 86%",
      once: true,
    });

    /* ring gauges */
    gsap.utils.toArray(".skill-ring-dash").forEach((el) => {
      gsap.from(el, {
        strokeDasharray: "0 999",
        duration: 1.4, ease: "power3.out", delay: 0.3,
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    });

    /* featured bar fills */
    gsap.from(".skill-bar-fill", {
      scaleX: 0, transformOrigin: "left center",
      duration: 1.2, ease: "power3.out", delay: 0.45,
      scrollTrigger: { trigger: ".skill-bar-fill", start: "top 88%", once: true },
    });

    /* radar */
    gsap.from(".radar-polygon", {
      autoAlpha: 0, scale: 0.55, transformOrigin: "center center",
      duration: 1.1, ease: "back.out(1.5)",
      scrollTrigger: { trigger: ".radar-svg", start: "top 84%", once: true },
    });

    /* tool pills */
    ScrollTrigger.batch(".tool-pill", {
      onEnter: (els) =>
        gsap.from(els, {
          autoAlpha: 0, scale: 0.7, y: 8,
          stagger: 0.04, duration: 0.4, ease: "back.out(2)",
        }),
      start: "top 88%",
      once: true,
    });

    /* value rows */
    gsap.from(".value-row", {
      autoAlpha: 0, x: -14, stagger: 0.08, duration: 0.55, ease: "power3.out",
      scrollTrigger: { trigger: ".value-row", start: "top 90%", once: true },
    });
  }, { scope: sectionRef });

  const featured = SKILLS.slice(0, 2);
  const rest     = SKILLS.slice(2);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative px-6 md:px-10 py-28 border-t border-white/5 overflow-hidden"
    >
      {/* dot-grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(139,92,246,0.2) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.28,
        }}
      />

      <div className="max-w-6xl mx-auto relative">

        {/* ── HEADER ─────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-14">
          <div>
            <p className="sk-hdr-el font-mono text-xs tracking-[0.22em] uppercase text-violet-400 mb-3">
              Expertise
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
          <p className="sk-hdr-el font-sans text-sm text-white/38 max-w-70 leading-relaxed">
            Technologies I've shipped professionally — depth-rated and domain-mapped.
          </p>
        </div>

        {/* ── 3-COLUMN BENTO ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_224px_300px] gap-5 items-start">

          {/* ── COL 1: skill cards ──────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {/* featured (tall) */}
            {featured.map((s, i) => (
              <SkillCard key={s.label} {...s}
                iconName={s.iconName ?? DEFAULT_ICONS[i]}
                featured
              />
            ))}
            {/* compact */}
            {rest.map((s, i) => (
              <SkillCard key={s.label} {...s}
                iconName={s.iconName ?? DEFAULT_ICONS[i + 2]}
              />
            ))}
          </div>

          {/* ── COL 2: radar + badge ────────────────── */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            <div className="w-full rounded-2xl border border-white/8 bg-white/3 p-5">
              <p className="font-mono text-[0.62rem] tracking-widest uppercase text-white/28 mb-4 text-center">
                Domain coverage
              </p>
              <RadarChart />
            </div>

            {/* stat badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/4 border border-white/8 rounded-full px-4 py-2.5 w-full justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" aria-hidden />
              <span className="font-mono text-[0.65rem] tracking-widest text-white/45 uppercase">
                5 yrs · 40+ projects
              </span>
            </div>
          </div>

          {/* ── COL 3: toolbox + values + legend ───── */}
          <div className="flex flex-col gap-4">

            {/* toolbox */}
            <div className="rounded-2xl border border-white/8 bg-white/3 p-5">
              <div className="flex items-center gap-2 mb-4">
                <SvgIcon name="cube" size={13} color="#a78bfa" />
                <p className="font-mono text-[0.66rem] tracking-widest uppercase text-violet-400">
                  Toolbox
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((t) => (
                  <span
                    key={t} data-hover
                    className="tool-pill font-mono text-[0.68rem] text-white/50 bg-white/5 border border-white/10
                      rounded-lg px-2.5 py-1.5 hover:border-violet-500/40 hover:text-white/75
                      transition-colors duration-200 cursor-default will-change-transform"
                    aria-label={t}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* what I bring */}
            <div className="rounded-2xl border border-emerald-500/15 bg-emerald-400/4 p-5">
              <div className="flex items-center gap-2 mb-4">
                <SvgIcon name="star" size={13} color="#34d399" />
                <p className="font-mono text-[0.66rem] tracking-widest uppercase text-emerald-400">
                  What I bring
                </p>
              </div>
              <div className="flex flex-col gap-3" role="list">
                {VALUES.map(({ icon, text }) => (
                  <div key={text} className="value-row flex items-center gap-3" role="listitem">
                    <span
                      className="shrink-0 rounded-lg flex items-center justify-center"
                      style={{
                        width: 26, height: 26,
                        background: "rgba(52,211,153,0.1)",
                        border: "1px solid rgba(52,211,153,0.18)",
                      }}
                      aria-hidden
                    >
                      <SvgIcon name={icon} size={12} color="#34d399" />
                    </span>
                    <p className="font-sans text-sm text-white/55 leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* tier legend */}
            <div className="rounded-2xl border border-white/6 bg-white/2 p-5">
              <p className="font-mono text-[0.6rem] tracking-widest uppercase text-white/22 mb-3">
                Tier key
              </p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                {[
                  { label: "Expert",     range: "90–100", hex: "#34d399" },
                  { label: "Advanced",   range: "80–89",  hex: "#a78bfa" },
                  { label: "Proficient", range: "70–79",  hex: "#60a5fa" },
                  { label: "Learning",   range: "< 70",   hex: "#fb923c" },
                ].map(({ label, range, hex }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: hex }} aria-hidden />
                    <span className="font-syne font-semibold text-[0.68rem] text-white/50">{label}</span>
                    <span className="font-mono text-[0.58rem] text-white/22 ml-auto">{range}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;