import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="copyright-container">
        <h3 className="footer-logo">SEO ya!</h3>
        <p className="footer-copyright">© SEO ya!, 2024, creado por Gustavo Alviarez</p>
      </div>
      <ul className="footer-ul">
        <li className="footer-li">
          <a className="footer-a" href="#">privay policy</a>
        </li>
        <li className="footer-li">
          <FaGithub />
        </li>
        <li className="footer-li">
          <FaTwitter />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
