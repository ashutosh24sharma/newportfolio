import React, { useState } from "react";
import { useParams } from "react-router-dom";

const allProjects = {
  mern: [
    {
      id: "mern-auth",
      title: "NonStop Chat",
      image: "/images/Screenshot 2025-05-03 213252.png",
      about:
        "The Real-Time Chat Application is a full-stack web project designed to facilitate instant messaging between users through a modern, responsive interface. Built using React for the frontend, Node.js and Express for the backend, and Socket.IO for real-time communication, this application allows users to engage in one-on-one or group chats seamlessly. Key features include real-time message delivery, typing indicators, and read receipts, all contributing to a smooth user experience. Authentication is handled securely using JWT tokens and password hashing, while chat histories are stored and retrieved using MongoDB. The UI is crafted with Tailwind CSS to ensure responsiveness across all devices. The project is fully deployed with the frontend hosted on [Vercel/Netlify] and backend on [Render/Railway/AWS], demonstrating both development and deployment proficiency. This project highlights practical skills in building scalable, real-time web applications with modern tech stacks.",
      functionalities: [
        "Real-time one-on-one and group messaging with Socket.IO",
        "Secure user authentication using JWT and hashed passwords",
        "Typing indicators and message read receipts",
        "Responsive UI built with React and Tailwind CSS",
      ],
      github: "https://github.com/ashutosh24sharma/chatapp",
      deployed: "https://chatapp-9rqo.onrender.com/login",
    },
    {
      id: "mern-blog",
      title: "BookHeaven",
      image: "/images/Screenshot 2025-02-13 222617.png",
      about: "The Bookstore E-commerce Application is a full-featured online platform developed to facilitate the buying and selling of books. Users can browse a wide range of books, view detailed descriptions, search by category or keyword, and add items to their cart for a seamless purchasing experience. Registered users can also list books for sale, manage their inventory, and track orders. The application features secure user authentication, dynamic product management, and responsive UI components for both desktop and mobile users. Built using the MERN stack (MongoDB, Express, React, Node.js), the platform offers a smooth and intuitive interface backed by a robust backend architecture. Integrated payment gateways and real-time inventory updates ensure a reliable and user-friendly shopping experience.",
      functionalities: ["Secure user authentication with personalized profile management", "Users can buy,sell,and manage books,including favorites and cart", "Integrated payment system for smooth and secure transactions","Full book management: add, delete, and organize listings easily"],
      github: "https://github.com/ashutosh24sharma/Bookstores",
      deployed: "https://www.youtube.com/watch?v=8aoqN-9zpJ8",
    },
  ],
  javascript: [
    {
      id: "js-todo",
      title: "To-Do App",
      image: "/images/todo.png",
      about: "This To-Do App is a lightweight and responsive task manager built using HTML, CSS, and pure JavaScript. It allows users to add, delete, and mark tasks as completed, offering a clean and interactive interface without relying on any external frameworks Tasks are stored using localStorage ensuring they persist even after the browser is closed.",
      functionalities: [
        "Add and remove tasks dynamically",
        "Mark tasks as completed or active",
        "Filter tasks by completion status",
        "Persistent task storage with localStorage"
      ],
      github: "http://github.com/ashutosh24sharma/todogame",
      deployed: "https://todogame-git-main-ashutosh-sharmas-projects-ee076433.vercel.app/",
    },
    {
      id: "js-calculator",
      title: "JS Calculator",
      image: "/images/image.png",
      about: "This Calculator App is a responsive and interactive web-based calculator built using React, styled with Tailwind CSS, and powered by core JavaScript logic for computation. The primary goal of this project is to deepen the understanding of JavaScript fundamentals such as state management, event handling, conditional rendering, and functional logic implementation It supports all basic arithmetic operations like addition, subtraction, multiplication, and division, along with functionalities like clear/reset, delete last entry, and live expression evaluation. ",
      functionalities: ["Perform basic arithmetic operations (add, subtract, multiply, divide)", "Clear, reset, and delete last input features", "Handles input logic with real-time expression evaluation","Responsive UI built with Tailwind CSS for all devices"],
      github: "https://github.com/ashutosh24sharma/react_calculator",
      deployed: "https://react-calculator-nine-mu.vercel.app/",
    },
  ],
  "html-css": [
    {
      id: "landing-page",
      title: "AI TOOlS HUB",
      image: "/images/AItools.png",
      about: "This is a visually engaging frontend project designed to showcase and simplify access to a wide range of AI tools for users. The platform offers an elegant and modern UI enhanced with smooth 3D animations, delivering an immersive browsing experience. Whether users are looking for AI-powered writing assistants, image generators, code tools, or productivity boosters, this site makes discovering and exploring them effortless.Crafted with a strong focus on user experience, the interface is sleek, interactive, and fully responsive across all devices. The frontend emphasizes design and animation — backend integrations are not included in this version.",
      functionalities: ["Explore a curated collection of popular and emerging AI tools.", "Smooth 3D animations for interactive and immersive navigation.", "Clean, responsive, and modern UI for all screen sizes.","Tool descriptions with categories, features, and usage highlights."],
      github: "https://github.com/ashutosh24sharma/FrontendCom",
      deployed: "https://frontend-com-rho.vercel.app/",
    },
    {
      id: "portfolio-site",
      title: "Studentmart",
      image: "/images/studentmart.png",
      about: "This project is a fully responsive e-commerce website frontend built specifically for students. It serves as an online platform where users can explore and buy a wide variety of student-related materials such as books, stationery, study tools, academic gadgets, and more. The main goal is to provide an intuitive, clean, and fast interface to enhance the shopping experience for students.The frontend is designed using modern web technologies to ensure an engaging UI and seamless navigation. This project focuses on layout, user interaction, and product presentation — the backend (authentication, database, payments) is not included in this version.",
      functionalities: [
        "Browse and search a wide range of student-related products.",
        "Filter and sort items by category, price, or relevance.",
        "Add products to the cart and manage cart items.",
        "Fully responsive design for mobile, tablet, and desktop."
      ],
      github: "https://github.com/ashutosh24sharma/studentsmart",
      deployed: "https://studentmart.netlify.app/",
    },
    
  ],
  "react-tailwind": [
    {
      id: "react-dashboard",
      title: "Trend Bloom",
      image: "/images/trendbloom.png",
      about: "StyleSphere is a stylish and feature-rich e-commerce frontend designed for buying and selling trendy and fashionable clothes. It offers a seamless user experience with a stunning 3D animated interface and a modern, intuitive UI that enhances the shopping journey. Users can browse, search, and explore clothing collections with ease, all within a beautifully crafted layout.The design supports both light and dark modes, ensuring visual comfort and user preference. While the site emphasizes design and animations, backend services like real-time payment or database integration are not included in this version.",
      functionalities: [
        "Buy and sell fancy clothing with an elegant, interactive UI.",
        "Toggle between light and dark mode for user comfort.",
        "Search bar for quick product discovery and navigation.",
        "Engaging 3D animations for a premium browsing experience."
      ],
      github: "https://github.com/ashutosh24sharma/-TrendBloom",
      deployed: "https://trend-bloom.vercel.app/",
    },
    {
      id: "react-landing",
      title: "Personal Portfolio",
      image: "/images/portfolio.png",
      about: "This personal portfolio website is a modern, visually appealing digital space crafted using React and Tailwind CSS, offering a smooth and responsive user experience. It showcases all my achievements, skills, and projects in an elegant layout enhanced with engaging Framer Motion animations. Designed with a clean and professional UI, the site emphasizes interactivity and aesthetic appeal, making it not just a showcase but an immersive journey through my career and accomplishments.",
      functionalities: ["Showcases achievements, skills, and projects", "Modern UI with Tailwind CSS", "Animated with Framer Motion","Fully responsive and mobile-friendly"],
      github: "https://github.com/ashutosh24sharma/portfolio",
      deployed: "https://portfolio-plum-iota-29.vercel.app/",
    },
  ],
};

