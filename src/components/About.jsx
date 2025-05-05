import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const About = () => {
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.7,
      },
    }),
  };

  // Paragraph animation variants
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <motion.section
      className="py-16 px-6 md:px-0 max-w-3xl mx-auto text-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay: 0.2 },
        },
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 30 + 10,
              height: Math.random() * 30 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.7, 0],
              scale: [1, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Garis kecil dekoratif dengan animasi */}
      <motion.div
        className="w-14 h-1 bg-white/30 mx-auto mb-4 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 56 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Heading dengan animasi */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.4 },
          },
        }}
      >
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          About{" "}
        </motion.span>
        <motion.span
          className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Me
        </motion.span>
      </motion.h2>

      {/* Card Glassmorphism with Tilt Effect */}
      <Tilt
        className="cursor-pointer mx-auto"
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        transitionSpeed={1500}
        scale={1.02}
        glareEnable={true}
        glareMaxOpacity={0.65}
        glareBorderRadius="20px"
        glareColor="#ffffff"
        glarePosition="all"
      >
        <motion.div
          className="bg-white/30 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-10 text-sm md:text-base leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.6,
              },
            },
          }}
        >
          <motion.p custom={0} variants={paragraphVariants}>
            Hello! I'm{" "}
            <motion.span
              className="font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              viewport={{ once: true }}
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
            >
              Junior Fullstack Developer
            </motion.span>{" "}
            with a strong interest in building web and mobile applications. I'm
            currently pursuing my degree at Universitas Pamulang.
          </motion.p>
          <br />
          <motion.p custom={1} variants={paragraphVariants}>
            I enjoy working on both frontend and backend technologies — bringing
            designs to life and building robust server-side applications. My
            experience spans across various frameworks and libraries, allowing
            me to choose the right tool for each project.
          </motion.p>
          <br />
          <motion.p custom={2} variants={paragraphVariants}>
            When I'm not coding, I'm constantly learning new tech and keeping up
            with the latest trends in web development.
          </motion.p>
        </motion.div>
      </Tilt>
    </motion.section>
  );
};

export default About;
