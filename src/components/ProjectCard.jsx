import { useGSAP, gsap } from "@/lib/gsap";
import { useRef, useState, useCallback, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  FaChevronRight as ChevronRight,
  FaChevronLeft as ChevronLeft,
  FaTag as TagIcon,
  FaGithub,
} from "react-icons/fa";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function getModalRect() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const w = Math.min(960, vw - 32);
  const h = Math.min(vh * 0.9, 820);
  return { left: (vw - w) / 2, top: (vh - h) / 2, width: w, height: h };
}

const TECH_CATEGORIES = {
  React: { cat: "Frontend", hex: "#61DAFB" },
  "Next.js": { cat: "Frontend", hex: "#ffffff" },
  "Vue 3": { cat: "Frontend", hex: "#41B883" },
  TypeScript: { cat: "Language", hex: "#3178C6" },
  Storybook: { cat: "Tooling", hex: "#FF4785" },
  "Node.js": { cat: "Backend", hex: "#339933" },
  PostgreSQL: { cat: "Database", hex: "#336791" },
  Redis: { cat: "Database", hex: "#DC382D" },
  GraphQL: { cat: "API", hex: "#E10098" },
  ClickHouse: { cat: "Database", hex: "#FFCC00" },
  "Vercel Edge": { cat: "Infra", hex: "#ffffff" },
  Stripe: { cat: "Payments", hex: "#635BFF" },
  "D3.js": { cat: "DataViz", hex: "#F9A03C" },
  WebGL: { cat: "Graphics", hex: "#990000" },
  Sanity: { cat: "CMS", hex: "#F03E2F" },
  Jest: { cat: "Testing", hex: "#C21325" },
  "CSS Vars": { cat: "Styling", hex: "#264DE4" },
  TailwindCSS: { cat: "Styling", hex: "#06B6D4" },
  "Chakra UI": { cat: "Styling", hex: "#06B6D4" },
  "Framer Motion": { cat: "Styling", hex: "#fff" },
  Vercel: { cat: "Infra", hex: "#fff" },
  Express: { cat: "Backend", hex: "#339933" },
  "Shadcn/ui": { cat: "Styling", hex: "#fff" },
  MongoDB: { cat: "Database", hex: "#41B883" },
};

const CAT_COLORS = {
  Frontend: "rgba(97,218,251,0.12)",
  Language: "rgba(49,120,198,0.12)",
  Backend: "rgba(51,153,51,0.12)",
  Database: "rgba(220,56,45,0.12)",
  API: "rgba(225,0,152,0.12)",
  Infra: "rgba(255,255,255,0.08)",
  Payments: "rgba(99,91,255,0.12)",
  DataViz: "rgba(249,160,60,0.12)",
  Graphics: "rgba(180,0,0,0.12)",
  CMS: "rgba(240,62,47,0.12)",
  Testing: "rgba(194,19,37,0.12)",
  Tooling: "rgba(255,71,133,0.12)",
  Styling: "rgba(38,77,228,0.12)",
  Other: "rgba(255,255,255,0.06)",
};

function TechPill({ tag, accentHex }) {
  const info = TECH_CATEGORIES[tag];
  const dotHex = info?.hex ?? accentHex;
  const bgColor = info
    ? (CAT_COLORS[info.cat] ?? CAT_COLORS.Other)
    : CAT_COLORS.Other;
  const cat = info?.cat ?? "Other";

  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] text-white/70
        rounded-lg px-2.5 py-1.5 border border-white/10 transition-colors duration-200
        hover:border-white/20 hover:text-white/90 group/pill cursor-default"
      style={{ background: bgColor }}
      title={cat}
      aria-label={`${tag} — ${cat}`}
    >
      <span style={{ color: dotHex }} className="shrink-0">
        <TagIcon />
      </span>
      {tag}
      <span
        className="font-mono text-[0.55rem] tracking-widest opacity-0 group-hover/pill:opacity-60
          transition-opacity duration-200 uppercase"
        style={{ color: dotHex }}
      >
        {cat}
      </span>
    </span>
  );
}

