import { motion } from "framer-motion";

const experienceVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-12 pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      <h2 className="text-3xl font-semibold mb-12 text-center">Experience</h2>

      <div className="relative border-l-4 max-w-3xl mx-auto px-4">
        {[
          {
            title: "Tracking Location Web App",
            stack: "Vue.js, Tailwind, Vite",
            companyLogo: "/DDT.png",
            companyName: "PT. Delta Digital Technology",
          },
          {
            title: "Server Monitoring Dashboard Web App",
            stack: "Vue.js, Tailwind, Vite",
            companyLogo: "/DDT.png",
            companyName: "PT. Delta Digital Technology",
          },
          {
            title: "Management Asset Web App",
            stack: "Laravel Blade",
            companyLogo: "/DDT.png",
            companyName: "PT. Delta Digital Technology",
          },
        ].map((exp, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={experienceVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 ml-6 relative"
          >
            {/* Card */}
            <div className="p-5 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-white/5 shadow border border-white/10">
              <div className="flex items-center gap-4 mb-2">
                {exp.companyLogo && (
                  <img
                    src={exp.companyLogo}
                    alt={exp.companyName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-blue-400">{exp.stack}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">{exp.companyName}</p>
              <p className="text-sm italic opacity-60">{exp.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
