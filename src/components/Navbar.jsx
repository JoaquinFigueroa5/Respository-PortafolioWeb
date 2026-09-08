import { useGSAP, gsap } from "@/lib/gsap";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/data/NavbarData";
import { scrollToHash } from "@/utils/scrollToHash";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navRef        = useRef(null);
  const progressRef   = useRef(null);
  const [scrolled, setScrolled]     = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.body.scrollHeight - window.innerHeight;
      const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (progressRef.current) progressRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useGSAP(() => {
    gsap.from(".nav-logo",     { autoAlpha: 0, x: -20, duration: 0.7, ease: "power3.out", delay: 1.1 });
    gsap.from(".nav-index",    { autoAlpha: 0, x: -10, duration: 0.6, ease: "power3.out", delay: 1.2 });
    gsap.from(".nav-link",     { autoAlpha: 0, y: -12, stagger: 0.07, duration: 0.6, ease: "power3.out", delay: 1.2 });
    gsap.from(".nav-cta",      { autoAlpha: 0, x:  20, duration: 0.7, ease: "power3.out", delay: 1.1 });
    gsap.from(".nav-menu-btn", { autoAlpha: 0, y: -8, duration: 0.6, ease: "power3.out", delay: 1.2 });
    gsap.from(".nav-progress", { scaleX: 0, transformOrigin: "left center", duration: 0.6, ease: "power3.out", delay: 1.4 });
  }, { scope: navRef });

  const handleNav = (href, name) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToHash(href);
    setActiveLink(name);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#04040c]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="nav-progress absolute bottom-0 left-0 h-px bg-linear-to-r from-black to-violet-500 will-change-[width]"
        ref={progressRef}
        style={{ width: "0%" }}
      />

      <div className="flex items-center justify-between px-5 sm:px-10 py-4 gap-8">

        <div className="flex items-center gap-4 min-w-30">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToHash("#home"); setActiveLink("Inicio"); }}
            className="nav-logo font-syne font-black text-lg tracking-tight text-white leading-none"
          >
            <span className="text-[#7c6aec]">{"<"}</span>
            Joaki
            <span className="text-[#7c6aec]">{`/>`}</span>
          </a>
          <span className="nav-index h-4 w-px bg-white/10 hidden sm:block" />
          <span className="nav-index font-mono text-[0.6rem] tracking-[0.18em] uppercase text-white/20 hidden sm:block">
            Portfolio
          </span>
        </div>

        <div className="nav-links hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l, i) => (
            <a
              key={i}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToHash(l.href);
                setActiveLink(l.name);
              }}
              className="nav-link group relative font-mono text-[0.65rem] tracking-[0.18em] uppercase px-4 py-2 rounded-full transition-colors duration-200"
              style={{ color: activeLink === l.name ? "#fff" : "rgba(255,255,255,0.38)" }}
            >
              {activeLink === l.name && (
                <span className="absolute inset-0 rounded-full bg-white/6 border border-white/10" />
              )}
              <span className="relative font-mono text-[0.5rem] text-[#7c6aec] mr-1 align-top leading-none"
                style={{ fontSize: "0.5rem" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative group-hover:text-white transition-colors duration-200">{l.name}</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#7c6aec] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 min-w-30 justify-end">
          <a
            href="#contact"
            onClick={handleNav("#contact", "Contacto")}
            className="nav-cta hidden sm:inline-flex font-syne font-bold text-xs text-[#04040c] bg-[#7c6aec] hover:bg-[#8f7ff0] transition-colors duration-200 px-5 py-2 rounded-full tracking-wide whitespace-nowrap"
          >
            ¡Hablemos!
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="nav-menu-btn lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white
              hover:border-white/25 transition-colors duration-200"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        aria-hidden={!menuOpen}
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#04040c]/95 backdrop-blur-xl border-b border-white/5
          px-5 sm:px-10 py-6 flex flex-col
          transition-all duration-300 ease-out
          ${menuOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-3 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map((l, i) => (
            <a
              key={i}
              href={l.href}
              onClick={handleNav(l.href, l.name)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl transition-colors duration-200
                hover:bg-white/5 active:bg-white/8"
              style={{ color: activeLink === l.name ? "#fff" : "rgba(255,255,255,0.55)" }}
            >
              <span className="font-mono text-[0.6rem] text-[#7c6aec]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-syne font-bold text-base tracking-tight">{l.name}</span>
              {activeLink === l.name && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#7c6aec]" />
              )}
            </a>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-white/8">
          <a
            href="#contact"
            onClick={handleNav("#contact", "Contacto")}
            className="flex items-center justify-center font-syne font-bold text-xs text-[#04040c] bg-[#7c6aec]
              hover:bg-[#8f7ff0] transition-colors duration-200 px-5 py-3 rounded-full tracking-wide"
          >
            ¡Hablemos!
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;