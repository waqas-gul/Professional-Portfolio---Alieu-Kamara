// components/Hero.jsx
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import resume from "../assets/resume.pdf";
import profileImage from "../assets/profile.jpg"; // Make sure to add your image

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  const texts = [
    "Chief Technology Officer",
    "Cybersecurity Engineer",
    "Technology Innovator",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = currentTextIndex % texts.length;
      const fullText = texts[current];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed]);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas properly
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
      ctx.scale(dpr, dpr); // scale for DPR
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Nodes
    const nodes = [];
    const nodeCount = 60;
    const connectionDistance = 150;

    // Security terms
    const securityTerms = [
      "Firewall",
      "Encryption",
      "VPN",
      "Auth",
      "SSL",
      "HTTPS",
      "2FA",
      "Zero Trust",
    ];

    const floatingTerms = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(59, 130, 246, 0.08)";
      ctx.lineWidth = 1;
      const gridSize = 50;

      for (let x = 0; x < window.innerWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
      }

      for (let y = 0; y < window.innerHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();

      // Nodes
      nodes.forEach((node) => {
        node.x += node.speedX;
        node.y += node.speedY;

        if (node.x < 0 || node.x > window.innerWidth) node.speedX *= -1;
        if (node.y < 0 || node.y > window.innerHeight) node.speedY *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.7)";
        ctx.fill();
      });

      // Connections + binary
      ctx.strokeStyle = "rgba(59, 130, 246, 0.35)";
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            if (dist > connectionDistance / 2 && Math.random() > 0.98) {
              ctx.font = "11px monospace";
              ctx.fillStyle = "rgba(16, 185, 129, 0.8)";
              const midX = (nodes[i].x + nodes[j].x) / 2;
              const midY = (nodes[i].y + nodes[j].y) / 2;
              ctx.fillText(Math.random() > 0.5 ? "1" : "0", midX, midY);
            }
          }
        }
      }

      // Floating security terms
      if (Math.random() > 0.995 && floatingTerms.length < 5) {
        const term =
          securityTerms[Math.floor(Math.random() * securityTerms.length)];
        floatingTerms.push({
          text: term,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: 1,
          speed: Math.random() * 0.2 + 0.2,
          direction: Math.random() > 0.2 ? 1 : -1,
        });
      }

      for (let i = floatingTerms.length - 1; i >= 0; i--) {
        const term = floatingTerms[i];
        term.y -= term.speed;
        term.x += 0.3 * term.direction;
        term.opacity -= 0.004;

        ctx.font = "13px monospace";
        ctx.fillStyle = `rgba(239, 68, 68, ${term.opacity})`;
        ctx.fillText(term.text, term.x, term.y);

        if (term.opacity <= 0) {
          floatingTerms.splice(i, 1);
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-20 relative overflow-hidden"
    >
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4"
            >
              Alieu Kamara
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 mb-6 h-14"
            >
              {currentText}
              <span className="typing-cursor">|</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-10"
            >
              Glen Burnie, MD, USA
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 20px rgba(59, 130, 246, 0.6)", // Tailwind's blue-500 with opacity
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors text-center"
              >
                Hire Me
              </motion.a>

              <motion.a
                href={resume}
                download
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 20px rgba(59, 130, 246, 0.6)", // blue glow
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 text-center"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-lg opacity-20"></div>
              <motion.img
                src={profileImage}
                alt="Alieu Kamara"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 25px rgba(59, 130, 246, 0.7)", // blue glow effect
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-lg shadow-lg">
                🔒 SECURE
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .typing-cursor {
          animation: blink 1s infinite;
          color: #3b82f6;
        }
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
