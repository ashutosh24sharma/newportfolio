import React, { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Exprience() {
  const experience = EXPERIENCES[0];
  const [modalImage, setModalImage] = useState(null); // To handle modal

  return (
    <div className="border-b border-neutral-900 pb-4 text-white px-6 py-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center text-green-400 mb-16 drop-shadow"
      >
        Experience
      </motion.h1>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Experience Card */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="bg-neutral-900 border border-green-700 rounded-3xl shadow-lg hover:shadow-green-400/30 transition-all duration-300 p-10 relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-400 opacity-10 rounded-full blur-3xl pointer-events-none"></div>

          <p className="text-sm text-gray-400 mb-2">{experience.year}</p>

          <h2 className="text-2xl font-bold text-green-300 mb-2">
            {experience.role} <span className="text-white"> @ {experience.company}</span>
          </h2>

          <p className="text-md text-gray-300 leading-relaxed mb-6">
            {experience.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-800 text-purple-300 px-3 py-1 text-sm rounded-full border border-purple-500/40 hover:bg-purple-500/10 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: Image Previews */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          {[
            { src: "/images/interoffer.jpg", label: "Offer Letter" },
            { src: "/images/interncompletion.jpg", label: "Completion Certificate" },
          ].map((img, i) => (
            <div
              key={i}
              onClick={() => setModalImage(img.src)}
              className="w-full rounded-xl overflow-hidden border border-green-600 hover:shadow-md transition cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-[200px] object-cover"
              />
              <p className="text-center text-sm mt-2 text-gray-400">{img.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal to show full image */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img src={modalImage} alt="Full View" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
}

export default Exprience;
