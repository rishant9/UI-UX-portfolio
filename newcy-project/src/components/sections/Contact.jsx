import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope size={28} />,
      title: "Email",
      value: "rishantparmar2@gmail.com",
      link: "mailto:rishantparmar2@gmail.com",
    },
    {
      icon: <FaLinkedin size={28} />,
      title: "LinkedIn",
      value: "Rishant Parmar",
      link: "https://www.linkedin.com/in/rishant-parmar/",
    },
    {
      icon: <FaGithub size={28} />,
      title: "GitHub",
      value: "Rishant Parmar",
      link: "https://github.com/yourusername",
    },
    {
      icon: <FaPhone size={28} />,
      title: "Phone",
      value: "+91 8104434038",
      link: "tel:+918104434038",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
            Contact Me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(245,40,145,0.3)] transition"
              >
                <div className="mb-4 text-white">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {contact.title}
                </h3>
                <p className="text-gray-300 text-sm">{contact.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
