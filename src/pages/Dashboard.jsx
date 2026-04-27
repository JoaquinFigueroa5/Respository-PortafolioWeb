import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Dashboard() {
  return (
    <div className="bg-[#04040c] text-white min-h-screen overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <WorkSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}