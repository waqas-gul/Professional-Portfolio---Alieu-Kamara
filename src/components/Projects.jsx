// components/Projects.jsx
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.95 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute transform rotate-45 bg-blue-500 text-white text-xs font-bold py-1 px-6 top-4 -right-4"></div>
      </div>

      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 relative z-10">
        {project.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4 relative z-10">
        {project.description}
      </p>

      <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors duration-300 relative z-10">
        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          Key Outcomes:
        </h4>
        <p className="text-sm text-blue-600 dark:text-blue-200">
          {project.outcomes}
        </p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Ransomware Detection Engineering",
      description:
        "Reviewing Ransomware process evaluation against WBG controls, recommending best practices. Reviewing tactics, technology, and processes for detecting ransomware and bad actors.",
      outcomes:
        "Testing rules and mapping to Kill Chain, understanding WBG Visibility, Development of OSINT Tool (Spider foot)",
    },
    {
      title: "Playbook Development",
      description:
        "Leading the development of Playbooks and effectively applying a structural analytical approach to resolving missing Playbooks.",
      outcomes:
        "Demonstrated Quality Control and accuracy throughout PB creation by team members",
    },
    {
      title: "Security Process & Vulnerability Management",
      description:
        "Leading Zero Trust initiatives and activities that address security Processes and reporting.",
      outcomes:
        "Refined SOPs documentation, created SNOW dashboard for tracking visibility, implemented Power BI reporting",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
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
          Key Projects
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
