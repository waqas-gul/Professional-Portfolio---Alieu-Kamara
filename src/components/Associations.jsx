// components/Associations.jsx
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  FaSchool,
  FaMicrosoft,
  FaShieldAlt,
  FaHandshake,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const AssociationCard = ({ assoc, index, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{ duration: 0.6, delay: index * 0.15 }}
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
        <div className="p-3 bg-gradient-to-r from-[#E37378] to-indigo-600 rounded-full group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#D94A4F] dark:text-[#ED9C9F] text-center mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
        {assoc.name}
      </h3>

      {/* Period and location */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <FaCalendarAlt className="w-4 h-4 mr-2 text-[#ED9C9F]" />
          <span>{assoc.period}</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="w-4 h-4 mr-2 text-[#ED9C9F]" />
          <span>{assoc.location}</span>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-center relative z-10">
        {assoc.description}
      </p>

      {/* Hover effect line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#E37378] to-indigo-600 group-hover:w-full transition-all duration-500 ease-out"></div>
    </motion.div>
  );
};

const Associations = () => {
  const associations = [
    {
      name: "John Hopkins Carey Business School Consulting Lab Alumni",
      period: "March 2024 - Present",
      location: "Baltimore, MD",
      description:
        "The Community Consulting Lab is a unique, eight-week hands-on, fully supported, consulting experience and business accelerator program.",
      icon: <FaSchool className="w-8 h-8 text-white" />,
    },
    {
      name: "Microsoft Black Partner Growth Initiative",
      period: "2023 - Present",
      location: "Washington, D.C.",
      description:
        "The Black Partner Growth Initiative (BPGI) focuses on identifying and providing Black-owned tech organizations with access to information, capital, community, and resources.",
      icon: <FaMicrosoft className="w-8 h-8 text-white" />,
    },
    {
      name: "Black in Cybersecurity",
      period: "2023 - Present",
      location: "Washington, D.C.",
      description:
        "Blacks In Cybersecurity is a meetup group and conference series to help highlight and elevate the Black community in Cybersecurity.",
      icon: <FaShieldAlt className="w-8 h-8 text-white" />,
    },
    {
      name: "AAEDC Inclusive Ventures Program Alumni",
      period: "2021 - Present",
      location: "Maryland",
      description:
        "The Inclusive Ventures Program (IVP) helps small, minority-owned, woman-owned, and Veteran-owned businesses in Anne Arundel County succeed and grow.",
      icon: <FaHandshake className="w-8 h-8 text-white" />,
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="associations"
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
          Professional Associations
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "220px" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-[#E37378] mx-auto mt-4 rounded-full"
          ></motion.div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {associations.map((assoc, index) => (
            <AssociationCard
              key={index}
              assoc={assoc}
              index={index}
              icon={assoc.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associations;
