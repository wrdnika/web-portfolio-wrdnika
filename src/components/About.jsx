import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="py-16 px-6 md:px-0 max-w-3xl mx-auto text-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay: 0.2 },
        },
      }}
    >
      {/* Garis kecil dekoratif */}
      <div className="w-14 h-1 bg-white/30 mx-auto mb-4 rounded-full" />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text">
        About <span>Me</span>
      </h2>

      {/* Card Glassmorphism */}
      <div className="bg-white/30 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-10 text-sm md:text-base leading-relaxed">
        <p>
          Hello! I'm <span className="font-medium">Muhamad Andika Wardana</span>
          , a passionate
          <span className="font-medium"> Junior Fullstack Developer</span> with
          a strong interest in building web and mobile applications. I'm
          currently pursuing my degree at Universitas Pamulang.
        </p>
        <br />
        <p>
          I enjoy working on both frontend and backend technologies — bringing
          designs to life and building robust server-side applications. My
          experience spans across various frameworks and libraries, allowing me
          to choose the right tool for each project.
        </p>
        <br />
        <p>
          When I'm not coding, I'm constantly learning new tech and keeping up
          with the latest trends in web development.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
