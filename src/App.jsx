import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiInstagram, SiGmail, SiWhatsapp } from "react-icons/si";
import { HiArrowUp } from "react-icons/hi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import PersonalExperience from "./components/PersonalExperience";
import WorkExperience from "./components/WorkExperience";
import Certification from "./components/Certification";

// Animation variant for sections
const SECTION_VARIANT = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Social links data
const SOCIAL_LINKS = [
  { icon: <SiGithub />, url: "https://github.com/wrdnika" },
  { icon: <SiInstagram />, url: "https://instagram.com/wrdnika" },
  { icon: <SiGmail />, url: "mailto:muhamadandikawardana@gmail.com" },
  { icon: <SiWhatsapp />, url: "https://wa.me/6285210721169" },
];

// Scroll progress bar component
const ScrollProgress = React.memo(({ progress }) => (
  <div className="fixed top-0 left-0 w-full h-1 z-[60] backdrop-blur-md">
    <motion.div
      className="h-full origin-left bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-r-full shadow-md"
      style={{ scaleX: progress, transformOrigin: "left" }}
    />
  </div>
));

// SocialLinks component
const SocialLinks = React.memo(() => {
  const links = useMemo(() => SOCIAL_LINKS, []);
  return (
    <div className="mt-8 flex justify-center gap-6 text-2xl">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border-2 border-transparent transition-all hover:bg-blue-500 hover:text-white hover:border-blue-500"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
});

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleDarkMode = useCallback(() => setDarkMode((dm) => !dm), []);
  const scrollToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    []
  );

  // Combined scroll listener for progress and showTopBtn
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scroll / total);
      setShowTopBtn(scroll > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactSection = useMemo(
    () => (
      <motion.section
        id="contact"
        className="py-12 pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={SECTION_VARIANT}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
        <SocialLinks />
      </motion.section>
    ),
    []
  );

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ScrollProgress progress={scrollProgress} />

      <div className="min-h-screen font-sans scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <PersonalExperience />
        <WorkExperience />
        <Certification />
        {contactSection}
        <footer className="text-center py-6 text-sm opacity-60">
          &copy; 2025 Muhamad Andika Wardana
        </footer>
        {showTopBtn && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Scroll to top"
          >
            <HiArrowUp className="text-xl" />
          </motion.button>
        )}
      </div>
    </div>
  );
}
