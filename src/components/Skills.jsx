// components/Skills.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const skillCategories = [
    {
      title: "SIEM Tools",
      icon: "🔍",
      skills: ["Splunk", "Qradar", "Graylog"],
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Ticketing Systems",
      icon: "📋",
      skills: ["ServiceNow", "Remedy", "Phantom", "XSOAR"],
      color: "from-green-500 to-green-700",
    },
    {
      title: "EDR Solutions",
      icon: "🛡️",
      skills: ["CrowdStrike EDR", "Carbon Black", "Sentinel One"],
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Antivirus",
      icon: "🦠",
      skills: ["Wildfire", "McAfee Endpoint", "Windows Defender ATP"],
      color: "from-red-500 to-red-700",
    },
    {
      title: "Network Skills",
      icon: "🌐",
      skills: ["Palo Alto", "Wireshark", "tcpdump"],
      color: "from-cyan-500 to-cyan-700",
    },
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: ["Microsoft Azure", "AWS", "Microsoft EOATP"],
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Bash Scripting", "JSON", "YAML"],
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Other Tools",
      icon: "🛠️",
      skills: [
        "Fiddler",
        "Spider foot",
        "Cyber Threat Intelligence",
        "Axiom",
        "Akamai Kona",
      ],
      color: "from-teal-500 to-teal-700",
    },
    {
      title: "Executive Leadership Advisory",
      icon: "👔",
      skills: [
        "Data Analytics",
        "Business Intelligence",
        "Client-Centric Analysis",
        "Cybersecurity Advisory",
      ],
      color: "from-amber-500 to-amber-700",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-800/10 rounded-full -translate-x-1/4 translate-y-1/2 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase"
          >
            Technical Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-gray-800 dark:text-white mt-2 mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: "100px" } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-1 bg-blue-600 dark:bg-blue-400 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={
                isVisible
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.95 }
              }
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${category.color}"></div>

              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 group-hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isVisible
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -10 }
                      }
                      transition={{
                        delay: 0.6 + index * 0.1 + skillIndex * 0.05,
                      }}
                      className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill}
                          </span>
                          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                            {(85 + Math.random() * 15) | 0}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={
                              isVisible
                                ? { width: `${85 + Math.random() * 15}%` }
                                : { width: 0 }
                            }
                            transition={{
                              delay: 0.8 + index * 0.1 + skillIndex * 0.05,
                              duration: 1,
                            }}
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover effect border */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill tags animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {skillCategories
            .flatMap((category) => category.skills)
            .map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={
                  isVisible
                    ? { opacity: 0.03, y: -100 }
                    : { opacity: 0, y: 100 }
                }
                transition={{
                  delay: 1 + index * 0.1,
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="absolute text-gray-400 dark:text-gray-500 text-xs font-mono"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                }}
              >
                {skill}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