function ImageCarousel({ images, accentHex }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef(null);

  const slideTo = useCallback(
    (idx) => {
      if (!trackRef.current || prefersReducedMotion) {
        setActiveIdx(idx);
        return;
      }
      const slideWidth = trackRef.current.offsetWidth / images.length;
      gsap.to(trackRef.current, {
        x: -slideWidth * idx,
        duration: 0.45,
        ease: "power3.inOut",
        onComplete: () => setActiveIdx(idx),
      });
      setActiveIdx(idx);
    },
    [images.length],
  );

  const prev = (e) => {
    e.stopPropagation();
    slideTo((activeIdx - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    slideTo((activeIdx + 1) % images.length);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev(e);
      if (e.key === "ArrowRight") next(e);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx]);

  if (!images?.length) return null;

  return (
    <div className="mt-8">
      <h4 className="font-syne font-bold text-sm text-white tracking-widest uppercase mb-3">
        Galeria
      </h4>

      <div
        className="relative rounded-xl overflow-hidden bg-white/4 border border-white/8"
        style={{ aspectRatio: "16/9" }}
      >
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ width: `${images.length * 100}%` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={img.src}
                alt={img.alt ?? `Project screenshot ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2
                w-11 h-11 rounded-full bg-black/50 border border-white/15
                flex items-center justify-center text-white
                hover:bg-black/70 transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2
                w-11 h-11 rounded-full bg-black/50 border border-white/15
                flex items-center justify-center text-white
                hover:bg-black/70 transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </>
        )}

        <div
          className="absolute bottom-3 right-3 font-mono text-[0.6rem] tracking-widest
          text-white/60 bg-black/60 border border-white/10 rounded-full px-2.5 py-1"
          aria-live="polite"
          aria-atomic
        >
          {activeIdx + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div
          className="flex flex-wrap gap-2 mt-3"
          role="tablist"
          aria-label="Image thumbnails"
        >
          {images.map((img, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIdx}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => slideTo(i)}
              className="rounded-lg overflow-hidden border-2 transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              style={{
                width: 64,
                height: 40,
                flexShrink: 0,
                borderColor:
                  i === activeIdx ? accentHex : "rgba(255,255,255,0.1)",
                opacity: i === activeIdx ? 1 : 0.45,
                boxShadow:
                  i === activeIdx ? `0 0 0 1px ${accentHex}55` : "none",
                transition: "opacity 0.2s, border-color 0.2s, box-shadow 0.2s",
              }}
            >
              <img
                src={img.src}
                alt=""
                aria-hidden
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, index }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const triggerRef = useRef(null);
  const dialogContentRef = useRef(null);
  const dialogInnerRef = useRef(null);
  const cardRectRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      autoAlpha: 0,
      y: 70,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 84%",
        toggleActions: "play none none none",
      },
    });
  });

  const handleOpen = useCallback(() => {
    if (cardRef.current)
      cardRectRef.current = cardRef.current.getBoundingClientRect();
    setIsOpen(true);
  }, []);

  const setContentRef = useCallback((node) => {
    dialogContentRef.current = node;
    if (!node) return;
    const card = cardRectRef.current;
    const modal = getModalRect();
    if (!card || prefersReducedMotion) {
      gsap.set(node, {
        top: modal.top,
        left: modal.left,
        width: modal.width,
        height: modal.height,
        borderRadius: "0.75rem",
        opacity: 1,
      });
      return;
    }

    gsap.set(node, {
      top: card.top,
      left: card.left,
      width: card.width,
      height: card.height,
      borderRadius: "1rem",
      opacity: 1,
    });

    const inner = dialogInnerRef.current;

    const tl = gsap.timeline();
    tl.to(node, {
      top: modal.top,
      left: modal.left,
      width: modal.width,
      height: modal.height,
      borderRadius: "0.75rem",
      duration: 0.6,
      ease: "power3.inOut",
    });
    if (inner) {
      tl.fromTo(
        inner,
        { autoAlpha: 0, y: 32 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.32",
      );
    }
  }, []);

  const handleClose = useCallback(() => {
    if (!dialogContentRef.current || prefersReducedMotion) {
      setIsOpen(false);
      return;
    }
    const card =
      cardRef.current?.getBoundingClientRect() ?? cardRectRef.current;
    if (!card) {
      setIsOpen(false);
      return;
    }
    const overlay = document.querySelector('[data-slot="dialog-overlay"]');
    const inner = dialogInnerRef.current;

    const tl = gsap.timeline({ onComplete: () => setIsOpen(false) });
    if (inner) {
      tl.to(inner, {
        autoAlpha: 0,
        y: -18,
        duration: 0.2,
        ease: "power2.in",
      }, 0);
    }
    if (overlay) {
      tl.to(overlay, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
      }, 0);
    }
    tl.to(dialogContentRef.current, {
      top: card.top,
      left: card.left,
      width: card.width,
      height: card.height,
      borderRadius: "1rem",
      duration: 0.4,
      ease: "power2.inOut",
    }, 0.06);
    tl.to(dialogContentRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power1.inOut",
    }, 0.35);
  }, []);

  const onOpenChange = useCallback(
    (open) => {
      open ? handleOpen() : handleClose();
    },
    [handleOpen, handleClose],
  );

  const onMove = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    gsap.to(glowRef.current, {
      x: e.clientX - r.left - 150,
      y: e.clientY - r.top - 150,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const onEnter = () => {
    gsap.to(glowRef.current, { autoAlpha: 1, duration: 0.3 });
    gsap.to(cardRef.current, { y: -6, duration: 0.4, ease: "power2.out" });
  };
  const onLeave = () => {
    gsap.to(glowRef.current, { autoAlpha: 0, duration: 0.35 });
    gsap.to(cardRef.current, { y: 0, duration: 0.45, ease: "power2.out" });
  };

  const accentHex = p.accentClass?.includes("emerald")
    ? "#34d399"
    : p.accentClass?.includes("violet")
      ? "#a78bfa"
      : p.accentClass?.includes("orange")
        ? "#fb923c"
        : p.accentClass?.includes("amber")
          ? "#fbbf24"
          : p.accentClass?.includes("red")
            ? "#f94144"
            : p.accentClass?.includes("green")
              ? "#00A63E"
              : "#34d399";

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-hover
        className={`relative ${p.bgClass} border ${p.borderClass} rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden cursor-pointer will-change-transform`}
      >
        <div
          ref={glowRef}
          className="absolute w-72 h-72 rounded-full pointer-events-none opacity-0"
          style={{
            background: `radial-gradient(circle, ${p.glowColor} 0%, transparent 70%)`,
          }}
        />

        <div className="relative">
          <div className="flex justify-between items-start mb-10">
            <span className="font-mono text-xs text-white/25">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={`font-mono text-xs tracking-widest ${p.accentClass}`}
            >
              {p.year}
            </span>
          </div>

          <div
            className={`w-12 h-0.5 bg-linear-to-r ${p.barClass} rounded-full mb-6`}
          />

          <h3 className="font-syne font-black text-3xl text-white tracking-tight leading-none mb-2">
            {p.title}
          </h3>
          <p
            className={`font-mono text-xs tracking-widest uppercase ${p.accentClass} mb-5`}
          >
            {p.category}
          </p>
          <p className="font-sans text-sm text-white/45 leading-relaxed mb-8">
            {p.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {p.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
              <button
                ref={triggerRef}
                className={`flex items-center gap-2 ${p.accentClass} cursor-pointer bg-transparent border-none p-0
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded`}
              >
                <span className="font-syne font-bold text-xs tracking-widest">
                  MÁS DETALLES
                </span>
                <span aria-hidden>→</span>
              </button>
            </DialogTrigger>

            <DialogContent
              ref={setContentRef}
              positionless
              showCloseButton={false}
              onOpenAutoFocus={(e) => e.preventDefault()}
              className={`bg-[#0a0a0a]/92 backdrop-blur-xl border ${p.borderClass} text-sm overflow-hidden`}
            >
              <ScrollArea className="h-full w-full">
                <div ref={dialogInnerRef} className="p-5 sm:p-8">
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`font-mono text-xs tracking-widest ${p.accentClass}`}
                      >
                        {p.year}
                      </span>
                      <span
                        className="font-mono text-xs text-white/30"
                        aria-hidden
                      >
                        •
                      </span>
                      <span className="font-mono text-xs text-white/50 uppercase">
                        {p.category}
                      </span>
                    </div>
                    <DialogTitle className="font-syne text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                      {p.title}
                    </DialogTitle>
                  </DialogHeader>

                  <DialogDescription className="mt-4 text-white/60 font-sans leading-relaxed">
                    {p.detailedDesc}
                  </DialogDescription>

                  {p.images?.length > 0 && (
                    <ImageCarousel images={p.images} accentHex={accentHex} />
                  )}

                  {p.metrics?.length > 0 && (
                    <div className="mt-8">
                      <h4 className="font-syne font-bold text-sm text-white mb-4 tracking-widest uppercase">
                        Metricas Principales
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {p.metrics.map((m, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-white/10 bg-white/4 px-4 py-3"
                          >
                            <p
                              className="font-mono text-lg leading-none"
                              style={{ color: accentHex }}
                            >
                              {m.value ?? m}
                            </p>
                            {m.label && (
                              <p className="font-mono text-[0.62rem] tracking-widest uppercase text-white/35 mt-1">
                                {m.label}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 grid sm:grid-cols-2 gap-5">
                    {p.challenge && (
                      <div className="rounded-xl border border-white/8 bg-white/3 p-5">
                        <h4 className="font-syne font-bold text-xs tracking-widest uppercase text-white/60 mb-2">
                          El Reto
                        </h4>
                        <p className="font-sans text-sm text-white/50 leading-relaxed">
                          {p.challenge}
                        </p>
                      </div>
                    )}
                    {p.solution && (
                      <div
                        className="rounded-xl bg-white/3 p-5"
                        style={{ border: `1px solid ${accentHex}22` }}
                      >
                        <h4
                          className="font-syne font-bold text-xs tracking-widest uppercase mb-2"
                          style={{ color: accentHex }}
                        >
                          La Solución
                        </h4>
                        <p className="font-sans text-sm text-white/50 leading-relaxed">
                          {p.solution}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/8">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-syne font-bold text-sm text-white tracking-widest uppercase">
                        Technologies
                      </h4>
                      <span className="font-mono text-[0.62rem] tracking-widest text-white/25 uppercase">
                        {p.tags.length} used
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <TechPill key={t} tag={t} accentHex={accentHex} />
                      ))}
                    </div>

                    {(() => {
                      const cats = [
                        ...new Set(
                          p.tags.map((t) => TECH_CATEGORIES[t]?.cat ?? "Other"),
                        ),
                      ];
                      return cats.length > 1 ? (
                        <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/6">
                          {cats.map((cat) => (
                            <span
                              key={cat}
                              className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] tracking-widest uppercase text-white/30"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{
                                  background:
                                    CAT_COLORS[cat]?.replace("0.12", "0.9") ??
                                    "#888",
                                }}
                              />
                              {cat}
                            </span>
                          ))}
                        </div>
                      ) : null;
                    })()}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/8 flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      {/* ── VER DEMO ── */}
                      {p.liveLink ? (
                        <a
                          href={p.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-syne font-bold text-xs tracking-widest
                            rounded-full px-5 py-2.5 transition-all duration-300
                            hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
                          style={{
                            background: accentHex,
                            color: "#0a0a0a",
                            boxShadow: `0 0 20px ${accentHex}33`,
                          }}
                        >
                          <FaExternalLinkAlt />
                          VER DEMO
                        </a>
                      ) : (
                        <span className="group relative flex items-center justify-center">
                          <span
                            className="inline-flex items-center gap-2 font-syne font-bold text-xs tracking-widest
                              rounded-full px-5 py-2.5 opacity-35 cursor-not-allowed select-none"
                            style={{
                              background: `${accentHex}22`,
                              color: accentHex,
                            }}
                            aria-label="Sin demo disponible"
                          >
                            <FaExternalLinkAlt />
                            VER DEMO
                          </span>
                          {/* CSS-only Tooltip */}
                          <span className="absolute bottom-[130%] left-1/2 -translate-x-1/2 w-max px-3 py-1.5 bg-[#141414] text-white/90 text-[11px] font-sans rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-50 pointer-events-none transform group-hover:-translate-y-1">
                            Sin demo disponible
                            {/* Flecha del tooltip */}
                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#141414]"></span>
                          </span>
                        </span>
                      )}

                      {/* ── VER EN GITHUB ── */}
                      {p.repoLink ? (
                        <a
                          href={p.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-syne font-bold text-xs tracking-widest
                            rounded-full px-5 py-2.5 border transition-all duration-300
                            hover:scale-105 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
                          style={{
                            borderColor: `${accentHex}55`,
                            color: accentHex,
                          }}
                        >
                          <FaGithub />
                          VER EN GITHUB
                        </a>
                      ) : (
                        <span className="group relative flex items-center justify-center">
                          <span
                            className="inline-flex items-center gap-2 font-syne font-bold text-xs tracking-widest
                              rounded-full px-5 py-2.5 border opacity-35 cursor-not-allowed select-none"
                            style={{
                              borderColor: `${accentHex}22`,
                              color: accentHex,
                            }}
                            aria-label="Sin acceso al repositorio por motivos laborales"
                          >
                            <FaGithub />
                            VER EN GITHUB
                          </span>
                          {/* CSS-only Tooltip */}
                          <span className="absolute bottom-[130%] left-1/2 -translate-x-1/2 w-max px-3 py-1.5 bg-[#141414] text-white/90 text-[11px] font-sans rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-50 pointer-events-none transform group-hover:-translate-y-1">
                            Sin acceso al repositorio por motivos laborales
                            {/* Flecha del tooltip */}
                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#141414]"></span>
                          </span>
                        </span>
                      )}
                    </div>
                    <DialogClose asChild>
                      <button
                        className={`font-syne font-bold text-xs tracking-widest ${p.accentClass}
                          bg-transparent border-none cursor-pointer opacity-60
                          hover:opacity-100 transition-opacity duration-200
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded px-2 py-1`}
                      >
                        ← CERRAR
                      </button>
                    </DialogClose>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
