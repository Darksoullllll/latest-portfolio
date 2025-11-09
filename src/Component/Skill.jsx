import React from "react";

const skills = [
  "C++",
  "Python",
  "AI/ML",
  "Agentic AI",
  "Data Structures",
  "Algorithms",
  "JavaScript (ES6+)",
  "SQL",
  "Git & GitHub",
  "Docker",
  "AWS",
  "Jmeter"
  
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          My Skills & Technologies
        </h2>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-5 py-3 rounded-lg font-medium border border-gray-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(79,70,229,0.4)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
