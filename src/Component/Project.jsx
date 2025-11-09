import React from "react";
import testcase from "../assets/testcase.jpg";
import ragbot from "../assets/chatbot.jpg";
import eye from "../assets/eye.jpg";
const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          Featured Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
            <img
              src={testcase}
              alt="Project 1 Screenshot"
              className="w-full h-56 object-cover"
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/600x400/4F46E5/FFFFFF?text=Error")
              }
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                APIGen-Test
              </h3>
              <p className="text-gray-400 mb-4">
                This project provides an AI-powered test case generator and validator built with Microsoft Autogen, Docker-based code execution, and Streamlit.
It enables developers to automatically generate, run, and validate API-related test cases in a controlled Docker environment, and produce a final report with results.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-indigo-500/20 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full">
                  Autogen
                </span>
                <span className="bg-green-500/20 text-green-300 text-xs font-medium px-3 py-1 rounded-full">
                  Docker
                </span>
                <span className="bg-blue-500/20 text-blue-300 text-xs font-medium px-3 py-1 rounded-full">
                  LLM
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Darksoullllll/AutoGen-Agentic-AI-API-TestCaseValidator-APIGen-Test"
                  className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
            <img
              src={ragbot}
              alt="Project 2 Screenshot"
              className="w-full h-56 object-cover"
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/600x400/10B981/FFFFFF?text=Error")
              }
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Rag - Based Healthcare Chat Bot
              </h3>
              <p className="text-gray-400 mb-4">
                The RAG Care healthcare chatbot, developed using RAG and the Gemini API key, is trained on medical textbook PDFs. 
                It provides accurate and relevant answers based on the information from the medical texts.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-pink-500/20 text-pink-300 text-xs font-medium px-3 py-1 rounded-full">
                  Flask
                </span>
                <span className="bg-yellow-500/20 text-yellow-300 text-xs font-medium px-3 py-1 rounded-full">
                  Vector db
                </span>
                <span className="bg-purple-500/20 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">
                  Langchain
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Darksoullllll/Rag-Based-Health-Care-Chat-Bot"
                  className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
            <img
              src={eye}
              alt="Project 3 Screenshot"
              className="w-full h-56 object-cover"
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/600x400/EC4899/FFFFFF?text=Error")
              }
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Papilledema-Pseudopapilledma Detection
              </h3>
              <p className="text-gray-400 mb-4">
                This is a Deep Learning project built using CNN (Convolutional Neural Networks). 
                It predicts whether the user has papilledema or pseudopapilledema in their eye.
                It is designed to assist healthcare professionals by providing quick and reliable predictions.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-red-500/20 text-red-300 text-xs font-medium px-3 py-1 rounded-full">
                  Python
                </span>
                <span className="bg-orange-500/20 text-orange-300 text-xs font-medium px-3 py-1 rounded-full">
                  Flask
                </span>
                <span className="bg-gray-500/20 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                  Deep Learning CNN(vgg16/alexnet)
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Darksoullllll/Papilledema-Pseudopapilledema-using-CNN-with-flask"
                  className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
