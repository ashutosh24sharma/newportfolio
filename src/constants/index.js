import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I’m a passionate Full Stack Web Developer dedicated to building modern, responsive, and performance-driven web applications. From intuitive user interfaces to powerful server-side logic, I bring ideas to life using technologies like React, Tailwind CSS, Node.js, MongoDB, and Express. My focus is on creating clean code, smooth animations, and seamless user experiences — all with a developer’s precision and a designer’s eye.

Explore my projects, see how I solve real-world problems, and let’s build something amazing together.`;

export const ABOUT_TEXT = `Here’s a cleaner and slightly improved version of your paragraph, keeping the length almost the same and highlighting your internships:

I’m a dedicated Full Stack Web Developer with a strong foundation in building dynamic, responsive, and user-centric web applications. My tech stack includes React, Tailwind CSS, Node.js, Express, and MongoDB, enabling me to develop both intuitive frontends and robust backends. I have completed full stack development internships, gaining hands-on experience in real-world projects and collaborative workflows. Winning a coding hackathon strengthened my problem-solving skills and ability to perform under pressure. Driven by curiosity and continuous learning, I focus on writing clean, efficient code and building functional, visually engaging web applications.
`;

export const EXPERIENCES = [
  {
    year: "April 2025 – June 2025",
    role: "Full Stack Developer Intern",
    company: "Unified Mentor Private Limited",
    description: " Designed and deployed a full-stack e-commerce (bookstore) application using the MERN stack. Improved frontend performance using React.js and Tailwind CSS and deployed the application on Vercel.",
    technologies: ["React","Express.js", "Node.js", "MongoDB"],
    images: [
      { src: "/images/interoffer.jpg", label: "Offer Letter" },
      { src: "/images/interncompletion.jpg", label: "Certificate" }
    ]
  },
  {
    year: "July 2025 - September 2025",
    role: "Data Analyst Intern",
    company: "Shiv Nader Foundation",
    description: `Worked on a real-world survey dataset focused on candidate study and behavioral patterns. My role involved data cleaning, preprocessing, and performing EDA using Python, SQL, and Excel to uncover insights and trends. I also developed interactive dashboards and storytelling reports in Power BI to visualize key findings. Collaborated closely with an experienced data analytics team, gaining hands-on experience in end-to-end data analysis, visualization, and reporting.`,
    technologies: ["Excel", "Python", "SQL", "Power BI"],
    images: [
       { src: "/images/offermail.jpg", label: "Offer Mail" },
            { src: "/images/certificatedata.jpg", label: "Completion Certificate" }
    ]
  },
  {
    year: "January 2026 - April 2026",
    role: "Web Developer Intern",
    company: "Codevirus Security Pvt Ltd",
    description: `Developed HackYard, a secure full-stack MERN application with RESTful APIs and authentication. Built responsive React.js UI and optimized performance using MongoDB and Tailwind CSS`,
     technologies: ["React","Express.js", "Node.js", "MongoDB"],
    images: [
       { src: "/images/codeoffer.png", label: "Offer Mail" },
            { src: "/images/", label: "Completion Certificate" }
    ]
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "261301 sidhauli-sitapur ",
  phoneNo: "+9335 8502 33",
  email: "ashu9335850233@gamil.com",
};
