import { useGSAP, gsap } from "@/lib/gsap";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/data/NavbarData";

function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    gsap.from(".nav-item", {
      autoAlpha: 0, y: -16, stagger: 0.08, duration: 0.7, ease: "power3.out", delay: 1.1,
    });
  }, { scope: navRef });

  return (
    <nav ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 transition-all duration-500 ${
        scrolled ? "bg-[#04040c]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}>

      <span className="nav-item font-syne font-black text-xl tracking-tight text-white">
        <span className="text-emerald-400">{"<"}</span>
        dev
        <span className="text-emerald-400">{"/>"}</span>
      </span>

      <div className="nav-item flex items-center gap-8">
        {NAV_LINKS.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            className="font-mono text-xs tracking-widest uppercase text-white/50 hover:text-emerald-400 transition-colors duration-200">
            {l}
          </a>
        ))}
      </div>

      <a href="#contact"
        className="nav-item font-syne font-bold text-sm text-[#04040c] bg-emerald-400 hover:bg-emerald-300 transition-colors duration-200 px-5 py-2 rounded-full tracking-wide">
        Hire Me
      </a>
    </nav>
  );
}

export default Navbar;