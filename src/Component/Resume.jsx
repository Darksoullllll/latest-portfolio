import React from "react";
import res from "/public/Res.pdf"
const Resume = () => {
  return (
    <section id="resume" className="container mx-auto px-4 py-16 text-white">
      <h2 className="section-header text-3xl sm:text-4xl font-bold text-center text-white mb-16">Resume</h2>
      <iframe
        src="./Res.pdf"
        className="w-full h-[80vh] border border-gray-700 rounded-lg shadow-2xl"
        title="Resume Preview"
      />
    </section>
  );
};

export default Resume;
