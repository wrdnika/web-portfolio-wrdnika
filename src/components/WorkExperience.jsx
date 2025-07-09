import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const PROJECT_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// Array of work experiences
const WORK_EXPERIENCES = [
  {
    companyName: "PT. Farovon Maju Bersama",
    companyLogo: "/DDT.png",
    duration: "Dec 2024 - Mar 2025",
    intro:
      "At PT. Farovon Maju Bersama, I contributed to multiple projects involving web development, API integration, and data visualization.",
    projects: [
      {
        title: "Tracking App",
        stack: "Vanilla JS, Tailwind CSS, Leaflet, OpenWeather & BMKG APIs",
        desc: "Worked on the frontend of a real-time tracking application using Vanilla JavaScript and Tailwind CSS. Implemented interactive maps using Leaflet, integrated OpenWeather API and BMKG API to provide up-to-date weather and earthquake information.",
      },
      {
        title: "Server Monitoring Dashboard",
        stack: "Vue.js, Tailwind CSS, Chart.js, Model Viewer",
        desc: "Contributed to the frontend development of a server monitoring dashboard using Vue.js and Tailwind CSS. Handled API integration for server data retrieval, designed data visualization with Chart.js, and implemented 3D visual elements using Model Viewer to enhance user experience.",
      },
    ],
  },
  {
    companyName: "PT. SIT Global Systems",
    companyLogo: "/SIT.png",
    duration: "June 2025 - Present",
    intro:
      "At PT SIT Global Systems, I contributed to the development of desktop and web-based ERP systems.",
    projects: [
      {
        title: "ERP System Development",
        stack: "Java EE, EasyMaker(from Kr), Laravel",
        desc: "Collaborated in designing and implementing core modules of a desktop ERP application using Java EE with EasyMaker(from Kr). and Laravel for web systems",
      },
    ],
  },
];

const ProjectItem = memo(({ project, index, total }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-20px" }}
    variants={PROJECT_VARIANTS}
    className="relative pl-8 pb-6 last:pb-0"
    style={{ willChange: "transform, opacity" }}
  >
    {/* Project timeline dot */}
    <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-20"></div>
    </div>

    {/* Project timeline line */}
    {index < total - 0 && (
      <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gradient-to-b from-blue-400/50 to-purple-500/20"></div>
    )}

    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
      whileHover={{
        y: -2,
        scale: 1.01,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
        <h4 className="text-lg font-semibold text-white">{project.title}</h4>
        <span className="text-xs px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-400/30 w-fit">
          Project
        </span>
      </div>

      <div className="mb-3">
        <p className="text-sm text-blue-400 font-medium">{project.stack}</p>
      </div>

      <p className="text-sm text-gray-300 leading-relaxed">{project.desc}</p>
    </motion.div>
  </motion.div>
));

const WorkExperience = () => {
  const experiences = useMemo(() => WORK_EXPERIENCES, []);

  return (
    <section id="experience" className="py-12 pt-24">
      <motion.h2
        className="text-3xl font-semibold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto px-4 space-y-16">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={CARD_VARIANTS}
            className="relative"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Company Card Header */}
            <motion.div
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 mb-8"
              whileHover={{
                scale: 1.01,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                {exp.companyLogo && (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={exp.companyLogo}
                      alt={exp.companyName}
                      className="w-16 h-16 rounded-full shadow-lg border-2 border-white/20"
                    />
                  </motion.div>
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.companyName}
                  </h3>
                  <p className="text-blue-400 font-medium">{exp.duration}</p>
                </div>
              </div>

              <div className="text-sm text-gray-300 mb-4">
                <p>{exp.intro}</p>
              </div>
            </motion.div>

            {/* Projects Timeline */}
            <div className="relative">
              <div className="space-y-0">
                {exp.projects.map((project, i) => (
                  <ProjectItem
                    key={i}
                    project={project}
                    index={i}
                    total={exp.projects.length}
                  />
                ))}
              </div>
            </div>

            {/* Summary Footer */}
            <motion.div
              className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-300 text-center">
                Gained hands-on experience in full-stack development, API
                integration, and modern web technologies
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default memo(WorkExperience);
