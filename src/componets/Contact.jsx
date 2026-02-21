
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-primary mb-6">Contact</h2>
      <p className="text-gray-700 mb-6">
        📧 palokpradhan6371@gmail.com <br/>
        📞 +91 6371277537
      </p>
      <div className="flex justify-center gap-8 text-3xl">
        <a href="https://github.com/Alok6371" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer"
           className="text-blue-600">
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-6">
        © 2026 Alok Pradhan
      </p>
    </section>
  )
}