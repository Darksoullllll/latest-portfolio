import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_b8kbsh9", 
        "template_ngt9iyd",     
        form.current,
        "h1Es1XCzyZj1Bg_zi"       
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="section-header text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-gray-400 text-center">
          I'm currently open to new opportunities and collaborations. Whether
          you have a question or just want to say hi, feel free to send me a
          message!
        </p>

        <form ref={form} onSubmit={sendEmail} className="mt-12 space-y-6">
          <div>
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </div>

          {status && (
            <p className="text-center mt-4 text-indigo-400 font-medium">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
