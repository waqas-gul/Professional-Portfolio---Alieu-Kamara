// components/About.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const About = () => {
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

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-800/10 rounded-full -translate-x-1/4 translate-y-1/2 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-gray-800 dark:text-white mt-2 mb-4"
            >
              Professional Profile
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: "100px" } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="h-1 bg-blue-600 dark:bg-blue-400 mx-auto"
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 md:p-10 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Focused and skilled IT Security professional
                </span>{" "}
                with over 10 years of experience in the Information Technology
                industry. Expertise in cloud orchestration, security, Identity
                and access management, monitoring and event management,
                governance & compliance, application delivery, data protection,
                self-service, and analytics.
              </p>

              <p>
                Comfortable working both autonomously and as part of a larger
                team, with a proven record of driving projects forward, managing
                incidents, and producing service-focused solutions to technical
                faults. Previous roles include infrastructure development,
                support, and project management for a diverse range of
                businesses including international organizations, e-commerce,
                and Consulting Service companies.
              </p>

              <p>
                Most recent projects include the improvement of the Operation of
                Playbooks documentation and Modulation, IR SOPS' and Playbooks
                Scenario based on cyber drails. Wiz.io cloud solutions for the
                Security Response and Detection Engineering Team.
              </p>
            </div>

            {/* Experience highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isVisible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ delay: 0.6 }}
              className="mt-10 p-6 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-lg text-white"
            >
              <div className="flex items-center justify-center">
                <div className="text-4xl font-bold mr-4">10+</div>
                <div className="text-lg">
                  Years of Professional Experience in IT Security
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
