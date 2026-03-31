import React, { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Experience() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="border-b border-neutral-900 pb-16 px-4 md:px-6 lg:px-12 text-white py-20">
      
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-400 mb-16"
      >
        Experience
      </motion.h1>

      {/* Timeline Layout */}
      <div className="max-w-6xl mx-auto relative">
        
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 w-[2px] h-full bg-green-600/40"></div>

        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-12 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center`}
          >
            {/* Dot */}
            <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-neutral-900"></div>

            {/* Card */}
            <div className="w-full md:w-1/2 px-6">
              <div className="bg-neutral-900 border border-green-700 rounded-2xl p-6 shadow-md hover:shadow-green-400/30 transition">

                <p className="text-xs text-gray-400 mb-2">{exp.year}</p>

                <h2 className="text-lg sm:text-xl font-bold text-green-300">
                  {exp.role}
                  <span className="text-white"> @ {exp.company}</span>
                </h2>

                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-purple-300 px-3 py-1 text-xs rounded-full border border-purple-500/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Images */}
                {exp.images && (
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {exp.images.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setModalImage(img.src)}
                        className="cursor-pointer border border-green-600 rounded-lg overflow-hidden"
                      >
                        <img
                          src={img.src}
                          alt={img.label}
                          className="h-32 w-full object-cover hover:scale-105 transition"
                        />
                        <p className="text-xs text-center text-gray-400 py-1">
                          {img.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Full View"
            className="max-h-[80vh] max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default Experience;