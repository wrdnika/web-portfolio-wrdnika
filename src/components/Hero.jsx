import { motion } from "framer-motion";
import { SiGithub, SiInstagram, SiGmail, SiWhatsapp } from "react-icons/si";

// Aurora Background Component
const blobTransition = {
  duration: 10,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

const Aurora = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <motion.div
        className="absolute top-0 -left-4 w-80 h-80 rounded-full filter blur-2xl opacity-70 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light bg-gradient-to-tr from-green-300 via-blue-400 to-purple-500"
        animate={{ x: [0, 40, -40, 0], y: [0, 30, -30, 0] }}
        transition={blobTransition}
      />
      <motion.div
        className="absolute top-0 -right-4 w-80 h-80 rounded-full filter blur-2xl opacity-70 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light bg-gradient-to-br from-yellow-300 via-red-400 to-pink-500"
        animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
        transition={{ ...blobTransition, delay: 2 }}
      />
      <motion.div
        className="absolute -bottom-0 left-20 w-80 h-80 rounded-full filter blur-2xl opacity-70 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light bg-gradient-to-tl from-blue-300 via-indigo-400 to-pink-600"
        animate={{ x: [0, 30, -30, 0], y: [0, 35, -35, 0] }}
        transition={{ ...blobTransition, delay: 4 }}
      />
      <motion.div
        className="absolute -bottom-0 right-20 w-80 h-80 rounded-full filter blur-2xl opacity-70 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light bg-gradient-to-t from-green-300 via-teal-400 to-blue-600"
        animate={{ x: [0, -30, 30, 0], y: [0, -35, 35, 0] }}
        transition={{ ...blobTransition, delay: 6 }}
      />
    </div>
  );
};

const ProfileImage = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-green-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition duration-700"></div>
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg bg-white/30 dark:bg-black/30 backdrop-blur-md relative">
        <img
          src="/dika.jpeg"
          alt="Profile"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

const socialLinks = [
  {
    name: "GitHub",
    icon: <SiGithub />,
    url: "https://github.com/wrdnika",
  },
  {
    name: "Instagram",
    icon: <SiInstagram />,
    url: "https://instagram.com/wrdnika",
  },
  {
    name: "Gmail",
    icon: <SiGmail />,
    url: "mailto:muhamadandikawardana@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <SiWhatsapp />,
    url: "https://wa.me/6285210721169",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12 bg-white/5 dark:bg-black/5 backdrop-blur-sm"
    >
      {/* Aurora Background */}
      <Aurora />

      {/* Glassmorphism Card */}
      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 backdrop-blur-lg bg-black/5 dark:bg-black/20 rounded-3xl p-8 md:p-12 shadow-lg border border-white/20 dark:border-white/10">
        {/* Profile Image */}
        <div className="transform transition-all duration-700 hover:scale-105">
          <ProfileImage />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          {/* Teks Perkenalan */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center md:text-left max-w-xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Hi, I'm Muhamad Andika Wardana
            </h1>
            <p className="text-lg md:text-xl mb-6">
              A passionate{" "}
              <span className="font-semibold">Fullstack Developer</span>
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-105 transition"
              >
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                className="px-6 py-2 border-2 border-black dark:border-white rounded-full hover:scale-105 transition"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Social Media Icons */}
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            {socialLinks.map(({ name, icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transform hover:scale-110 transition duration-300"
                aria-label={name}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
