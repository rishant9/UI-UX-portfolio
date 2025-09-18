import { RevealOnScroll } from "../RevealOnScroll";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const allProjects = [
    // Important first
    {
      title: "Medzy (UI/UX)",
      description:
        "End-to-end healthcare booking app focused on simplifying doctor-patient interactions. Designed full UI/UX flow in Figma including wireframes, personas, user journeys, and prototypes.",
      tech: ["Figma", "UI/UX", "Prototyping", "Accessibility"],
      link: "https://www.figma.com/design/ztyTemscFMamsR1i9AdZJI/Medzyy?node-id=0-1&t=SYGlXPJZdd5GbPgb-1",
      important: true,
    },
    {
      title: "DejaVu (UI/UX)",
      description:
        "Conceptual dream journaling app focused on emotional tracking. Complete UI/UX journey in Figma with wireframes, mood boards, and flows.",
      tech: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
      link: "https://www.figma.com/design/32BgeZQtVR4JgIEEZha1z6/Dejavu?node-id=0-1&t=i2NzLgrgXPNLKkhK-1",
      important: true,
    },
    {
      title: "Medzy App (React Native + Firebase)",
      description:
        "Cross-platform mobile app with user authentication, real-time database, AsyncStorage, push notifications, and form validation.",
      tech: ["React Native", "Expo", "Firebase", "AsyncStorage"],
      link: "#",
      important: true,
    },
    {
      title: "Medzy (MERN Stack)",
      description:
        "Full-stack healthcare appointment booking platform with secure authentication, appointment scheduling, and dashboards.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      link: "#",
      important: true,
    },
    
    {
      title: "Revive Soles (MERN Stack + Firebase)",
      description:
        "E-commerce project for shoe retail with login, catalog, cart, real-time updates, and cloud storage.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Firebase"],
      link: "#",
      important: true,
    },
    // Other projects
    {
      title: "White Rose Wedding Website",
      description:
        "Freelance frontend site for wedding planning using HTML, CSS, JS, Bootstrap. Fully responsive with custom branding.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://rt81044.github.io/WhiteRoseWedding/whiteRose.html",
      important: false,
    },
    {
      title: "E-Commerce Website (WordPress)",
      description:
        "Freelance e-commerce site with WooCommerce, secure payments, SEO optimization, and client training.",
      tech: ["WordPress", "WooCommerce", "SEO"],
      link: "#",
      important: false,
    },
    {
      title: "Gothify (MERN Stack)",
      description:
        "Full-stack music streaming app with playlist creation, real-time playback, and responsive UI.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      link: "#",
      important: false,
    },
  ];

  const sortedProjects = allProjects.sort((a, b) =>
    a.important === b.important ? 0 : a.important ? -1 : 1
  );

  const [showAll, setShowAll] = useState(false);

  const SpotlightCard = ({ children }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(0.6)}
        onMouseLeave={() => setOpacity(0)}
        className="relative rounded-3xl border border-white/5 bg-neutral-900/70 overflow-hidden p-8 transition-transform hover:-translate-y-1 backdrop-blur-sm"
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{
            opacity,
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.25), transparent 80%)`,
          }}
        />
        {children}
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(showAll ? sortedProjects : sortedProjects.slice(0, 4)).map(
              (project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-white/10 text-white py-1 px-3 rounded-full text-sm hover:bg-white/20 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="text-white hover:text-pink-300 transition-colors"
                    >
                      View Project →
                    </a>
                  </SpotlightCard>
                </motion.div>
              )
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
