// components/Certifications.jsx
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Import React Icons (make sure to install: npm install react-icons)
import {
  FaAws,
  FaMicrosoft,
  FaShieldAlt,
  FaCertificate,
  FaNetworkWired,
  FaCogs,
  FaCloud,
  FaServer,
  FaLock,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";

const CertificationCard = ({ cert, index, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.9 }
      }
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      {/* Icon container with gradient background */}
      <div className="relative z-10 flex justify-center mb-4">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {cert}
      </h3>

      {/* Subtle bottom border accent on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-500 ease-out"></div>
    </motion.div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Developer Associate",
      icon: <FaAws className="w-8 h-8 text-white" />,
    },
    {
      name: "Microsoft Azure Security Engineer Associate",
      icon: <FaMicrosoft className="w-8 h-8 text-white" />,
    },
    {
      name: "Security+ Certification",
      icon: <FaShieldAlt className="w-8 h-8 text-white" />,
    },
    {
      name: "Certified Information Security Management Systems Auditor (ISO/IEC 27001:2005)",
      icon: <FaCertificate className="w-8 h-8 text-white" />,
    },
    {
      name: "CCNA1 - Networking Basics",
      icon: <FaNetworkWired className="w-8 h-8 text-white" />,
    },
    {
      name: "CCNA2 - Router and Routing Basics",
      icon: <FaNetworkWired className="w-8 h-8 text-white" />,
    },
    {
      name: "CCNA3 - Switching and Intermediate Routing",
      icon: <FaNetworkWired className="w-8 h-8 text-white" />,
    },
    {
      name: "CCNA4 - WAN Technologies",
      icon: <FaNetworkWired className="w-8 h-8 text-white" />,
    },
    {
      name: "CCNS - Cisco Certified Network Security",
      icon: <FaLock className="w-8 h-8 text-white" />,
    },
    {
      name: "Cisco Telepresence Management Suite (TMS)",
      icon: <FaServer className="w-8 h-8 text-white" />,
    },
    {
      name: "Tenable Cloud Administrator",
      icon: <FaCloud className="w-8 h-8 text-white" />,
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-blue-50 dark:bg-blue-900/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-800/20 rounded-full blur-3xl"></div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16 relative"
        >
          Certifications
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "140px" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              cert={cert.name}
              index={index}
              icon={cert.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