const ProjectDetailPage = () => {
  const { projectId } = useParams(); // 'mern', 'javascript', etc.
  const projects = allProjects[projectId];

  const [expandedStates, setExpandedStates] = useState({});

  const toggleExpand = (id) => {
    setExpandedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!projects)
    return (
      <div className="text-white p-10 text-xl">
        ❌ No projects found in this category.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl text-center font-bold mb-10 uppercase">
        {projectId.replace("-", " ")} Projects
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-70 object-cover bg-white p-4 rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold text-green-500 mb-2">{project.title}</h2>

            <div className="max-w-xl mx-auto">
              <p
                className={`text-gray-300 transition-all duration-300 ${
                  expandedStates[project.id] ? "" : "line-clamp-3"
                }`}
              >
                {project.about}
              </p>
              <button
                onClick={() => toggleExpand(project.id)}
                className="mt-0 text-blue-500 hover:underline focus:outline-none"
              >
                {expandedStates[project.id] ? "Show less" : "Read more"}
              </button>
            </div>

            <h3 className="font-semibold mb-2 mt-4">Key Functionalities:</h3>
            <ul className="text-sm text-gray-400 mb-4 list-disc list-inside space-y-1">
  {project.functionalities.map((item, idx) => (
    <li
      key={idx}
      className="whitespace-nowrap overflow-hidden text-ellipsis truncate text-blue-400"
      title={item} // optional: shows full text on hover
    >
      {item}
    </li>
  ))}
</ul>


            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
              >
                GitHub
              </a>
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-xl transition"
              >
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
