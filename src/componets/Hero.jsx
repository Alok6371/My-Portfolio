import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import profile from "../assets/Alokprofile.jpeg"
import resume from "../assets/Alok_pradhan_React_js_Developer.pdf"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I&apos;m <span className="text-primary">Alok pradhan</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-700">
            Passionate <b>Frontend Developer</b> experienced in
            <b> React.js, JavaScript, Tailwind CSS, and modern UI design</b>.
            Built scalable web applications including admin dashboards,
            e-commerce platforms, and social media projects.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={resume}
              download
              className="bg-primary text-black px-6 py-3 rounded-xl shadow hover:scale-105 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border-2 border-primary text-primary px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex gap-6 text-3xl">
            <a
              href="https://github.com/Alok6371"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in//"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={profile}
            alt="Alok Pradhan"
            className="w-64 h-80 md:w-80 md:h-90 object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
        </motion.div>

      </div>
    </section>
  )
}