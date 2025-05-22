import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const HEADING_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const PARAGRAPH_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.15, duration: 0.7, ease: "easeInOut" },
  }),
};

const PARAGRAPHS = [
  <p>
    Hello! I'm{" "}
    <motion.span
      className="font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      viewport={{ once: true }}
      style={{
        textShadow:
          "0 0 8px rgba(34,211,238,0.8), 0 0 16px rgba(59,130,246,0.6)",
      }}
    >
      Muhamad Andika Wardana
    </motion.span>
    , a <strong>fresh graduate full-stack developer</strong> in Computer Science
    from Universitas Pamulang, passionate about crafting web & mobile apps.
  </p>,
  <p>
    I excel in both frontend and backend development — translating designs into
    interactive experiences and building scalable server-side solutions.
  </p>,
  <p>
    I’m continuously exploring new technologies and contributing to open-source
    projects to sharpen my skills in modern web development.
  </p>,
];

const TILT_PROPS = {
  tiltMaxAngleX: 8,
  tiltMaxAngleY: 8,
  perspective: 1200,
  transitionSpeed: 1200,
  scale: 1.03,
  glareEnable: true,
  glareMaxOpacity: 0.3,
  glareBorderRadius: "20px",
  glareColor: "#ffffff",
  glarePosition: "all",
};

const About = () => {
  const paragraphs = useMemo(() => PARAGRAPHS, []);

  return (
    <motion.section
      id="about"
      className="py-16 px-6 md:px-0 max-w-3xl mx-auto text-center"
      variants={SECTION_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-14 h-1 bg-white/30 mx-auto mb-4 rounded-full" />

      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        variants={HEADING_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        About{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Me
        </span>
      </motion.h2>

      <Tilt className="mx-auto" {...TILT_PROPS}>
        <motion.div
          className="bg-white/10 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-10 text-sm md:text-base leading-relaxed"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {paragraphs.map((text, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={PARAGRAPH_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4"
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
      </Tilt>
    </motion.section>
  );
};

export default memo(About);
