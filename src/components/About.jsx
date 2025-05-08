import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// Animation variants
const TEXT_VARIANTS = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: 0.5 + i * 0.1, duration: 0.7 },
  }),
};

const PARAGRAPH_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.2, duration: 0.6 },
  }),
};

const HEADING_VARIANTS = [
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.5 },
  },
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.7 },
  },
];

// Static paragraphs for About
const PARAGRAPHS = [
  <>
    Hello! I'm{" "}
    <motion.span
      className="font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1.2 }}
      viewport={{ once: true }}
      style={{
        textShadow:
          "0 0 6px rgba(34,211,238,0.8), 0 0 12px rgba(59,130,246,0.6)",
      }}
    >
      Muhamad Andika Wardana
    </motion.span>
    , a passionate{" "}
    <motion.span
      className="font-medium bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1.4 }}
      viewport={{ once: true }}
      style={{
        textShadow:
          "0 0 6px rgba(236,72,153,0.8), 0 0 12px rgba(147,51,234,0.6)",
      }}
    >
      Junior Fullstack Developer
    </motion.span>{" "}
    with a strong interest in building web and mobile applications. I'm
    currently pursuing my degree at Universitas Pamulang.
  </>,
  "I enjoy working on both frontend and backend technologies — bringing designs to life and building robust server-side applications. My experience spans across various frameworks and libraries, allowing me to choose the right tool for each project.",
  "When I'm not coding, I'm constantly learning new tech and keeping up with the latest trends in web development.",
];

const TILT_PROPS = {
  tiltMaxAngleX: 10,
  tiltMaxAngleY: 10,
  perspective: 1000,
  transitionSpeed: 1500,
  scale: 1.02,
  glareEnable: true,
  glareMaxOpacity: 0.35,
  glareBorderRadius: "20px",
  glareColor: "#ffffff",
  glarePosition: "all",
};

const About = () => {
  const headingSpans = useMemo(() => HEADING_VARIANTS, []);
  const paragraphs = useMemo(() => PARAGRAPHS, []);

  return (
    <section className="py-16 px-6 md:px-0 max-w-3xl mx-auto text-center relative">
      <div className="w-14 h-1 bg-white/30 mx-auto mb-4 rounded-full" />

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        {headingSpans.map((cfg, idx) => (
          <motion.span
            key={idx}
            className="inline-block"
            initial={cfg.initial}
            animate={cfg.animate}
            transition={cfg.transition}
          >
            {idx === 0 ? (
              "About "
            ) : (
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            )}
          </motion.span>
        ))}
      </h2>

      <Tilt className="cursor-pointer mx-auto" {...TILT_PROPS}>
        <motion.div
          className="bg-white/10 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-10 text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={PARAGRAPH_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {text}
              {i < paragraphs.length - 1 && <br />}
            </motion.p>
          ))}
        </motion.div>
      </Tilt>
    </section>
  );
};

export default memo(About);
