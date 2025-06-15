import React from "react";
import { useParams, Link } from "react-router-dom";

const techDetails = {
  react: {
    title: "React",
    description:
      "React is a JavaScript library for building user interfaces. I use React to build dynamic, component-based web applications that are fast and scalable.",
    keyPoints: [
     "JSX syntax for UI rendering",

"Component-based architecture",

"Props and state management",

"Conditional rendering logic",

"Event handling in components",

"Lifecycle methods and hooks (useEffect, useState, etc.)",

"React Router for navigation",

"Form handling and validation",

"Context API for global state",

"Custom hooks creation and usage",

"Error boundaries for safe UI",

"Integration with APIs (fetch/axios)",

"Code splitting and lazy loading",

"Using third-party libraries (e.g., framer-motion, recharts)",

"Optimizing performance with memoization (React.memo, useCallback, useMemo)",
    ],
  },
  node: {
    title: "Node.js",
    description:
      "Node.js allows me to run JavaScript on the server. I use it to build fast, scalable backend services and APIs.",
    keyPoints: [
     "Non-blocking asynchronous programming",

"Creating HTTP servers",

"Using built-in modules (fs, path, os)",

"Event-driven architecture",

"Environment variables with dotenv",

"Working with file system and streams",

"Error handling and debugging",

"Using Node Package Manager (NPM)",

"Modular code with CommonJS/ES Modules",

"Deploying Node apps",
    ],
  },
  express: {
    title: "Express.js",
    description:
      "Express is a minimal and flexible Node.js web application framework. I use it to create robust backend APIs.",
    keyPoints: [
    "Creating RESTful APIs",

"Routing and middleware handling",

"Handling JSON and form data",

"Error handling middleware",

"Static file serving",

"Using template engines (e.g., EJS)",

"Authentication and authorization",

"CORS configuration",

"Working with sessions and cookies",

"Integration with MongoDB or other databases",
    ],
  },
  mongodb: {
    title: "MongoDB",
    description:
      "MongoDB is a NoSQL database I use to store application data in a flexible, JSON-like format.",
    keyPoints: [
    "Schema definition with Mongoose",

"CRUD operations with MongoDB",

"MongoDB data modeling",

"Using ObjectId and population",

"Validation and constraints",

"Aggregation pipeline basics",

"Indexing and performance tuning",

"Connecting MongoDB with Node/Express",

"Using MongoDB Atlas for cloud DB",

"Backup and restore operations",,
    ],
  },
  javascript: {
    title: "JavaScript",
    description:
      "JavaScript is the core language I use to build both frontend and backend functionality.",
    keyPoints: [
    "Variables and data types (let, const, var)",

"Functions and arrow functions",

"DOM manipulation and event handling",

"Template literals and string methods",

"Array methods (map, filter, reduce)",

"Asynchronous JavaScript (Promises, async/await)",

"Closures and lexical scope",

"ES6+ features (destructuring, spread/rest operators)",

"Modules and import/export syntax",

"Working with APIs using fetch/AJAX",

"Error handling with try-catch",

"LocalStorage and sessionStorage",

"Higher-order functions and callbacks",

"JSON parsing and stringification",

"Debugging and browser developer tools",


    ],
  },
  tailwind: {
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework I use to build responsive and modern UIs quickly.",
    keyPoints: [
    "Utility-first styling approach",

"Custom component styling",

"Responsive design with breakpoints",

"Dark/light mode support",

"Animation and transition utilities",

"Flexbox and Grid layouts",

"Hover, focus, and active states",

"Customizing config with tailwind.config.js",

"Plugins and theme extensions",

"Combining Tailwind with React or other frameworks",
    ],
  },
  html: {
    title: "HTML",
    description:
      "HTML is the foundation of all web pages. I use it to create structured, semantic content.",
    keyPoints: [
     "Semantic HTML elements",

"Form elements and validation",

"Input types and accessibility",

"Embedding media (images, video, audio)",

"HTML tables and lists",

"HTML5 APIs (like localStorage, Geolocation)",

"Hyperlinks and anchor attributes",

"Meta tags for SEO and responsiveness",

"Iframe and embedding content",

"Canvas and SVG basics",
    ],
  },
  css: {
    title: "CSS",
    description:
      "CSS is used to style HTML. I use it to create visually appealing and responsive web designs.",
    keyPoints: [
     "Box model and positioning",

"Selectors and combinators",

"Flexbox and Grid layouts",

"Responsive design with media queries",

"Animations and keyframes",

"Pseudo-classes and pseudo-elements",

"CSS variables and custom properties",

"Z-index and stacking context",

"Transitions and transforms",

"Cross-browser compatibility techniques",


    ],
  },
  bootstrap: {
    title: "Bootstrap",
    description:
      "Bootstrap is a popular CSS framework I use to build responsive layouts quickly.",
    keyPoints: [
      "Grid system and responsive layout",

"Pre-built components (navbar, card, modal)",

"Customizing with utility classes",

"Using Bootstrap forms and inputs",

"Responsive breakpoints and containers",

"JavaScript components (carousel, dropdown)",

"Dark/light mode and themes",

"Icons integration (Bootstrap Icons)",

"Extending Bootstrap with custom CSS",

"Using Bootstrap with React (React-Bootstrap)",


    ],
  },
  python: {
    title: "Python",
    description:
      "Python is a high-level programming language I use for scripting, automation, and backend development.",
    keyPoints: [
    "Variables, data types, and operators",

"Control flow (if, for, while)",

"Functions and scope",

"Data structures (list, tuple, set, dict)",

"Object-oriented programming",

"File handling (read/write files)",

"Exception handling",

"Working with modules and packages",

"Virtual environments and pip",

"Intro to libraries like Flask, Django, Pandas",
    ],
  },
  java: {
    title: "Java",
    description:
      "Java is a robust programming language I use for building backend systems and understanding object-oriented concepts.",
    keyPoints: [
      "Object-oriented programming (OOP) concepts",

"Data types and control structures",

"Class, objects, and constructors",

"Inheritance, polymorphism, encapsulation, abstraction",

"Exception handling with try-catch blocks",

"Collections framework (List, Set, Map)",

"File I/O using java.io and java.nio",

"Multithreading and concurrency",

"Java Standard Library (String, Math, Date)",

"Working with JDBC for database connectivity",

"Basic GUI development with Swing/JavaFX",

"Using Maven or Gradle for project management",

"Unit testing with JUnit",

"Package management and modularization",

"Java Virtual Machine (JVM) and memory management",
    ],
  },
};

const TechnologyDetails = () => {
  const { techId } = useParams();
  const tech = techDetails[techId];

  if (!tech) return <div className="text-center text-white mt-20">Technology Not Found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-10">
      
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">{tech.title}</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8 text-center">{tech.description}</p>
      <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-2">
        {tech.keyPoints.map((point, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded-xl border border-gray-700">
            <p className="text-base text-green-400">• {point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyDetails;
