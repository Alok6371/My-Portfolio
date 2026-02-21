export default function Projects() {
  return (
    <section className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">


        {/* Project 1 */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">

          <h3 className="text-2xl font-semibold">
            E-Commerce Website
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Technologies: React.js, JavaScript, Tailwind CSS
          </p>

          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">

            <li>
              Built a responsive e-commerce website with product
              listing and cart functionality.
            </li>

            <li>
              Implemented product filters and dynamic UI
              using React components.
            </li>

            <li>
              Designed modern and user-friendly interface
              with Tailwind CSS.
            </li>

          </ul>
          <div>
            <a href="https://jikkkk.vercel.app/" target="_blank" className="text-blue-600 text-xl font-semibold p-4 pt-10">Live App</a>
            <a href="https://github.com/Alok6371/Grocory-App/tree/main/06_Grocory " target="_blank" className="text-blue-600 text-xl font-semibold p-4 pt-10">Repo Link</a>
          </div>
        </div>



        {/* Project 2 */}
        <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">

          <h3 className="text-2xl font-semibold">
            Dress Store Collection
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Technologies: React.js, JavaScript, Tailwind CSS
          </p>

          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">

            <li>
              Built a modern dress store website with product
              collections and category filtering.
            </li>

            <li>
              Implemented product listing with images,
              prices, and size options.
            </li>

            <li>
              Designed responsive and attractive user interface
              for mobile and desktop devices.
            </li>

          </ul>
          <div>
            <a href="https://apna-bazar-two.vercel.app/" target="_blank" className="text-blue-600 text-xl font-semibold p-4 pt-10">Live App</a>
            <a href="https://github.com/Alok6371/ApnaBazar" target="_blank" className="text-blue-600 text-xl font-semibold p-4 pt-10">Repo Link</a>
          </div>
        </div>



        {/* Project 3 */}
        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">

          <h3 className="text-2xl font-semibold">
            VerbaVerse Social Media App
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Technologies: React.js, Tailwind CSS, Clerk Auth
          </p>

          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">

            <li>
              Built a social media platform with login,
              profile, and messaging system.
            </li>

            <li>
              Implemented authentication and user interface
              using modern React practices.
            </li>

            <li>
              Designed responsive layout for mobile
              and desktop.
            </li>

          </ul>
          <a href="">Repo Link</a>

        </div>



        {/* Project 4 */}
        <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">

          <h3 className="text-2xl font-semibold">
            Portfolio Website
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Technologies: React.js, Tailwind CSS
          </p>

          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">

            <li>
              Designed personal portfolio website to
              showcase projects and skills.
            </li>

            <li>
              Created modern UI with responsive design.
            </li>

            <li>
              Optimized layout for better user experience.
            </li>

          </ul>

        </div>


      </div>

    </section>
  )
}