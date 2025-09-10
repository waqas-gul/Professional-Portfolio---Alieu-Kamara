// components/Experience.jsx
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const ExperienceItem = ({ exp, index, total }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex flex-col md:flex-row mb-12 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-10 bottom-0 w-1 bg-blue-200 dark:bg-blue-800/40 transform -translate-x-1/2 md:-translate-x-1/2 z-0">
        <div 
          className="h-0 w-full bg-blue-500 transition-all duration-1000 ease-out" 
          style={{ height: isInView ? '100%' : '0%' }}
        ></div>
      </div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-8 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 shadow-lg transform -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
      
      {/* Content */}
      <div className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ml-8 md:ml-0 md:w-5/12 relative group-hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute transform rotate-45 bg-blue-500 text-white text-xs font-bold py-1 px-6 top-4 -right-4"></div>
        </div>
        
        {/* Date badge */}
        <div className="absolute -top-3 left-6 bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
          {exp.period}
        </div>
        
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          {exp.role}
        </h3>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-medium">
          {exp.company} · {exp.location}
        </p>
        
        <ul className="space-y-3">
          {exp.achievements.map((achievement, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.15 + i * 0.1 }}
              className="flex items-start text-gray-600 dark:text-gray-300"
            >
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
        
        {/* Hover effect line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const experiences = [
    {
      role: "Manager - Security Process & Vulnerability",
      company: "National Institute of Health (Zero Trust)",
      location: "Rockville Campus",
      period: "Mar 2020 - Present",
      achievements: [
        "Coordinated Security Incidents and implementation plans",
        "Documented business processes and analyzed procedures",
        "Improved security productivity level by 90% through continuous monitoring",
        "Developed vulnerability and remediation progress reports"
      ]
    },
    {
      role: "Lead Cybersecurity Engineer (Purple Team Specialist)",
      company: "Wells Fargo",
      location: "Virginia",
      period: "Oct 2022 - Mar 2024",
      achievements: [
        "Handled Cyber security incidents through the IR lifecycle",
        "Led initiatives for refining tools and processes",
        "Reduced ticket fatigue by 90% for Incident Response Analysts",
        "Analyzed threat actors' intent and capabilities, recommending preventive controls"
      ]
    },
    {
      role: "Sr. Cybersecurity Engineer - Detection & Response Team",
      company: "Coupang",
      location: "California",
      period: "Apr 2020 - Oct 2022",
      achievements: [
        "Performed OSINT on IOCs respective to incidents",
        "Oversaw writing new security policies and implementing solutions",
        "Led CSOC initiatives including SOC Monitoring and Infrastructure",
        "Effectively managed Level 3 escalations, resolving 15% of submitted tickets"
      ]
    },
    {
      role: "Information Security Analyst (ISOC) (Tier III)",
      company: "WorldBank Group",
      location: "Washington, D.C.",
      period: "May 2015 - Mar 2020",
      achievements: [
        "Reduced threat intel attack surface by 65%",
        "Successfully reduced phishing email responses by 35%",
        "Conducted detailed IR investigations and recommended solutions",
        "Utilized SIEM and other tools for monitoring security events"
      ]
    }
  ]

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
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
          Professional Experience
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "140px" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </motion.h2>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800/40 transform -translate-x-1/2 md:-translate-x-1/2 z-0">
            <div 
              className="h-0 w-full bg-blue-500 transition-all duration-1000 ease-out" 
              style={{ height: isInView ? '100%' : '0%' }}
            ></div>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceItem 
                key={index} 
                exp={exp} 
                index={index} 
                total={experiences.length} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience