import React, { memo, useMemo, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const TILT_PROPS = {
  tiltMaxAngleX: 10,
  tiltMaxAngleY: 10,
  scale: 1.03,
  transitionSpeed: 250,
  glareEnable: true,
  glareMaxOpacity: 0.25,
  glareBorderRadius: "20px",
  glareColor: "#ffffff",
  glarePosition: "all",
  className: "transition-transform duration-300",
};

const EXPERIENCES = [
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

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const toggleShow = () => setShowFull((prev) => !prev);

  const isLong = experience.desc.length > 200;
  const descToShow =
    showFull || !isLong
      ? experience.desc
      : experience.desc.slice(0, 200) + "...";

  return (
    <>
      <motion.div
        key={experience.name}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={CARD_VARIANTS}
        className="w-72 flex-shrink-0 py-8"
      >
        <Tilt {...TILT_PROPS}>
          <div className="group p-4 rounded-2xl shadow-lg backdrop-blur-md bg-white/10 dark:bg-white/5 hover:shadow-xl border border-white/20 h-full flex flex-col">
            <div
              className="w-full aspect-square mb-4 overflow-hidden rounded-md cursor-pointer"
              onClick={handleOpen}
            >
              <img
                src={experience.image}
                alt={experience.name}
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="text-lg font-bold mb-1 flex-shrink-0">
              {experience.name}
            </h3>
            <p className="text-xs text-gray-500 mb-1 flex-grow">
              {descToShow}
              {isLong && (
                <button
                  onClick={toggleShow}
                  className="text-blue-400 ml-1 hover:underline"
                >
                  {showFull ? "See less" : "See more"}
                </button>
              )}
            </p>

            <div className="mt-auto flex gap-3">
              <a
                href={experience.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium hover:text-blue-400 transition"
              >
                <FaGithub className="text-sm" /> GitHub
              </a>
              {experience.preview && (
                <a
                  href={experience.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-green-500 hover:text-green-600 transition"
                >
                  Preview
                </a>
              )}
            </div>
          </div>
        </Tilt>
      </motion.div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleClose}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={handleClose}
          >
            <FaTimes />
          </button>
          <img
            src={experience.image}
            alt={experience.name}
            className="max-h-full max-w-full"
          />
        </div>
      )}
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
      viewport={{ once: true }}
      variants={SECTION_VARIANTS}
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Experience</h2>
      <div className="flex space-x-6 overflow-x-auto px-4 py-2">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={exp.name} experience={exp} index={idx} />
        ))}
      </div>
    </motion.section>
  );
};

export default memo(PersonalExperience);
