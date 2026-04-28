import { useGSAP, gsap } from "@/lib/gsap";
import { useRef, useState, useCallback } from "react";
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

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function getModalRect() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const w = Math.min(960, vw - 32);
  const h = Math.min(vh * 0.85, 760);
  return { left: (vw - w) / 2, top: (vh - h) / 2, width: w, height: h };
}

function ProjectCard({ p, index }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const triggerRef = useRef(null);
  const dialogContentRef = useRef(null);
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
    if (cardRef.current) {
      cardRectRef.current = cardRef.current.getBoundingClientRect();
    }
    setIsOpen(true);
  }, []);

  const setContentRef = useCallback((node) => {
    dialogContentRef.current = node;
    if (!node || prefersReducedMotion) return;

    const card = cardRectRef.current;
    if (!card) return;

    const modal = getModalRect();

    gsap.set(node, {
      top: card.top,
      left: card.left,
      width: card.width,
      height: card.height,
      borderRadius: "1rem",
      opacity: 1,
    });

    gsap.to(node, {
      top: modal.top,
      left: modal.left,
      width: modal.width,
      height: modal.height,
      borderRadius: "0.75rem",
      duration: 0.55,
      ease: "power3.inOut",
    });
  }, []);

  const handleClose = useCallback(() => {
    if (!dialogContentRef.current || prefersReducedMotion) {
      setIsOpen(false);
      return;
    }
    const card = cardRef.current
      ? cardRef.current.getBoundingClientRect()
      : cardRectRef.current;

    if (!card) { setIsOpen(false); return; }

    gsap.to(dialogContentRef.current, {
      top: card.top,
      left: card.left,
      width: card.width,
      height: card.height,
      borderRadius: "1rem",
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => setIsOpen(false),
    });
  }, []);

  const onOpenChange = useCallback(
    (open) => { if (open) handleOpen(); else handleClose(); },
    [handleOpen, handleClose]
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

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-hover
        className={`relative ${p.bgClass} border ${p.borderClass} rounded-2xl p-10 overflow-hidden cursor-pointer will-change-transform`}
      >
        <div
          ref={glowRef}
          className="absolute w-72 h-72 rounded-full pointer-events-none opacity-0"
          style={{ background: `radial-gradient(circle, ${p.glowColor} 0%, transparent 70%)` }}
        />

        <div className="relative">
          <div className="flex justify-between items-start mb-10">
            <span className="font-mono text-xs text-white/25">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={`font-mono text-xs tracking-widest ${p.accentClass}`}>
              {p.year}
            </span>
          </div>

          {/* Accent bar */}
          <div className={`w-12 h-0.5 bg-linear-to-r ${p.barClass} rounded-full mb-6`} />

          <h3 className="font-syne font-black text-3xl text-white tracking-tight leading-none mb-2">
            {p.title}
          </h3>
          <p className={`font-mono text-xs tracking-widest uppercase ${p.accentClass} mb-5`}>
            {p.category}
          </p>
          <p className="font-sans text-sm text-white/45 leading-relaxed mb-8">
            {p.desc}
          </p>

          {/* Tags */}
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

          {/* ── Dialog ── */}
          <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
              <button
                ref={triggerRef}
                className={`flex items-center gap-2 ${p.accentClass} cursor-pointer bg-transparent border-none p-0`}
              >
                <span className="font-syne font-bold text-xs tracking-widest">
                  VIEW CASE STUDY
                </span>
                <span>→</span>
              </button>
            </DialogTrigger>

            {/* positionless=true → GSAP controla top/left/width/height */}
            <DialogContent
              ref={setContentRef}
              positionless
              showCloseButton={false}
              onOpenAutoFocus={(e) => e.preventDefault()}
              className={`bg-[#0a0a0a] border ${p.borderClass} text-sm`}
            >
              <ScrollArea className="h-full w-full">
                <div className="p-8">
                  {/* Header */}
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`font-mono text-xs tracking-widest ${p.accentClass}`}>
                        {p.year}
                      </span>
                      <span className="font-mono text-xs text-white/30">•</span>
                      <span className="font-mono text-xs text-white/50 uppercase">
                        {p.category}
                      </span>
                    </div>
                    <DialogTitle className="font-syne text-3xl font-black text-white tracking-tight leading-none">
                      {p.title}
                    </DialogTitle>
                  </DialogHeader>

                  <DialogDescription className="mt-4 text-white/60 font-sans leading-relaxed">
                    {p.detailedDesc}
                  </DialogDescription>

                  {/* Key Metrics */}
                  <div className="mt-8">
                    <h4 className="font-syne font-bold text-sm text-white mb-3 tracking-widest">
                      KEY METRICS
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {p.metrics?.map((m, i) => (
                        <span
                          key={i}
                          className={`font-mono text-xs ${p.accentClass} bg-white/5 border ${p.borderClass} rounded-full px-3 py-1.5`}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mt-8 grid gap-6">
                    <div>
                      <h4 className="font-syne font-bold text-sm text-white mb-2 tracking-widest">
                        THE CHALLENGE
                      </h4>
                      <p className="font-sans text-sm text-white/50 leading-relaxed">
                        {p.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-syne font-bold text-sm text-white mb-2 tracking-widest">
                        THE SOLUTION
                      </h4>
                      <p className="font-sans text-sm text-white/50 leading-relaxed">
                        {p.solution}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h4 className="font-syne font-bold text-sm text-white mb-3 tracking-widest">
                      TECHNOLOGIES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Close */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                    <DialogClose asChild>
                      <button
                        className={`font-syne font-bold text-xs tracking-widest ${p.accentClass} bg-transparent border-none cursor-pointer opacity-60 hover:opacity-100 transition-opacity`}
                      >
                        ← CLOSE
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