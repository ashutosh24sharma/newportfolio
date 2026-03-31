import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img
          width={90}
          height={90}
          className="bg-transparent rounded-full"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Social Links */}
      <div className="m-8 flex items-center justify-center gap-6 text-3xl">

        <a href="https://www.linkedin.com/in/ashutosh-sharma-980202303/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-green-400 transition" />
        </a>

        <a href="https://github.com/ashutosh24sharma" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-green-400 transition" />
        </a>

        {/* GeeksforGeeks */}
        <a href="https://www.geeksforgeeks.org/user/ashutosh93m73m/" target="_blank" rel="noopener noreferrer">
          <FaCode className="hover:text-green-400 transition" />
        </a>

        {/* LeetCode */}
        <a href="https://leetcode.com/u/ashu_tosh2004/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="hover:text-green-400 transition" />
        </a>

      </div>
    </nav>
  );
}

export default Navbar;