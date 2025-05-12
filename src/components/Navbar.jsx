import React, { memo, useState, useCallback, useMemo } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

// Static nav items
const NAV_ITEMS = [
  { href: "#skills", label: "Skills" },
  { href: "#personal-experience", label: "Experience" },
  { href: "#experience", label: "Work Experience" },
  { href: "#certification", label: "Certification" },
  { href: "#contact", label: "Contact" },
];

// Desktop navigation links
const DesktopNav = memo(({ onToggleDark, darkMode }) => (
  <div className="hidden md:flex gap-6 items-center">
    {NAV_ITEMS.map(({ href, label }) => (
      <a
        key={href}
        href={href}
        className="text-sm md:text-base font-medium hover:underline underline-offset-4 transition"
      >
        {label}
      </a>
    ))}
    <button
      onClick={onToggleDark}
      className="p-2 rounded-full bg-white/40 dark:bg-white/10 shadow hover:scale-105 transition"
    >
      {darkMode ? (
        <FiSun className="text-lg" />
      ) : (
        <FiMoon className="text-lg" />
      )}
    </button>
  </div>
));

// Mobile navigation links
const MobileNav = memo(({ onClose, onToggleDark, darkMode }) => (
  <div className="md:hidden mt-4 flex flex-col gap-4 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl p-4 shadow-inner">
    {NAV_ITEMS.map(({ href, label }) => (
      <a
        key={href}
        href={href}
        onClick={onClose}
        className="text-sm font-medium hover:underline underline-offset-4 transition"
      >
        {label}
      </a>
    ))}
    <button
      onClick={() => {
        onToggleDark();
        onClose();
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
));

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = useMemo(() => NAV_ITEMS, []);
  const handleToggleMenu = useCallback(() => setMenuOpen((open) => !open), []);
  const handleCloseMenu = useCallback(() => setMenuOpen(false), []);
  const handleToggleDark = useCallback(
    () => toggleDarkMode(),
    [toggleDarkMode]
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-lg bg-white/30 dark:bg-black/30 shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-extrabold text-xl tracking-wide hover:scale-105 transition duration-300">
          WRDNIKA
        </span>

        <DesktopNav onToggleDark={handleToggleDark} darkMode={darkMode} />

        <button
          onClick={handleToggleMenu}
          className="md:hidden text-xl p-2 rounded hover:bg-white/30 dark:hover:bg-white/10 transition"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <MobileNav
          onClose={handleCloseMenu}
          onToggleDark={handleToggleDark}
          darkMode={darkMode}
        />
      )}
    </nav>
  );
};

export default memo(Navbar);
