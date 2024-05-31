import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <span className="navbar-logo">SEO ya!</span>
      <ul className="navbar-ul">
        <li className="navbar-li">
          <FaGithub />
        </li>
        <li className="navbar-li">
          <FaTwitter />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
