// components/Education.jsx
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";

const EducationItem = ({ edu, index, total }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex group"
    >
      {/* Timeline connector */}
      {index < total - 1 && (
        <div className="absolute left-6 top-14 bottom-0 w-1 bg-blue-200 dark:bg-blue-800/40 z-0">
          <div
            className="h-0 w-full bg-blue-500 transition-all duration-1000 ease-out"
            style={{ height: isInView ? "100%" : "0%" }}
          ></div>
        </div>
      )}

      {/* Timeline dot */}
      <div className="flex-shrink-0 relative z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
          <FaGraduationCap className="w-6 h-6" />
        </div>
      </div>

      {/* Content */}
      <div className="ml-6 flex-1 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
        {/* Degree title with accent */}
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {edu.degree}
        </h3>

        {/* Institution with icon */}
        <div className="flex items-center text-lg text-gray-700 dark:text-gray-300 mb-3">
          <FaUniversity className="w-5 h-5 text-blue-500 mr-2" />
          <span>{edu.institution}</span>
        </div>

        {/* Year with icon */}
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <FaCalendarAlt className="w-4 h-4 text-blue-400 mr-2" />
          <span>{edu.year}</span>
        </div>

        {/* Hover effect line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-500 ease-out"></div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const education = [
    {
      degree:
        "Master Certificate MSc Network Information Security and Management",
      institution: "Kingston University",
      year: "2012",
    },
    {
      degree: "B.S., Computer Networking",
      institution: "London Metropolitan University",
      year: "2010",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
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
          Education
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <EducationItem
              key={index}
              edu={edu}
              index={index}
              total={education.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
