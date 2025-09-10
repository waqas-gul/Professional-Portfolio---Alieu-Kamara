// components/Footer.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaShieldAlt,
  FaArrowUp,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = (text, setter) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCwwIEwyMDAsMCBMMjAwLDIwMCBMMCwyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-10"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Alieu Kamara
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
              Chief Technology Officer & Cybersecurity Engineer with over 10
              years of experience in IT security, cloud orchestration, and
              executive leadership.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <FaLinkedin className="w-5 h-5" />,
                  href: "https://www.linkedin.com/in/alieukamara/",
                  label: "LinkedIn",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <FaEnvelope className="w-5 h-5" />,
                  href: "mailto:akamara@amaratechit.com",
                  label: "Email",
                  color: "hover:text-red-400",
                },
                {
                  icon: <FaGithub className="w-5 h-5" />,
                  href: "#",
                  label: "GitHub",
                  color: "hover:text-purple-400",
                },
                {
                  icon: <FaTwitter className="w-5 h-5" />,
                  href: "#",
                  label: "Twitter",
                  color: "hover:text-blue-300",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 border border-gray-700 hover:border-current hover:shadow-lg`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <FaShieldAlt className="w-5 h-5 text-blue-500 mr-2" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <FaMapMarkerAlt className="w-5 h-5 text-blue-500 mr-2" />
              Contact Info
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: <FaMapMarkerAlt className="w-4 h-4" />,
                  text: "Glen Burnie, MD, USA",
                  copy: false,
                },
                {
                  icon: <FaPhone className="w-4 h-4" />,
                  text: "+1 (240) 478-4032",
                  copy: true,
                  copied: phoneCopied,
                  setCopied: setPhoneCopied,
                },
                {
                  icon: <FaEnvelope className="w-4 h-4" />,
                  text: "akamara@amaratechit.com",
                  copy: true,
                  copied: emailCopied,
                  setCopied: setEmailCopied,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className={`flex items-start text-gray-400 group cursor-pointer ${
                    item.copy ? "hover:text-blue-400" : ""
                  }`}
                  onClick={() =>
                    item.copy && copyToClipboard(item.text, item.setCopied)
                  }
                >
                  <span className="w-5 h-5 mr-3 mt-0.5 text-blue-500">
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <span className="transition-colors duration-300">
                      {item.text}
                    </span>
                    {item.copy && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: item.copied ? 1 : 0,
                          scale: item.copied ? 1 : 0.8,
                        }}
                        className="ml-2 text-xs text-green-400 font-medium"
                      >
                        ✓ Copied!
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-800/30"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">
                  Available for consulting
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-500">
            <span>© {currentYear} Alieu Kamara. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center">
              Made for cybersecurity excellence
            </span>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating security badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 right-6 hidden lg:block"
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-3 shadow-2xl border-2 border-white/20">
          <FaShieldAlt className="w-6 h-6 text-white" />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
