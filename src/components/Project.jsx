import React, { memo, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// Static variants and data
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

const PROJECTS = [
  {
    name: "Donation App Android",
    github: "https://github.com/wrdnika/mobile-donation-app-flutter",
    desc: "Donation App with Flutter, Supabase, dan Midtrans.",
  },
  {
    name: "Web Admin Donation",
    github: "https://github.com/wrdnika/admin-donasi",
    desc: "Dashboard donation web Dashboard.",
  },
];

const ProjectCard = memo(({ project, index }) => (
  <motion.div
    key={project.name}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={CARD_VARIANTS}
  >
    <Tilt {...TILT_PROPS}>
      <div className="group p-6 rounded-2xl shadow-lg backdrop-blur-md bg-white/10 dark:bg-white/5 hover:shadow-xl border border-white/20">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{project.desc}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition"
        >
          <FaGithub className="text-lg" /> GitHub
        </a>
      </div>
    </Tilt>
  </motion.div>
));

const Project = () => {
  const projects = useMemo(() => PROJECTS, []);

  return (
    <motion.section
      id="projects"
      className="py-12 pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={SECTION_VARIANTS}
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Personal Projects
      </h2>
      <div className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <ProjectCard key={proj.name} project={proj} index={idx} />
        ))}
      </div>
    </motion.section>
  );
};

export default memo(Project);
