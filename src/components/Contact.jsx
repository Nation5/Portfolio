import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faLinkedin, faFileArrowDown } from "./icons";
import Reveal from "./Reveal";

export default function Contact({ t, contact }) {
  return (
    <section className="section" id="contact">
      <Reveal as="h2" className="section-title">{t.contactTitle}</Reveal>
      <div className="contact-grid">
        <Reveal>
          <p className="lead">{t.contactText}</p>
          <div className="actions">
            <a className="btn primary" href={`mailto:${contact.email}`}>
              <FontAwesomeIcon icon={faEnvelope} /> {t.emailCta}
            </a>
            <a className="btn" href={contact.cv} download>
              <FontAwesomeIcon icon={faFileArrowDown} /> {t.cvCta}
            </a>
          </div>
        </Reveal>
        <Reveal as="ul" className="contact-list card" delay={150}>
          <li><FontAwesomeIcon icon={faEnvelope} /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
          <li><FontAwesomeIcon icon={faPhone} /><span>{contact.phone}</span></li>
          <li><FontAwesomeIcon icon={faLinkedin} /><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><FontAwesomeIcon icon={faLocationDot} /><span>{contact.location}</span></li>
        </Reveal>
      </div>

      <Reveal as="h3" className="sub">{t.languagesTitle}</Reveal>
      <ul className="languages">
        {t.languages.map(([l, lvl], i) => (
          <Reveal as="li" className="card" key={l} delay={i * 100}><strong>{l}</strong><span>{lvl}</span></Reveal>
        ))}
      </ul>
    </section>
  );
}
