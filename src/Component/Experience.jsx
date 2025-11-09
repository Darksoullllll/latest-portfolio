import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          Work Experience
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-gray-700"></div>

          {/* Experience Item 1: Samsung */}
          <div className="relative mb-12">
            <div className="absolute left-1/2 -ml-3 w-6 h-6 bg-indigo-600 rounded-full border-4 border-gray-900"></div>

            <div className="md:w-5/12 md:ml-auto md:pl-8 md:text-left">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white">Software Developer</h3>
                <p className="text-indigo-400 font-semibold my-1">Samsung R&D Delhi</p>
                <span className="text-sm text-gray-400">August - Present | Onsite</span>

                <p className="text-gray-300 mt-3">
                  Contributing to the development of cutting-edge software solutions as part of the Cloud Platform Team.
                </p>

                <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
                  <li>
                    Created <span className="text-indigo-300 font-medium">Agentic AI solutions</span> to enhance automation and intelligent decision-making for cloud-based workflows.
                  </li>
                  <li>
                    Worked extensively with <span className="text-indigo-300 font-medium">MCP Server, AWS Cloud Services, and Apache JMeter</span> for performance testing and infrastructure optimization.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Item 2: Celebal Technologies */}
          <div className="relative mb-12">
            <div className="absolute left-1/2 -ml-3 w-6 h-6 bg-indigo-600 rounded-full border-4 border-gray-900"></div>

            <div className="md:w-5/12 md:mr-auto md:pr-8 md:text-right">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white">Machine Learning Intern</h3>
                <p className="text-indigo-400 font-semibold my-1">
                  Celebal Technologies
                </p>
                <span className="text-sm text-gray-400">May 2024 - July 2024 | Remote</span>
                <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
                  <li>Developed a <span className="text-indigo-300 font-medium">Customer Segmentation Report</span> using company-provided data, involving data cleaning and exploratory data analysis (EDA) to generate key insights.</li>
                  <li>Built a <span className="text-indigo-300 font-medium">machine learning project</span> using the KNN classifier to determine loan eligibility based on customer profiles.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
