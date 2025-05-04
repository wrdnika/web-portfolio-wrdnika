import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Pengalaman" },
    { href: "#certification", label: "Sertifikasi" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-lg bg-white/30 dark:bg-black/30 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <span className="font-extrabold text-xl tracking-wide hover:scale-105 transition duration-300">
          Wrdnika
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm md:text-base font-medium hover:underline underline-offset-4 transition"
            >
              {label}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white/40 dark:bg-white/10 shadow hover:scale-105 transition"
          >
            {darkMode ? (
              <FiSun className="text-lg" />
            ) : (
              <FiMoon className="text-lg" />
            )}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl p-2 rounded hover:bg-white/30 dark:hover:bg-white/10 transition"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl p-4 shadow-inner">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium hover:underline underline-offset-4 transition"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            className="p-2 rounded-full bg-white/40 dark:bg-white/10 shadow hover:scale-105 transition self-start"
          >
            {darkMode ? (
              <FiSun className="text-lg" />
            ) : (
              <FiMoon className="text-lg" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
