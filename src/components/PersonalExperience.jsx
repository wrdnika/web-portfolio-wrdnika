import React, { memo, useMemo, useState, useCallback } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const MODAL_VARIANTS = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const TILT_PROPS = {
  tiltMaxAngleX: 8,
  tiltMaxAngleY: 8,
  scale: 1.02,
  transitionSpeed: 400,
  glareEnable: true,
  glareMaxOpacity: 0.2,
  glareBorderRadius: "20px",
  glareColor: "#ffffff",
  glarePosition: "all",
  className: "transition-all duration-500 ease-out",
};

const EXPERIENCES = [
  {
    name: "Media Downloader",
    github: "https://github.com/wrdnika/tiktok-instagram-media-downloader",
    desc: "A responsive web application built with React and Tailwind CSS that allows users to download media from TikTok and Instagram without watermarks. Featuring dark/light mode toggle, neumorphism design, and clipboard integration for fast and intuitive downloading experience.",
    preview: "https://tiktok-instagram-media-downloader.vercel.app",
    image: "/IMG-PE/media-dl.png",
  },
  {
    name: "Donation App Android",
    github: "https://github.com/wrdnika/mobile-donation-app-flutter",
    desc: "A mobile donation platform built using Flutter, integrated with Supabase as the backend service and Midtrans for secure and reliable payment processing. Users can explore donation campaigns, contribute directly from the app, and monitor their donation history.",
    preview: "",
    image: "/IMG-PE/donasi.png",
  },
  {
    name: "Web Admin Donation",
    github: "https://github.com/wrdnika/admin-donasi",
    desc: "A web-based admin dashboard for managing donation campaigns, users, and transactions. Developed using modern web technologies to provide an intuitive interface for monitoring contributions.",
    preview: "",
    image: "/IMG-PE/admin-donasi.png",
  },
  {
    name: "Meme Puzzle Game",
    github: "https://github.com/wrdnika/brainrot-puzzle-game",
    desc: "A fun and engaging interactive puzzle game built with JavaScript and HTML5. Players must rearrange pieces of popular internet memes to complete the image. Designed for casual entertainment with responsive gameplay.",
    preview: "https://brainrot-puzzle-game.vercel.app",
    image: "/IMG-PE/meme-puzzle.png",
  },
  {
    name: "To Do List",
    github: "https://github.com/wrdnika/To-Do-List-App",
    desc: "A minimalist and user-friendly To-Do List application that stores data in the browser's local storage. Features include task creation, editing, prioritization, deadlines, and visual cues to improve productivity. Built using Vue, Vite, and Tailwind CSS with a glassmorphism design.",
    preview: "https://to-do-list-wrdnika.vercel.app/",
    image: "/IMG-PE/to-do-list.png",
  },
];

const ExperienceCard = memo(({ experience, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFull, setShowFull] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  const toggleShow = useCallback(() => setShowFull((prev) => !prev), []);

  const isLong = experience.desc.length > 200;
  const descToShow = useMemo(
    () =>
      showFull || !isLong
        ? experience.desc
        : experience.desc.slice(0, 200) + "...",
    [showFull, isLong, experience.desc]
  );

  return (
    <>
      <motion.div
        key={experience.name}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={CARD_VARIANTS}
        className="w-72 flex-shrink-0 py-8"
        style={{ willChange: "transform, opacity" }}
      >
        <Tilt {...TILT_PROPS}>
          <motion.div
            className="group p-4 rounded-2xl shadow-lg backdrop-blur-md bg-white/10 dark:bg-white/5 hover:shadow-xl border border-white/20 h-full flex flex-col"
            whileHover={{
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <motion.div
              className="w-full aspect-square mb-4 overflow-hidden rounded-md cursor-pointer"
              onClick={handleOpen}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={experience.image}
                alt={experience.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>

            <h3 className="text-lg font-bold mb-1 flex-shrink-0">
              {experience.name}
            </h3>
            <p className="text-xs text-gray-500 mb-1 flex-grow">
              {descToShow}
              {isLong && (
                <motion.button
                  onClick={toggleShow}
                  className="text-blue-400 ml-1 hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showFull ? "See less" : "See more"}
                </motion.button>
              )}
            </p>

            <div className="mt-auto flex gap-3">
              <motion.a
                href={experience.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-sm" /> GitHub
              </motion.a>
              {experience.preview && (
                <motion.a
                  href={experience.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-green-500 hover:text-green-600 transition-colors duration-200"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Preview
                </motion.a>
              )}
            </div>
          </motion.div>
        </Tilt>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={MODAL_VARIANTS}
              onClick={handleClose}
            >
              <motion.button
                className="absolute top-4 right-4 text-white text-2xl p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors duration-200"
                onClick={handleClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
              <motion.img
                src={experience.image}
                alt={experience.name}
                className="max-h-full max-w-full rounded-lg shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

const PersonalExperience = () => {
  const experiences = useMemo(() => EXPERIENCES, []);

  return (
    <motion.section
      id="personal-experience"
      className="py-12 pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={SECTION_VARIANTS}
    >
      <motion.h2
        className="text-3xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="relative overflow-hidden">
        <div
          className="flex space-x-6 px-4 py-2 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // Internet Explorer 10+
            WebkitOverflowScrolling: "touch", // iOS
          }}
        >
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.name} experience={exp} index={idx} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  );
};

export default memo(PersonalExperience);
