import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";

// Animation variants
const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CERTIFICATION_VARIANTS = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, type: "spring" },
  }),
};

// Static certification data
const CERTIFICATIONS = [
  {
    title: "Progamming, Consulting, and Activies Related Thereto",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    logo: "/bnsp.png",
    file: "/sert.jpeg",
  },
];

const CertificationCard = memo(({ cert, index }) => (
  <motion.a
    href={cert.file}
    target="_blank"
    rel="noopener noreferrer"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={CERTIFICATION_VARIANTS}
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
      {cert.date && <p className="text-sm italic opacity-70">{cert.date}</p>}
    </div>
  </motion.a>
));

const Certification = () => {
  const certifications = useMemo(() => CERTIFICATIONS, []);

  return (
    <motion.section
      id="certification"
      className="py-12 pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={SECTION_VARIANTS}
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Certification
      </h2>

      <div className="grid gap-6 max-w-4xl mx-auto px-4">
        {certifications.map((cert, idx) => (
          <CertificationCard key={idx} cert={cert} index={idx} />
        ))}
      </div>
    </motion.section>
  );
};

export default memo(Certification);
