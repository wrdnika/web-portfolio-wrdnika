import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WORK_EXPERIENCE_VARIANTS = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6, type: "spring" },
  }),
};

const WORK_EXPERIENCES = [
  {
    title: "Management Assets App",
    stack: "Laravel Blade, Bootstrap",
    companyLogo: "/DDT.png",
    companyName: "PT. Farovon Maju Bersama",
    desc: [
      `Contributed to the development of an office asset management application by working on the backend using Laravel and the frontend using Blade and Bootstrap. The app streamlines asset tracking, recording, and management processes within the company.`,
    ],
  },
  {
    title: "Tracking App",
    stack: "Vanilla JS, Tailwind CSS, Leaflet, OpenWeather & BMKG APIs",
    companyLogo: "/DDT.png",
    companyName: "PT. Farovon Maju Bersama",
    desc: [
      `Worked on the frontend of a real-time tracking application using Vanilla JavaScript and Tailwind CSS. Implemented interactive maps using Leaflet, integrated OpenWeather API and BMKG API to provide up-to-date weather and earthquake information.`,
    ],
  },
  {
    title: "Server Monitoring Dashboard",
    stack: "Vue.js, Tailwind CSS, Chart.js, Model Viewer",
    companyLogo: "/DDT.png",
    companyName: "PT. Farovon Maju Bersama",
    desc: [
      `Contributed to the frontend development of a server monitoring dashboard using Vue.js and Tailwind CSS. Handled API integration for server data retrieval, designed data visualization with Chart.js, and implemented 3D visual elements using Model Viewer to enhance user experience.`,
    ],
  },
];

const WorkExperienceCard = memo(({ exp, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={WORK_EXPERIENCE_VARIANTS}
    className="mb-10 ml-6 relative"
  >
    <div className="p-5 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-white/5 shadow border border-white/10">
      <div className="flex items-center gap-4 mb-2">
        {exp.companyLogo && (
          <img
            src={exp.companyLogo}
            alt={exp.companyName}
            className="w-10 rounded-full"
          />
        )}
        <div>
          <h3 className="text-lg font-semibold">{exp.title}</h3>
          <p className="text-sm text-blue-400">{exp.stack}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400 mb-2">{exp.companyName}</p>
      {exp.desc.map((line, i) => (
        <p key={i} className="text-xs text-gray-300 mb-2">
          {line}
        </p>
      ))}
      {index < WORK_EXPERIENCES.length - 1 && (
        <hr className="border-gray-700 my-4" />
      )}
    </div>
  </motion.div>
));

const WorkExperience = () => {
  const workExperiences = useMemo(() => WORK_EXPERIENCES, []);

  return (
    <motion.section
      id="experience"
      className="py-12 pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={SECTION_VARIANTS}
    >
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Work Experience
      </h2>

      <div className="relative border-l-4 max-w-3xl mx-auto px-4">
        {workExperiences.map((exp, idx) => (
          <WorkExperienceCard key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </motion.section>
  );
};

export default memo(WorkExperience);
