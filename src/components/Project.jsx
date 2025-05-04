import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Project = () => {
  return (
    <motion.section
      id="projects"
      className="py-12 pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Personal Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
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
        ].map(({ name, github, desc }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.03}
              transitionSpeed={250}
              glareEnable={true}
              glareMaxOpacity={0.45}
              glareBorderRadius="20px"
              glareColor="#ffffff"
              glarePosition="all"
              className="transition-transform duration-300 "
            >
              <div className="group p-6 rounded-2xl shadow-lg backdrop-blur-md bg-white/10 dark:bg-white/5 hover:shadow-xl border border-white/20">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-sm text-gray-500 mb-4">{desc}</p>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition "
                >
                  <FaGithub className="text-lg" /> GitHub
                </a>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Project;
