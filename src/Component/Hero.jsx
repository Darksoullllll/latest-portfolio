import React from "react";
import myimg from "../assets/myself.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Column (Text & CTA) */}
          <div className="md:w-1/2 text-center md:text-left">
            <span className="text-indigo-400 font-semibold tracking-wide">
              Hi, my name is
            </span>
            <h1 className="mt-2 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Abhinav Gautam.
            </h1>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-300">
              Software Developer.
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto md:mx-0">
              I'm a passionate Software Developer with experience in building
              robust applications and solving complex problems. Currently
              developing innovative solutions at Samsung R&D Delhi.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column (Image with Aesthetic Shadows) */}
          <div className="md:w-1/2 mt-2 md:mt-0 flex justify-center">
            <div className="relative">
              <img
                src={myimg}
                alt="Abhinav Gautam"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-[0_0_40px_rgba(99,102,241,0.4)] border border-gray-700"
                onError={(e) =>
                  (e.target.src =
                    'https://placehold.co/400x400/6366F1/FFFFFF?text=Error')
                }
              />
              {/* Subtle ambient glow below */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_80px_10px_rgba(99,102,241,0.25)] blur-3xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
