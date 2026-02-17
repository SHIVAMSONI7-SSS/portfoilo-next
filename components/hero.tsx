const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">

      <div className="text-center space-y-6 max-w-2xl">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Frontend Developer
          <span className="block text-gray-400">
            Building Modern Web Experiences
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-500">
          I craft fast, responsive and visually engaging
          interfaces using Next.js, Tailwind and modern UI systems.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center pt-4">

          <button className="bg-white text-black px-6 py-2 rounded-xl hover:scale-105 transition">
            View Projects
          </button>

          <button className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition">
            Contact Me
          </button>

        </div>

      </div>

    </section>
  )
}

export default Hero
