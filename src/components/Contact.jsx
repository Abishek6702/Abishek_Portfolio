import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // For success or error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Dynamically update state based on field name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email to you (the website owner)
    emailjs
      .sendForm(
        "service_23xcvia", // Your EmailJS service ID
        "template_9xxgcml", // Your EmailJS template ID for the owner
        e.target, // The form that is being submitted
        "GY1zS0UdC3wtdngQW" // Your EmailJS user ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
        },
        (error) => {
          setStatus("Error sending message. Please try again.");
        }
      );

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <div className="grid md:grid-cols-2 place-items-center gap-10 md:gap-16">
        <div>
          <div className="text-gray-300 my-3">
            <h3 className="text-4xl font-semibold mb-5">
              About <span>Me</span>
            </h3>
            <p className="text-justify leading-7 w-full md:w-10/12 mx-auto">
              I'm a passionate web developer with experience in building
              responsive and dynamic websites. My expertise spans front-end
              with React.js as well as back-end development with Node.js and
              MongoDB. I strive to deliver high-quality scalable solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-7 justify-center md:justify-start mt-10">
            <div className="bg-gray-800/40 p-4 rounded-lg text-center">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                5 <span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Projects</span>
              </p>
            </div>

            <div className="bg-gray-800/40 p-5 rounded-lg text-center">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                1.5 <span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Years of experience</span>
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-full md:max-w-lg p-5 md:p-12" id="form">
          <p className="text-gray-100 font-bold text-xl mb-2">Let´s connect!</p>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name ..."
            value={formData.name}
            onChange={handleChange}
            className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email ..."
            value={formData.email}
            onChange={handleChange}
            className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <textarea
            name="message"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Your Message ..."
            value={formData.message}
            onChange={handleChange}
            className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <button type="submit" className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color">
            Send Message
          </button>

          {status && <p className="mt-4 text-white">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
