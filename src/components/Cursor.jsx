import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const xRing = gsap.quickTo(ringRef.current, "x", {
      duration: 0.5,
      ease: "power3",
    });
    const yRing = gsap.quickTo(ringRef.current, "y", {
      duration: 0.5,
      ease: "power3",
    });
    const xDot = gsap.quickTo(dotRef.current, "x", {
      duration: 0.1,
      ease: "none",
    });
    const yDot = gsap.quickTo(dotRef.current, "y", {
      duration: 0.1,
      ease: "none",
    });

    const onMove = (e) => {
      xRing(e.clientX);
      yRing(e.clientY);
      xDot(e.clientX);
      yDot(e.clientY);
    };
    window.addEventListener("mousemove", onMove);

    const hoverEls = document.querySelectorAll("a, button, [data-hover]");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        gsap.to(ringRef.current, {
          scale: 2.1,
          borderColor: "#34d399",
          duration: 0.25,
        }),
      );
      el.addEventListener("mouseleave", () =>
        gsap.to(ringRef.current, {
          scale: 1,
          borderColor: "rgba(255,255,255,0.35)",
          duration: 0.25,
        }),
      );
    });

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/35 pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference will-change-transform"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-emerald-400 pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
    </>
  );
}

export default Cursor;
