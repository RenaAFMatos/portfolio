import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import Logo from "./assets/rena.png";

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Rena Logo" className="logo"/>
            <a
                href="https://www.linkedin.com/in/eng-renato-matos/"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedin className="link"/>
            </a>
            <a
                href="https://github.com/RenaAFMatos"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithubSquare className="link"/>
            </a>
        </footer>
    );
}

export default Footer;
