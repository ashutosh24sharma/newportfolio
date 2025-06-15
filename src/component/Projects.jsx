// ProjectsPage.jsx
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "mern",
    title: "MERN Stack Projects",
    description: "Robust full-stack apps built with MongoDB, Express, React, and Node.js.",
    image: "/images/mern.svg",
    link: "/projects/mern"
  },
  {
    id: "react-tailwind",
    title: "React + Tailwind CSS Projects",
    description: "Modern and responsive interfaces designed using React and Tailwind CSS.",
    image: "/images/react-tailwind.svg",
    link: "/projects/react-tailwind"
  },
  {
    id: "javascript",
    title: "JavaScript Projects",
    description: "Dynamic and engaging applications crafted with pure JavaScript.",
    image: "/images/javascript.svg",
    link: "/projects/javascript"
  },
  {
    id: "html-css",
    title: "HTML & CSS Projects",
    description: "Elegant, fast-loading static websites built with HTML & CSS.",
    image: "/images/html-css-combined.jpeg",
    link: "/projects/html-css"
  }
];

const ProjectsPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams(); // this reads 'javascript' from /projects/javascript

  useEffect(() => {
    if (projectId) {
      const element = document.getElementById(projectId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [projectId]);

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl text-semi-bold text-green-500"
      >
        PROJECTS
      </motion.h1>
      <motion.div className="min-h-screen p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-neutral-900 pb-4" >
        {projects.map((project, index) => (
          <motion.div
            id={project.id}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => handleCardClick(project.link)}
          >
            <div className="rounded-2xl shadow-md bg-gray-800 transition-all duration-300">
              <div className="p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-contain bg-white rounded-lg mb-4 p-4"
                />
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ProjectsPage;
