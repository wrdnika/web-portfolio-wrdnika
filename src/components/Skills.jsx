import React, { memo, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiVuedotjs,
  SiExpress,
  SiVite,
  SiLaravel,
  SiPostman,
  SiFlutter,
  SiSupabase,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiGithub,
  SiGitlab,
} from "react-icons/si";

// Tech stack icons list
const TECH_STACK = [
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss3 />, name: "CSS3" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiVuedotjs />, name: "Vue.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <SiLaravel />, name: "Laravel" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiGitlab />, name: "GitLab" },
];

// Variants for section and icons
const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ICON_VARIANTS = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

// Tilt default props
const TILT_PROPS = {
  tiltMaxAngleX: 15,
  tiltMaxAngleY: 15,
  perspective: 1000,
  transitionSpeed: 1500,
  scale: 1.02,
  glareEnable: true,
  glareMaxOpacity: 0.35,
  glareBorderRadius: "20px",
  glareColor: "#ffffff",
  glarePosition: "all",
};

const Skills = () => {
  const techItems = useMemo(() => TECH_STACK, []);

  return (
    <motion.section
      id="skills"
      className="py-12 pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={SECTION_VARIANTS}
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>

      <div className="mb-10 text-center">
        <h3 className="text-xl font-semibold mb-2">Tools</h3>
        <p className="text-gray-600 dark:text-gray-400">
          MS Word, Excel, Spreadsheet, Trello, Canva, Figma
        </p>
      </div>

      <h3 className="text-xl font-semibold text-center mb-2">Tech Stack</h3>
      <p className="text-center text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8">
        Programming languages: Html, Css, JavaScript, PHP, Dart.
        <br />
        Here are the technologies and tools I use in web and app development.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
        {techItems.map(({ icon, name }, i) => (
          <Tilt key={name} className="cursor-pointer mx-auto" {...TILT_PROPS}>
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ICON_VARIANTS}
              className="flex flex-col items-center gap-2 w-28 h-28 p-4 backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/10 rounded-2xl shadow-md transition-transform hover:rotate-[2deg] hover:scale-110"
            >
              <div className="text-4xl">{icon}</div>
              <span className="text-sm text-center">{name}</span>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
};

export default memo(Skills);
