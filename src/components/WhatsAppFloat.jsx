import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { waLink } from "./whatsapp";

export default function WhatsAppFloat({ t, contact }) {
  return (
    <a
      className="wa-float"
      href={waLink(contact.whatsapp, t.whatsappHello)}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsappCta}
    >
      <span className="wa-float-text">{t.whatsappFloat}</span>
      <span className="wa-float-icon"><FontAwesomeIcon icon={faWhatsapp} /></span>
    </a>
  );
}
