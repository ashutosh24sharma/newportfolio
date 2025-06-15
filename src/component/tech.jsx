import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPython,
  
 
} from "react-icons/si";
import { FaCode } from "react-icons/fa"; 

const techStack = [
  { name: "React", icon: SiReact, color: "text-cyan-400", path: "/tech/react" },
  { name: "Express.js", icon: SiExpress, color: "text-white", path: "/tech/express" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", path: "/tech/node" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400", path: "/tech/mongodb" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", path: "/tech/javascript" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300", path: "/tech/tailwind" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500", path: "/tech/html" },
  { name: "CSS", icon: SiCss3, color: "text-blue-400", path: "/tech/css" },
  { name: "Java", icon: FaCode, color: "text-red-500", path: "/tech/java" },
  { name: "Python", icon: SiPython, color: "text-yellow-300", path: "/tech/python" },
 
];

const SkillsTechnologies = () => {
  const navigate = useNavigate();

  const iconVariats=(duration)=>({
    initial: {y:-10},
    animate:{ y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeateType:"reverse",

        },
    }
})

  return (
    <div className="border-b  border-neutral-900 pb-16  p-8">
      <motion.h1  whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className="my-20 text-center text-green-500 text-semi-bold text-5xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {techStack.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div variants={iconVariats(1.5)} initial="initial" animate="animate"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              onClick={() => navigate(tech.path)}
              className="bg-gradient-to-tr from-gray-800 to-gray-700 p-6 rounded-2xl shadow-xl cursor-pointer border border-gray-700 hover:border-cyan-400 transition w-32 h-32 flex flex-col items-center justify-center"
            >
              <IconComponent className={`text-6xl ${tech.color} mb-2`} />
              <p className="text-center text-sm font-semibold">{tech.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillsTechnologies;
