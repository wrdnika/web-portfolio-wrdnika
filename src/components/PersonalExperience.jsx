import React, { memo, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// Variants and props
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
  glareMaxOpacity: 0.45,
  glareBorderRadius: "20px",
  glareColor: "#ffffff",
  glarePosition: "all",
  className: "transition-transform duration-300",
};

// Data
const EXPERIENCES = [
  {
    name: "Donation App Android",
    github: "https://github.com/wrdnika/mobile-donation-app-flutter",
    desc: "Donation App with Flutter, Supabase, and Midtrans.",
    preview: "",
    // techstack: ["Flutter", "Supabase", "Midtrans"],
  },
  {
    name: "Web Admin Donation",
    github: "https://github.com/wrdnika/admin-donasi",
    desc: "Dashboard donation web application.",
    preview: "",
    // techstack: ["Laravel", "Supabase", "Tailwind CSS"],
  },
  {
    name: "Meme Puzzle Game",
    github: "https://github.com/wrdnika/brainrot-puzzle-game",
    desc: "Interactive meme puzzle game in JavaScript.",
    preview: "https://brainrot-puzzle-game.vercel.app",
    // techstack: ["Vanilla js", "Tailwind CSS"],
  },
  {
    name: "To Do List",
    github: "https://github.com/wrdnika/To-Do-List-App",
    desc: "To Do List with Local Storage User.",
    preview: "https://to-do-list-wrdnika.vercel.app/",
    // techstack: ["Vue", "Vite"],
  },
];

const ExperienceCard = memo(({ experience, index }) => (
  <motion.div
    key={experience.name}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={CARD_VARIANTS}
  >
    <Tilt {...TILT_PROPS}>
      <div className="group p-6 rounded-2xl shadow-lg backdrop-blur-md bg-white/10 dark:bg-white/5 hover:shadow-xl border border-white/20">
        <h3 className="text-xl font-bold mb-2">{experience.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{experience.desc}</p>
        {/* <div className="flex flex-wrap gap-2 mb-4">
          {experience.techstack.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div> */}
        <div className="flex gap-4">
          <a
            href={experience.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition"
          >
            <FaGithub className="text-lg" /> GitHub
          </a>
          {experience.preview && (
            <a
              href={experience.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-green-500 hover:text-green-600 transition"
            >
              Preview
            </a>
          )}
        </div>
      </div>
    </Tilt>
  </motion.div>
));

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
      <div className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={exp.name} experience={exp} index={idx} />
        ))}
      </div>
    </motion.section>
  );
};

export default memo(PersonalExperience);
