import React, { useState } from "react";
import res from "/public/Res.pdf"
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  


  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors">
            Abhinav Gautam
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["About", "Experience", "Education", "Projects", "Skills"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium transition"
            >
              Contact Me
            </a>
            <a
              href="#resume"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-700">
          {["About", "Experience", "Education", "Projects", "Skills", "Contact","Resume"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-base font-medium transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Nav;
