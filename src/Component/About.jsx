import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header text-3xl sm:text-4xl font-bold text-center text-white">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mt-16">
          {/* Left Column (Image) */}
          <div className="w-full lg:w-1/2 flex justify-center">
          <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_tfb3estd.json"
          style={{ height: "400px", width: "400px" }}
          />
          </div>

          {/* Right Column (Text) */}
          <div className="w-full lg:w-1/2 text-lg text-gray-300 space-y-6">
            <p>
              Hello! I'm <span className="text-indigo-400 font-semibold">Abhinav</span>, a software developer driven by a passion for technology and innovation. My journey in tech began with a curiosity for how things work, which quickly evolved into a career dedicated to building efficient and scalable software solutions.
            </p>
            <p>
              I thrive in collaborative environments, tackling challenging problems, and continuously learning new technologies. My experience ranges from developing backend services to working on large-scale enterprise applications.
            </p>
            <p>
              When I'm not coding, I enjoy contributing to open-source projects, competing in coding challenges on{" "}
              <a
                href="https://leetcode.com/u/Darksoulllll/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                LeetCode
              </a>{" "}
              and exploring new tech trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
