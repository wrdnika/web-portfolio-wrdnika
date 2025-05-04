import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiInstagram, SiGmail, SiWhatsapp } from "react-icons/si";
import { HiArrowUp } from "react-icons/hi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Certification from "./components/Certification";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const socialLinks = [
  {
    name: "GitHub",
    icon: <SiGithub />,
    url: "https://github.com/wrdnika",
  },
  {
    name: "Instagram",
    icon: <SiInstagram />,
    url: "https://instagram.com/wrdnika",
  },
  {
    name: "Gmail",
    icon: <SiGmail />,
    url: "mailto:muhamadandikawardana@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <SiWhatsapp />,
    url: "https://wa.me/6285210721169",
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scroll = window.scrollY;
      setScrollProgress(scroll / totalHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] backdrop-blur-md">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-r-full shadow-md"
          style={{
            scaleX: scrollProgress,
            transformOrigin: "left",
          }}
        />
      </div>

      <div className="min-h-screen font-sans scroll-smooth">
        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Project />

        {/* Experience */}
        <Experience />

        {/* Certification */}
        <Certification />

        {/* Contact */}
        <motion.section
          id="contact"
          className="py-12 pt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Contact Me
          </h2>
          {/* <form className="max-w-lg mx-auto space-y-4">
            <input
              className="w-full p-3 rounded-xl backdrop-blur-md bg-white/10 dark:bg-white/5"
              type="text"
              placeholder="Nama"
              required
            />
            <input
              className="w-full p-3 rounded-xl backdrop-blur-md bg-white/10 dark:bg-white/5"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="w-full p-3 rounded-xl backdrop-blur-md bg-white/10 dark:bg-white/5"
              rows="5"
              placeholder="Pesan"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
            >
              Kirim
            </button>
          </form> */}

          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-6 text-2xl">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-transparent transition-all hover:bg-blue-500 hover:text-white hover:border-blue-500"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm opacity-60">
          &copy; 2025 Muhamad Andika Wardana
        </footer>

        {/* Back to Top */}
        {showTopBtn && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
