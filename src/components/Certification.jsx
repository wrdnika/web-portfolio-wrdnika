import { motion } from "framer-motion";

const certificationVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, type: "spring" },
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

const Certification = () => {
  return (
    <motion.section
      id="certification"
      className="py-12 pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Certification
      </h2>

      <div className="grid gap-6 max-w-4xl mx-auto px-4">
        {[
          {
            title: "Progamming, Consulting, and Activies Related Thereto",
            issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
            logo: "/bnsp.png",
            file: "/sert.jpeg",
          },
        ].map((cert, i) => (
          <motion.a
            key={i}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={certificationVariant}
            className="relative group flex items-center gap-4 p-5 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-white/5 shadow border border-white/10 transition hover:scale-105"
          >
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition duration-300 bg-gray-800 text-white text-xs rounded px-2 py-1 z-50 pointer-events-none">
              Klik untuk lihat sertifikat
            </div>

            {/* Logo */}
            <img
              src={cert.logo}
              alt={cert.issuer}
              className="w-14 h-14 object-contain rounded"
            />

            {/* Info */}
            <div>
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <p className="text-sm italic opacity-70">{cert.date}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Certification;
