import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-20 sm:py-32 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Education Card 1: Bennett University */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-indigo-500/20 hover:border-indigo-500 border border-gray-600">
            <h3 className="text-xl font-bold text-white">Bennett University</h3>
            <p className="text-indigo-300 font-medium my-1">
              B.Tech - Computer Science
              <div>
                (Specilization In AI/ML)
              </div>
              
            </p>
            <p className="text-gray-400 text-sm">(2021 - 2025)</p>
          </div>

          {/* Education Card 2: KV Pragati Vihar */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-indigo-500/20 hover:border-indigo-500 border border-gray-600">
            <h3 className="text-xl font-bold text-white">
              Kendriya Vidyalaya Pragati Vihar, New Delhi
            </h3>
            <p className="text-indigo-300 font-medium my-1">
              Class 12th (Senior Secondary)
            </p>
            <p className="text-gray-400 text-sm">(Year of Completion: 2020)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
