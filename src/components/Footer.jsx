import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "./icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { waLink } from "./whatsapp";

export default function Footer({ t, contact }) {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
        <a href={waLink(contact.whatsapp, t.whatsappHello)} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
      </div>
      <p>© {new Date().getFullYear()} {t.name}. {t.footer}</p>
    </footer>
  );
}
