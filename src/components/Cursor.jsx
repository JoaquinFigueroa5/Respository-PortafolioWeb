import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const hoveredEls = useRef(new Set());

  useEffect(() => {
    if (!ringRef.current || !dotRef.current) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const ring = ringRef.current;
    const dot = dotRef.current;

    const xRing = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });
    const xDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "none" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "none" });

    const onMove = (e) => {
      xRing(e.clientX);
      yRing(e.clientY);
      xDot(e.clientX);
      yDot(e.clientY);
    };

    const getInteractive = () =>
      document.querySelectorAll("a, button, [data-hover]");

    const handleEnter = (el) => {
      if (hoveredEls.current.has(el)) return;
      hoveredEls.current.add(el);
      gsap.to(ring, {
        scale: 1.25,
        borderColor: "#7c6aec",
        duration: 0.25,
      });
    };

    const handleLeave = (el) => {
      if (!hoveredEls.current.has(el)) return;
      hoveredEls.current.delete(el);
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(255,255,255,0.35)",
        duration: 0.25,
      });
    };

    getInteractive().forEach((el) => {
      el.addEventListener("mouseenter", () => handleEnter(el));
      el.addEventListener("mouseleave", () => handleLeave(el));
    });

    const observer = new MutationObserver(() => {
      getInteractive().forEach((el) => {
        if (!el._hasCursorListener) {
          el._hasCursorListener = true;
          el.addEventListener("mouseenter", () => handleEnter(el));
          el.addEventListener("mouseleave", () => handleLeave(el));
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMove);

    const currentHovered = hoveredEls.current;

    return () => {
      window.removeEventListener("mousemove", onMove);
      getInteractive().forEach((el) => {
        el.removeEventListener("mouseenter", () => handleEnter(el));
        el.removeEventListener("mouseleave", () => handleLeave(el));
        el._hasCursorListener = false;
      });
      currentHovered.clear();
      observer.disconnect();
    };
  }, []);

  const finePointer =
    typeof window === "undefined"
      ? false
      : window.matchMedia("(pointer: fine)").matches;

  if (!finePointer) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference will-change-transform"
        style={{ borderColor: "rgba(255,255,255,0.35)" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#7c6aec] pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
    </>
  );
}

export default Cursor;