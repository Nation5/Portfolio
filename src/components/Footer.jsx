import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "./icons";

export default function Footer({ t, contact }) {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
      <p>© {new Date().getFullYear()} {t.name}. {t.footer}</p>
    </footer>
  );
}
