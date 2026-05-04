import { useEffect, useRef, useState } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { HiArrowUp } from "react-icons/hi2";

function ProgressRing({ size = 52, stroke = 2.5 }) {
  const circleRef = useRef(null);
  const r    = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const pct   = total > 0 ? window.scrollY / total : 0;
      if (circleRef.current)
        circleRef.current.style.strokeDashoffset = `${circ * (1 - pct)}`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [circ]);

  return (
    <svg
      width={size} height={size}
      className="absolute inset-0 -rotate-90"
      aria-hidden
    >
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={stroke}
      />
      <defs>
        <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#7c6aec" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
      </defs>
      <circle
        ref={circleRef}
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke="url(#ring-grad)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={circ}
        style={{ transition: "stroke-dashoffset 0.12s linear" }}
      />
    </svg>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const btnRef  = useRef(null);
  const iconRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const btn = btnRef.current;
    if (visible) {
      gsap.fromTo(btn,
        { autoAlpha: 0, y: 24, scale: 0.75, rotate: -10 },
        { autoAlpha: 1, y: 0,  scale: 1,    rotate: 0,
          duration: 0.55, ease: "back.out(2.2)" },
      );
    } else {
      gsap.to(btn, {
        autoAlpha: 0, y: 24, scale: 0.75, rotate: -10,
        duration: 0.32, ease: "power2.in",
      });
    }
  }, [visible]);

  const onEnter = () => {
    gsap.to(glowRef.current, { autoAlpha: 1, scale: 1.15, duration: 0.4, ease: "power2.out" });
    gsap.to(iconRef.current, { y: -3, duration: 0.3, ease: "power2.out" });
  };
  const onLeave = () => {
    gsap.to(glowRef.current, { autoAlpha: 0, scale: 1,    duration: 0.4, ease: "power2.out" });
    gsap.to(iconRef.current, { y:  0, duration: 0.3, ease: "power2.out" });
  };

  const handleClick = () => {
    gsap.fromTo(iconRef.current,
      { y: 0 },
      { y: -6, duration: 0.2, ease: "power2.out", yoyo: true, repeat: 1 },
    );
    const ripple = document.createElement("span");
    Object.assign(ripple.style, {
      position: "absolute",
      inset: "0",
      borderRadius: "9999px",
      border: "2px solid rgba(124,106,234,0.7)",
      pointerEvents: "none",
    });
    btnRef.current.appendChild(ripple);
    gsap.fromTo(ripple,
      { scale: 1, autoAlpha: 0.7 },
      { scale: 2.2, autoAlpha: 0, duration: 0.65, ease: "power2.out",
        onComplete: () => ripple.remove() },
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={btnRef}
      className="fixed bottom-8 right-8 z-50 will-change-transform"
      style={{ opacity: 0 }}
    >
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-full pointer-events-none opacity-0 will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(52,211,153,0.28) 0%, transparent 70%)",
          filter: "blur(10px)",
          transform: "scale(1.6)",
        }}
      />

      <button
        onClick={handleClick}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-hover
        aria-label="Volver arriba"
        className="relative flex items-center justify-center cursor-pointer border-0 p-0 bg-transparent"
        style={{ width: 52, height: 52 }}
      >
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: "rgba(10,10,20,0.75)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        />

        <ProgressRing size={52} stroke={2.5} />

        <span
          ref={iconRef}
          className="relative flex items-center justify-center will-change-transform"
        >
          <HiArrowUp size={16} color="#7c6aec" />
        </span>
      </button>
    </div>
  );
}

export default ScrollToTop;