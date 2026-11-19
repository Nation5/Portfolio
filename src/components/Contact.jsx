import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faLinkedin, faFileArrowDown } from "./icons";

export default function Contact({ t, contact }) {
  return (
    <section className="section" id="contact">
      <h2>{t.contactTitle}</h2>
      <div className="contact-grid">
        <div>
          <p className="lead">{t.contactText}</p>
          <div className="actions">
            <a className="btn primary" href={`mailto:${contact.email}`}>
              <FontAwesomeIcon icon={faEnvelope} /> {t.emailCta}
            </a>
            <a className="btn" href={contact.cv} download>
              <FontAwesomeIcon icon={faFileArrowDown} /> {t.cvCta}
            </a>
          </div>
        </div>
        <ul className="contact-list">
          <li><FontAwesomeIcon icon={faEnvelope} /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
          <li><FontAwesomeIcon icon={faPhone} /><span>{contact.phone}</span></li>
          <li><FontAwesomeIcon icon={faLinkedin} /><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><FontAwesomeIcon icon={faLocationDot} /><span>{contact.location}</span></li>
        </ul>
      </div>

      <h3 className="sub">{t.languagesTitle}</h3>
      <ul className="languages">
        {t.languages.map(([l, lvl]) => (
          <li key={l}><strong>{l}</strong><span>{lvl}</span></li>
        ))}
      </ul>
    </section>
  );
}
