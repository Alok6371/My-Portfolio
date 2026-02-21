export default function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Responsive Design",
    "REST API",
    "Git & GitHub",
    "Node.js (Basic)",
    "UI Design",
    "Routing",
    "Component Design"
  ]

  return (

    <section className="py-20 bg-gradient-to-r from-indigo-100 to-purple-100">

      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">

        Skills

      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">

        {skills.map(skill => (

          <div
            key={skill}
            className="bg-white p-5 rounded-xl shadow-md text-center font-medium hover:scale-105 hover:shadow-lg transition"
          >

            {skill}

          </div>

        ))}

      </div>

    </section>

  )
}