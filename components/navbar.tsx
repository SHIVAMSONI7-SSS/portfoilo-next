import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl font-bold bg-gradient-to-red from-white to-gray-400 bg-clip-text text-transparent">
          Shivam.dev
        </h1>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          <a
            href="#"
            className="hover:text-white transition relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[1p] bg-white transition-all group-hover:w-full" />
          </a>

          <a
            href="#"
            className="hover:text-white transition relative group"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[1p] bg-white transition-all group-hover:w-full" />
          </a>

          <a
            href="#"
            className="hover:text-white transition relative group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[1p] bg-white transition-all group-hover:w-full" />
          </a>

          <a
            href="#"
            className="hover:text-white transition relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[1p] bg-white transition-all group-hover:w-full" />
          </a>

          {/* CTA BUTTON */}
          <Button
            variant="secondary"
            className="rounded-xl px-5"
          >
            Resume
          </Button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
