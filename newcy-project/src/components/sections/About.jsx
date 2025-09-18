import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const designSkills = [
    "UI/UX Design", "Figma", "Prototyping", "Wireframing", "Adobe Xd", "User Research","Usability Testing"
  ];
  const frontendSkills = [
    "HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "TailwindCSS", "WordPress", "Elementor"
  ];
  const backendSkills = [
    "Node.js", "Express.js", "PHP", "Laravel", "Python", "SQL", "MySQL", "MongoDB", "Firebase"
  ];
  
  const toolsSkills = [
    "Git", "GitHub", "VS Code", "Postman", "cPanel", "Firebase Hosting"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Creative and detail-oriented UI/UX Designer & Frontend Developer with a strong background in MERN stack, mobile app development, and design thinking. Experienced in building user-centric products from ideation to deployment, with expertise in Figma, prototyping, wireframing, and responsive design. Currently pursuing B.Voc in Software Development with hands-on experience in full-stack and UI/UX projects.
            </p>

            {/* Skills Grid */}

             

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-white">Design</h3>
                <div className="flex flex-wrap gap-2">
                  {designSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(245,40,145,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-white">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(245,40,145,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-white">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(245,40,145,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-white">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(245,40,145,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Social Scoop – Web & App Developer | UI/UX Designer (Jan 2024 – Present)</h4>
                  <p>
                    Developed responsive web & mobile apps using MERN stack, WordPress, and Figma. Delivered secure APIs, engaging UI designs, and optimized performance for multiple clients.
                  </p>
                </div>
              
              </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>
                  <strong>B.Voc in Software Development</strong> – Thakur College of Engineering and Technology (Graduation: 2025)
                </li>
                <li>
                  Completed academic projects in UI/UX, full-stack web apps, and mobile development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
